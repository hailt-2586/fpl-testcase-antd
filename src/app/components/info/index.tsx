'use client'
import { Flex, Typography } from "antd";
import { IInfo } from "@/app/types/openapi/openapi";

interface IInfoComponent {
  info: IInfo,
  openapi: string
}

const {Title, Paragraph, Link, Text} = Typography;
const InfoComponent = (props: IInfoComponent) => {
  const {info, openapi} = props;

  return (
    <Flex justify='center' style={{width: '100vw'}}>
      <Flex vertical={true} justify='start' style={{width: '80vw', marginTop: '48px', marginBottom: '24px'}}>
        <Flex align='center' gap='small'>
          <Title>
            {info.title}
          </Title>
          <Text
            style={{
              backgroundColor: '#7d8492',
              color: '#fff',
              padding: '0 8px',
              borderRadius: '56px',
              fontWeight: '500'
            }}
          >
            {info.version}
          </Text>
          <Text
            style={{
              backgroundColor: '#89bf04',
              color: '#fff',
              padding: '0 8px',
              borderRadius: '56px',
              fontWeight: '500'
            }}
          >
            OAS {openapi}
          </Text>
        </Flex>
        <Flex>
          <Paragraph>
            {info.description}
          </Paragraph>
        </Flex>
        <Flex>
          <Link href={`mailto:${info.contact.email}`}>
            Contact the developer
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default InfoComponent;