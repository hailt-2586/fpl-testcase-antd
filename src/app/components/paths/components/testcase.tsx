'use client'
import { Collapse, type CollapseProps } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { IHeader } from "@/app/types/openapi/openapi";
import FormTestcaseComponent from "@/app/components/paths/components/form-testcase";
import { sendRequest } from "@/app/utils/api";

interface IConfigTestCase {
  headers: IHeader,
  pathRequest: string,
  pathResponse: string,
  requestBody: any,
  response: string,
  rule: string,
}

interface ITestcaseComponent {
  testcase: IConfigTestCase
}

const TestcaseComponent = (props: ITestcaseComponent) => {
  const { testcase } = props;
  const [items, setItems] = useState<CollapseProps['items']>();
  const listRequestDataMemo = useMemo(async () => {
    const results: string[] = [];

    for (const request of testcase.requestBody) {
      const result = await sendRequest({
        url: testcase.pathRequest,
        method: 'POST',
        body: { ...request }
      });

      results.push(JSON.stringify(result, null, 4));
    }
    
    return results;
  }, [testcase.pathRequest, testcase.requestBody]);

  useEffect(() => {
    const getItems = async () => {
      const items: CollapseProps['items'] = [];
      const listRequestData = await listRequestDataMemo;

      testcase.requestBody.forEach((request: any, key: number) => {
        items.push({
          key: key,
          label: `${request.name}`,
          children: <FormTestcaseComponent key={key} testcase={testcase} request={request} requestData={listRequestData[key]} />
        });
      })
      setItems(items);
    }

    getItems();
  }, [testcase, listRequestDataMemo]);

  return (
    <>
      <Collapse items={items} />
    </>
  );
}

export default TestcaseComponent;