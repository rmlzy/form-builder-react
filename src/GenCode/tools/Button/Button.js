import React from "react";
import { Button } from "antd";
import _ from "lodash";
import { props2Text } from "../../helper/util";

export default (option) => {
  option.size = option.size || "middle";
  option._type = option._type || "primary";
  const props = _.pick(option, ["htmlType", "shape", "size", "block"]);
  props.type = option._type;
  const component = <Button {...props}>{option.text}</Button>;
  const text = `<Button ${props2Text(props)}>${option.text}</Button>`;
  return { component, text };
};
