import { MalRequestBody } from "@/app/types/openapi/components/schemas/InvoiceScrutiny/mal";
import { NcsRequestBody } from "@/app/types/openapi/components/schemas/InvoiceScrutiny/ncs";
import { SmasRequestBody } from "@/app/types/openapi/components/schemas/InvoiceScrutiny/smas";

export interface IParameters {
  name: string;
  in: "header";
  required: true;
  schema: {
    type: string;
    minLength: number;
    format?: string;
    enum?: '0' | '1';
  };
  description: string;
}

export interface PostInvoiceScrutinyRequestBody {
  "operationId": string;
  "description": string;
  tags: string[];
  parameters: IParameters[];
  requestBody: MalRequestBody | NcsRequestBody | SmasRequestBody;
}