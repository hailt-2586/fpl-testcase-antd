import { Card, Input, Form } from "antd";
import React from "react";
import { IHeader } from "@/app/types/openapi/openapi";

interface IHeaderTestcaseComponent {
  requestName: string,
  headers: IHeader
}

const { Item } = Form;

const HeaderTestcaseComponent = (props: IHeaderTestcaseComponent) => {
  const { requestName, headers } = props;

  return (
    <Card title="Headers" bordered={true}>
      {
        (headers.timeZone)
          ? <Item name={[requestName, 'timeZone']} label='timeZone' initialValue={headers.timeZone} >
            <Input />
          </Item>
          : <></>
      }
      {
        (headers.requestTime)
          ? <Item name={[requestName, 'requestTime']} label='requestTime' initialValue={headers.requestTime}>
            <Input />
          </Item>
          : <></>
      }
      {
        (headers.debugMode)
          ? <Item name={[requestName, 'debugMode']} label='debugMode' initialValue={headers.debugMode}>
            <Input />
          </Item>
          : <></>
      }
      {
        (headers.eventId)
          ? <Item name={[requestName, 'eventId']} label='eventId' initialValue={headers.eventId}>
            <Input />
          </Item>
          : <></>
      }
      {
        (headers.aliasName)
          ? <Item name={[requestName, 'aliasName']} label='aliasName' initialValue={headers.aliasName}>
            <Input />
          </Item>
          : <></>
      }
    </Card>
  );
}

export default HeaderTestcaseComponent;