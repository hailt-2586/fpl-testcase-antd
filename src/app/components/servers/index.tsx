'use client'
import { Flex, Typography, Select } from "antd";
import { IServer } from "@/app/types/openapi/openapi";

interface IServersComponent {
  servers: IServer[]
}

interface IOption {
  value: string,
  label: string
}

const { Text} = Typography;
const ServersComponent = (props: IServersComponent) => {
  const { servers } = props;

  const getOptions = () => {
    const options: IOption[] = [];

    servers.forEach((server) => {
      options.push({
        label: `${server.url} - ${server.description}`,
        value: server.url
      });
    });

    return options
  }

  return (
    <Flex justify='center' style={{ width: '100vw' }}>
      <Flex vertical={true} justify='start' style={{ width: '80vw', marginTop: '24px', marginBottom: '24px' }}>
        <Text style={{ fontWeight: 500 }}>
          Servers
        </Text>
        <Select
          defaultValue={servers[0].url}
          style={{ width: '20vw' }}
          options={getOptions()}
        />
      </Flex>
    </Flex>
  );
}

export default ServersComponent;