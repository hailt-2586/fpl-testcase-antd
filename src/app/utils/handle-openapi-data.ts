import * as yaml from 'js-yaml';
import * as fs from 'fs-extra';
import path from "path";
import RefParser from '@apidevtools/json-schema-ref-parser';
import { IOpenApiSpec } from "@/app/types/openapi/openapi";

function getPath(pathFile: string): string {
  return path.resolve(process.cwd(), `src/app/openapi/${pathFile}`);
}

function replaceRef(openapi: any) {
  const folderPaths: string = 'paths';
  let paths = openapi.paths;

  for (const [pathIndex] of Object.entries(paths)) {
    const path = paths[pathIndex];

    for (const [refIndex, refValue] of Object.entries(path)) {
      const pathRef  = path[refIndex];
      if (pathRef === refValue) {
          if (pathRef.includes(folderPaths)) {
            path[refIndex] = process.cwd() + `/src/app/openapi/${path[refIndex]}`;
          }
      }
    }
  }
}

export default async function getDataJson(): Promise<IOpenApiSpec> {
  const openApiObject = yaml.load(fs.readFileSync(getPath('openapi.yaml'), 'utf-8').toString()) as unknown as IOpenApiSpec;
    const parsedOpenApiObject = await RefParser.parse(openApiObject);
    replaceRef(parsedOpenApiObject);
    return await RefParser.dereference(parsedOpenApiObject);
}