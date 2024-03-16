'use client'
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import React from "react";
import { IPost } from "@/app/types/openapi/openapi";
import ListCaseComponent from "@/app/components/paths/components/list-case";

interface ITagComponent {
  tagName: string,
  paths: any,
  dataConfigJson: any
}

const TagComponent = (props: ITagComponent) => {
  const { tagName, paths, dataConfigJson } = props;
  const post = paths[`/${tagName}`].post as IPost;

  const getItems = () => {
    const items: CollapseProps['items'] = [];


    Object.keys(post.requestBody.content).forEach((label, key) => {
      items.push({
        key: key,
        label: label,
        children: <ListCaseComponent label={label} dataConfigJson={dataConfigJson[tagName]} />
      });
    })

    return items;
  }
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={getItems()} />
  );
}

export default TagComponent;