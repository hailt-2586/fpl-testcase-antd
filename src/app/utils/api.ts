import queryString from 'query-string';
import * as process from "process";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL ?? '';

interface IRequest {
  url: string;
  method: string;
  body?: { [key: string]: any };
  queryParams?: any;
  useCredentials?: boolean;
  headers?: any;
  nextOption?: any;
}

export const sendRequest = async <T>(props: IRequest) => {
  let {
    url,
    method,
    body,
    queryParams = {},
    useCredentials = false,
    headers = { 'content-type': 'application/json' },
    nextOption = {}
  } = props;

  url = `${BASE_URL}${url}`
  const options: any = {
    method: method,
    // by default setting the content-type to be json type
    headers: {...headers},
    body: body ? JSON.stringify(body) : null,
    ...nextOption
  };

  if (useCredentials) options.credentials = "include";

  if (queryParams) {
    url = `${url}?${queryString.stringify(queryParams)}`;
  }

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json() as T;
    } else {
      return res.json().then(function (json) {
        // to be able to access error status when you catch the error
        return {
          statusCode: res.status,
          message: json?.message ?? "",
          error: json?.error ?? ""
        } as T;
      });
    }
  });
};