export interface SmasInvoiceDetail {
  detailNumber: number;
  maintPartsKbn: string;
  leaseMaintPartsCd: string;
  fplMaintPartsCd: string;
  maintPartsName: string;
  unitCost?: number;
  workingHours?: number;
  quantity?: number;
  subtotalExcludingTax?: number;
}

export interface SmasInvoiceRequest {
  invoiceBasicInfo: {
    leaseCompanyId: string;
    invoiceMethod: string;
    upsysKey: string;
    companyCd: string;
    fplsCarId: string;
    totalMileage: number;
    receiveDate: string;
    mntCompDate: string;
    totalParts: number;
    totalAfterDiscount: number;
    specialInspectionCd: string;
  };
  invoiceDetailInfo: SmasInvoiceDetail[];
}

export interface SmasRequestBody {
  content: {
    "application/vnd.smas+json": {
      schema: SmasInvoiceRequest;
    };
  };
}
