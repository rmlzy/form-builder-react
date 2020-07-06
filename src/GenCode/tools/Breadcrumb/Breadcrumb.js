import React from "react";
import { Breadcrumb } from "antd";
import _ from "lodash";
import { props2Text } from "../../helper/util";

const defaultChildes = [{ text: "首页" }, { text: "模块A" }, { text: "页面B" }];

export default (option) => {
  option.separator = option.separator || "/";
  const props = _.pick(option, ["separator"]);
  option.childes = option.childes || [];
  if (option.childes.length === 0) {
    option.childes = defaultChildes;
  }
  const component = (
    <Breadcrumb {...props}>
      {option.childes.map((item, i) => {
        return <Breadcrumb.Item key={i}>{item.text}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );

  const itemTexts = option.childes.map((item) => {
    return `<Breadcrumb.Item>${item.text}</Breadcrumb.Item>`;
  });
  const text = `
<Breadcrumb ${props2Text(props)}>
  ${itemTexts.join("\n")}
</Breadcrumb>`;
  return { component, text };
};
