import React from "react";
import _ from "lodash";
import { PageHeader } from "antd";

export const PageHeaderMeta = {
  component: "PageHeader",
  componentIcon: "P",
  componentName: "页头",
  title: "这是一个页头",
  subTitle: "副标题",
};

export const _PageHeader = (option) => {
  const props = _.pick(option, ["title", "subTitle", "extra"]);
  const { title, subTitle, extra, ...rest } = props;
  const component = (
    <PageHeader
      title={<div dangerouslySetInnerHTML={{ __html: title }} />}
      subTitle={<div dangerouslySetInnerHTML={{ __html: subTitle }} />}
      extra={<div dangerouslySetInnerHTML={{ __html: extra }} />}
      {...rest}
    />
  );
  const text = "";
  return { component, text };
};
