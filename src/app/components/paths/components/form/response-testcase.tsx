import { Card, Input, Form } from "antd";
import React from "react";
import JSONPretty from "react-json-pretty";

interface IResponseTestcaseComponent {
  data: string
}

const ResponseTestcaseComponent = (props: IResponseTestcaseComponent) => {
  const { data } = props;

  return (
    <Card title="Response" bordered={true} style={{ marginTop: 24 }}>
      <JSONPretty data={data} />
    </Card>
  );
}

export default ResponseTestcaseComponent;