import {NcsInvoiceRequest} from "@/app/types/openapi/components/schemas/InvoiceScrutiny/ncs";

export const handleResponseRequestNcs = (data: any): NcsInvoiceRequest => {
  return {
    "invoiceBasicInfo": {
      "leaseCompanyId": "str",
      "invoiceMethod": "s",
      "upsysKey": "string",
      "previousInvoiceId": "string",
      "previousInvoiceSequence": "string",
      "fplsCarId": data.fplsCarId || "string",
      "upperCmcompanyId": "string",
      "cmFactoryId": data.cmFactoryId || "string",
      "hjnNo": "string",
      "mileage": 0,
      "totalMileage": 0,
      "previousTotalMileage": 0,
      "latestMeterExchangeFlg": true,
      "mntCompDate": "2019-08-24",
      "total": 0,
      "totalDiscount": 0,
      "approvalNumber": [
        "string"
      ],
      "eligibleInvoiceBusinessNumber": "string"
    },
    "invoiceDetailInfo": [
      {
        "detailNumber": 1,
        "maintPartsKbn": "string",
        "leaseMaintPartsCd": "string",
        "maintPartsName": "string",
        "unitCost": 0,
        "workingHours": 0,
        "quantity": 0,
        "specialDiscount": 0,
        "specialDiscountClassification": "1",
        "subtotalExcludingTax": 0
      }
    ]
  }
}