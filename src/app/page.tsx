import getDataJson from "@/app/utils/handle-openapi-data";
import { IOpenApiSpec } from "@/app/types/openapi/openapi";
import InfoComponent from "@/app/components/info";
import ServersComponent from "@/app/components/servers";
import readDataConfigJson from "@/app/utils/handle-config-data";
import { Collapse, type CollapseProps, Flex } from "antd";
import React from "react";
import TagComponent from "@/app/components/paths";

const HomePage = async () => {
  const dataJson: IOpenApiSpec = await getDataJson();
  const info = dataJson.info;
  const servers = dataJson.servers;
  const tags = dataJson.tags;
  const paths = dataJson.paths;

  const getItems = () => {
    const items: CollapseProps['items'] = [];

    tags.forEach((tag, index) => {
      items.push({
        key: index,
        label: tag.name,
        children: <TagComponent tagName={tag.name} paths={paths} dataConfigJson={readDataConfigJson(tag.name)} />
      });
    })

    return items;
  }

  return (
    <>
      <InfoComponent info={info} openapi={dataJson.openapi} />
      <ServersComponent servers={servers} />
      <Flex justify='center' style={{ width: '100vw' }}>
        <Flex vertical={true} justify='start' style={{ width: '80vw', marginTop: '24px', marginBottom: '24px' }}>
          <Collapse items={getItems()} />
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;