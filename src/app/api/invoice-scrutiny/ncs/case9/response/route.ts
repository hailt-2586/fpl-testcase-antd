import { NextApiResponse } from 'next';
import db from "@/app/utils/postgres";
import { NcsInvoiceRequest } from "@/app/types/openapi/components/schemas/InvoiceScrutiny/ncs";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { request } = await req.json();

    if (!request) {
      return NextResponse.json({
        detailNumber: 0,
        ruleId: '',
        errorClass: '',
        errorMessage: ''
      });
    }

    const ncsRequest = JSON.parse(request) as NcsInvoiceRequest;
    const { fplsCarId, cmFactoryId } = ncsRequest?.invoiceBasicInfo;

    if (!fplsCarId || !cmFactoryId) {
      return NextResponse.json({
        detailNumber: 0,
        ruleId: '',
        errorClass: '',
        errorMessage: ''
      });
    }

    const [dysh_kbn, leaseorginfo16] = await Promise.all([
      db.query(`SELECT dysh_kbn FROM tfpdh004_carinfo_mntitem WHERE fpls_car_id = ${fplsCarId}`),
      db.query(`SELECT leaseorginfo16 FROM tfpdh005_carinfo_mntflg WHERE fpls_car_id = ${fplsCarId} AND cmfactory_id = ${cmFactoryId}`)
    ]);

    if (!dysh_kbn || !leaseorginfo16) {
      return NextResponse.json({
        detailNumber: 0,
        ruleId: '',
        errorClass: '',
        errorMessage: ''
      });
    }

    const objectCondition = {
      dysh_kbn: dysh_kbn?.rows[0]?.dysh_kbn as number | null,
      leaseorginfo16: leaseorginfo16?.rows[0]?.leaseorginfo16 as number | null
    };

    if (
      (objectCondition.leaseorginfo16 == 0 && objectCondition.dysh_kbn == null)
      || (objectCondition.leaseorginfo16 == 0 && objectCondition.dysh_kbn == 2)
      || (objectCondition.leaseorginfo16 == 1 && objectCondition.dysh_kbn == 2)
      || (objectCondition.leaseorginfo16 == null && objectCondition.dysh_kbn == null)
      || (objectCondition.leaseorginfo16 == null && objectCondition.dysh_kbn == 2)
    ) {
      return NextResponse.json({
        detailNumber: 0,
        ruleId: 'NCS_請求精査_009',
        errorClass: 'エラー',
        errorMessage: 'タイヤ季節履替は契約に含まれません。'
      });
    }

    return NextResponse.json({
      detailNumber: 0,
      ruleId: '',
      errorClass: '',
      errorMessage: ''
    });
  } catch (error) {
    console.error('Error executing query', error);
  }
}
