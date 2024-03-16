'use client'
import { Card, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { sendRequest } from "@/app/utils/api";

interface IRequestTestcaseComponent {
  requestName: string,
  path: string,
  request: any
}

const { Item } = Form;
const { TextArea } = Input;

const RequestTestcaseComponent = (props: IRequestTestcaseComponent) => {
  const { requestName, path, request } = props;
  const [ jsonData, setJsonData] = useState({});

  useEffect( () => {
    const handleApi = async () => {
      const res = await sendRequest({
        url: path,
        method: 'POST',
        body: { ...request }
      });

      setJsonData(res as any);
    }
    handleApi();
  }, [path, request])

  return (
    <>
      <Card title="Request" bordered={true} style={{ marginTop: 24 }}>
        <Item name={[requestName, 'request']} initialValue={JSON.stringify(jsonData, null, 4)} >
          <TextArea rows={24} />
        </Item>
      </Card>
    </>
  );
}

export default RequestTestcaseComponent;