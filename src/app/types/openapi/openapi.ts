import {PostInvoiceScrutinyRequestBody} from "@/app/types/openapi/components/schemas/invoice-scrutiny";

export interface IErrorResponse {
  errorCode: string;
  errorMessage: string;
}

export interface IHeader {
  timeZone: string;
  requestTime: string;
  debugMode: "0" | "1";
  eventId: string;
  aliasName?: string;
}

export type IPost = PostInvoiceScrutinyRequestBody

// Interface for info object
export interface IInfo {
  version: string;
  title: string;
  description: string;
  contact: {
    email: string;
  };
}

// Interface for server object
export interface IServer {
  url: string;
  description: string;
}

// Interface for tag object
export interface ITag {
  name: string;
}

export interface IOpenApiSpec {
  openapi: string;
  info: IInfo;
  servers: IServer[];
  tags: ITag[];
  paths: [path: string];
}
