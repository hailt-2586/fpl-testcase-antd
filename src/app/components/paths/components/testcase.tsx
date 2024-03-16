import {Button, Collapse, type CollapseProps, Form} from "antd";
import React from "react";
import { IHeader } from "@/app/types/openapi/openapi";
import HeaderTestcaseComponent from "@/app/components/paths/components/header-testcase";
import RequestTestcaseComponent from "@/app/components/paths/components/request-testcase";
import ResponseTestcaseComponent from "@/app/components/paths/components/response-testcase";

interface IConfigTestCase {
  headers: IHeader,
  path: string,
  requestBody: any,
  response: string,
  rule: string,
}

interface ITestcaseComponent {
  testcase: IConfigTestCase
}

const { useForm, Item } = Form;

const TestcaseComponent = (props: ITestcaseComponent) => {
  const [ form ] = useForm();
  const { testcase } = props;

  const getItems = () => {
    const items: CollapseProps['items'] = [];

    testcase.requestBody.forEach((request: any, key: number) => {
      items.push({
        key: key,
        label: `${request.name}`,
        children: <Form layout={'vertical'} form={form} key={key}>
          <HeaderTestcaseComponent requestName={request.name} headers={testcase.headers}/>
          <RequestTestcaseComponent requestName={request.name} path={testcase.path} request={request} />
          <ResponseTestcaseComponent testcase={testcase} />
          <Item style={{ marginTop: 24 }}>
            <Button type="primary" htmlType="submit">
              Execute
            </Button>
          </Item>
        </Form>
      });
    })

    return items;
  }

  return (
    <>
      <Collapse items={getItems()} />
    </>
  );
}

export default TestcaseComponent;