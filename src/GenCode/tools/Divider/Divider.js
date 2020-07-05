import React from "react";
import _ from "lodash";
import { Divider } from "antd";
import { props2Text } from "../../helper/util";

export default (option) => {
  option.type = "horizontal";
  const props = _.pick(option, ["className", "dashed", "orientation", "style", "type", "plain"]);
  const component = <Divider {...props}>{option.text || ""}</Divider>;
  const text = `<Divider ${props2Text(props)}>${option.text || ""}</Divider>`;
  return { component, text };
};
