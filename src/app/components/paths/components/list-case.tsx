import {Collapse, type CollapseProps, Form} from 'antd';
import {IHeader} from "@/app/types/openapi/openapi";
import React from "react";
import TestcaseComponent from "@/app/components/paths/components/testcase";

interface IListCaseComponent {
  label: string,
  dataConfigJson: any,
}

interface IConfigTestCase {
  headers: IHeader,
  path: string,
  requestBody: any,
  response: string,
  rule: string,
}

const ListCaseComponent = (props: IListCaseComponent) => {
  const { label, dataConfigJson } = props;
  const company = Object.keys(dataConfigJson).find((value) => label.includes(value));
  const testCases: IConfigTestCase[] = (company) ? dataConfigJson[company] : null;

  if (!testCases || testCases.length === 0) {
    return (
      <>No Data</>
    )
  }

  const getItems = () => {
    const items: CollapseProps['items'] = [];

    testCases.forEach((testcase, key) => {
      items.push({
        key: key,
        label: `${testcase.rule} - ${++key}`,
        children: <TestcaseComponent testcase={testcase} />
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

export default ListCaseComponent;