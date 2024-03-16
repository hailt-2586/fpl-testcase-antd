'use client'
import HeaderTestcaseComponent from "@/app/components/paths/components/form/header-testcase";
import RequestTestcaseComponent from "@/app/components/paths/components/form/request-testcase";
import ResponseTestcaseComponent from "@/app/components/paths/components/form/response-testcase";
import { Button, Form } from "antd";
import React, {useEffect, useState} from "react";
import { IHeader } from "@/app/types/openapi/openapi";
import {sendRequest} from "@/app/utils/api";

interface IFormTestcaseComponent {
  testcase: IConfigTestCase,
  request: any,
  requestData: string
}

interface IConfigTestCase {
  headers: IHeader,
  pathRequest: string,
  pathResponse: string,
  requestBody: any,
  response: string,
  rule: string,
}

const { useForm, Item } = Form;

const FormTestcaseComponent = (props: IFormTestcaseComponent) => {
  const { testcase, request, requestData } = props;
  const [ form ] = useForm();
  const requestName = `${request.name}_request`;
  const [responseData, setResponseData] = useState<string>('');

  useEffect(() => {
    form.setFieldValue(requestName, requestData);
  }, [form, requestData, requestName]);

  const onSubmitCreate = async (data: any) => {
    const res = await sendRequest({
      url: testcase.pathResponse,
      method: 'POST',
      body: data[request.name]
    });

    setResponseData(JSON.stringify(res, null, 4))
  }
  
  return (
    <Form layout={'vertical'} form={form} onFinish={onSubmitCreate}>
      <HeaderTestcaseComponent requestName={request.name} headers={testcase.headers}/>
      <RequestTestcaseComponent requestName={request.name} jsonData={requestData} />
      { (responseData) ? <ResponseTestcaseComponent data={responseData} /> : <></> }
      <Item style={{ marginTop: 24 }}>
        <Button type="primary" htmlType="submit">
          Execute
        </Button>
      </Item>
    </Form>
  );
}

export default FormTestcaseComponent;