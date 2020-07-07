import React from "react";
import { Button } from "antd";
import { props2Text } from "../../helper/util";

const _getComponent = (option) => {
  const btnProps = {
    type: option._type,
    htmlType: option.htmlType,
    shape: option.shape,
    size: option.size,
    block: option.block,
  };
  return <Button {...btnProps}>{option.text || ""}</Button>;
};

const _getText = (option) => {
  const btnProps = {
    type: option._type,
    htmlType: option.htmlType,
    shape: option.shape,
    size: option.size,
    block: option.block,
  };
  return `<Button ${props2Text(btnProps)}>${option.text || ""}</Button>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
