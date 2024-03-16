export interface NcsInvoiceDetail {
  detailNumber: number;
  maintPartsKbn: string;
  leaseMaintPartsCd: string;
  maintPartsName: string;
  unitCost?: number;
  workingHours?: number;
  quantity?: number;
  specialDiscount: number;
  specialDiscountClassification: "1" | "2";
  subtotalExcludingTax?: number;
}

export interface NcsInvoiceRequest {
  invoiceBasicInfo: {
    leaseCompanyId: string;
    invoiceMethod: string;
    upsysKey: string;
    previousInvoiceId: string;
    previousInvoiceSequence: string;
    fplsCarId: string;
    upperCmcompanyId: string;
    cmFactoryId: string;
    hjnNo: string;
    mileage?: number;
    totalMileage: number;
    previousTotalMileage: number;
    latestMeterExchangeFlg: boolean;
    mntCompDate: string;
    total: number;
    totalDiscount: number;
    approvalNumber: string[];
    eligibleInvoiceBusinessNumber: string;
  };
  invoiceDetailInfo: NcsInvoiceDetail[];
}

export interface NcsRequestBody {
  content: {
    "application/vnd.ncs+json": {
      schema: NcsInvoiceRequest;
    };
  };
}