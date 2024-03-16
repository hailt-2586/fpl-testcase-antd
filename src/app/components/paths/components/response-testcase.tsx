import { Card, Input, Form } from "antd";
import React from "react";
import { IHeader } from "@/app/types/openapi/openapi";
import JSONPretty from "react-json-pretty";

interface IConfigTestCase {
  headers: IHeader,
  path: string,
  requestBody: any,
  response: string,
  rule: string,
}

interface IResponseTestcaseComponent {
  testcase: IConfigTestCase
}

const { Item } = Form;
const { TextArea } = Input;
const ResponseTestcaseComponent = (props: IResponseTestcaseComponent) => {
  const { testcase } = props;

  return (
    <Card title="Response Sample" bordered={true} style={{ marginTop: 24 }}>
      <JSONPretty data={testcase.response} />
    </Card>
  );
}

export default ResponseTestcaseComponent;