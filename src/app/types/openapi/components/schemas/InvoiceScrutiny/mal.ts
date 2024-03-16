export interface MalInvoiceDetail {
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
  remarks: string;
}

export interface MalInvoiceRequest {
  invoiceBasicInfo: {
    invoiceMethod: string;
    upsysKey: string;
    fplsCarId: string;
    mileage?: number;
    totalMileage: number;
    previousTotalMileage: number;
    mntCompDate: string;
    total: number;
    totalDiscount: number;
    totalAfterDiscount: number;
    approvalNumber: string[];
    outsourcing: boolean;
    attachedMaterials: boolean;
  };
  invoiceDetailInfo: MalInvoiceDetail[];
}

export interface MalRequestBody {
  content: {
    "application/vnd.mal+json": {
      schema: MalInvoiceRequest;
    };
  };
}