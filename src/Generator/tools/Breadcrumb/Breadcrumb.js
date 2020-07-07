import React from "react";
import { Breadcrumb } from "antd";
import _ from "lodash";
import { props2Text } from "../../helper/util";

export default (option) => {
  const props = _.pick(option, ["separator"]);
  const component = (
    <Breadcrumb {...props}>
      {option.childes.map((item, i) => {
        return <Breadcrumb.Item key={i}>{item.text}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
  const itemTexts = option.childes.map((item) => `<Breadcrumb.Item>${item.text}</Breadcrumb.Item>`);
  const text = `
<Breadcrumb ${props2Text(props)}>
  ${itemTexts.join("\n")}
</Breadcrumb>`;
  return { component, text };
};
