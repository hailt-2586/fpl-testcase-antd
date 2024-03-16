import { NextApiResponse } from 'next';
import db from "@/app/utils/postgres";
import { handleResponseRequestNcs } from "@/app/utils/responses/invoice-scrutiny";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { leaseorginfo16, dysh_kbn } =  await req.json();
    const dyshKbnValue = (dysh_kbn !== null) ? `dysh_kbn='${dysh_kbn}'` : 'dysh_kbn IS NULL';
    const leaseorginfo16Value = (leaseorginfo16 !== null) ? `leaseorginfo16='${leaseorginfo16}'` : 'leaseorginfo16 IS NULL';

    const fplsCarIdExecute = await db.query(
      `
        select tfpdh005.fpls_car_id, tfpdh005.cmfactory_id from tfpdh004_carinfo_mntitem as tfpdh004
        join tfpdh005_carinfo_mntflg as tfpdh005 on tfpdh005.fpls_car_id = tfpdh004.fpls_car_id
        where tfpdh004.${dyshKbnValue} and tfpdh005.${leaseorginfo16Value}
        `
    );
    const fplsCarId: string = await fplsCarIdExecute.rows[0].fpls_car_id.toString() || '';
    const cmFactoryId: string = await fplsCarIdExecute.rows[0].cmfactory_id.toString() || '';
    const data = { fplsCarId, cmFactoryId };
    const result = handleResponseRequestNcs(data);

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error executing query', error);
  }
}
