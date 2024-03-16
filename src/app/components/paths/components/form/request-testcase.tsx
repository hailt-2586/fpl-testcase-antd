'use client'
import { Card, Form, Input } from "antd";

interface IRequestTestcaseComponent {
  requestName: string,
  jsonData: string
}

const { Item } = Form;
const { TextArea } = Input;

const RequestTestcaseComponent = (props: IRequestTestcaseComponent) => {
  const { requestName, jsonData } = props;

  return (
    <>
      <Card title="Request" bordered={true} style={{ marginTop: 24 }}>
        <Item name={[requestName, 'request']} initialValue={jsonData} >
          <TextArea rows={24} />
        </Item>
      </Card>
    </>
  );
}

export default RequestTestcaseComponent;