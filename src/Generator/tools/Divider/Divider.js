import React from "react";
import { Divider } from "antd";
import { props2Text } from "../../helper/util";

const _getComponent = (option) => {
  const dividerProps = {
    dashed: option.dashed,
    orientation: option.orientation,
    type: option._type,
    plain: option.plain,
  };
  return <Divider {...dividerProps}>{option.text || ""}</Divider>;
};

const _getText = (option) => {
  const dividerProps = {
    dashed: option.dashed,
    orientation: option.orientation,
    type: option._type,
    plain: option.plain,
  };
  return `<Divider ${props2Text(dividerProps)}>${option.text || ""}</Divider>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
