import path from "path";
import * as fs from 'fs-extra';

function getPath(pathFile: string): string {
  return path.resolve(process.cwd(), `src/app/config/${pathFile}`);
}

export default function readDataJson(fileName: string) {
  const rawData = fs.readFileSync(getPath(`${fileName}.json`), 'utf-8');
  return JSON.parse(rawData);
}