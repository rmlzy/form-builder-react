import React from "react";
import _ from "lodash";
import { Input, Form } from "antd";
import { props2Text, genRules, genDangerHtml } from "../../helper/util";

const _getComponent = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: genDangerHtml(option.extra),
    rules: genRules(option),
  };
  const inputProps = _.pick(option, [
    "addonAfter",
    "addonBefore",
    "maxLength",
    "size",
    "prefix",
    "suffix",
    "allowClear",
    "placeholder",
  ]);
  inputProps.type = option.htmlType || "text";
  return (
    <Form.Item {...formItemProps}>
      <Input {...inputProps} />
    </Form.Item>
  );
};

const _getText = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: option.extra,
    rules: genRules(option),
  };
  const inputProps = _.pick(option, [
    "addonAfter",
    "addonBefore",
    "maxLength",
    "size",
    "prefix",
    "suffix",
    "allowClear",
    "placeholder",
  ]);
  inputProps.type = option.htmlType || "text";
  return `
  <Form.Item ${props2Text(formItemProps)}>
      <Input ${props2Text(inputProps)} />
  </Form.Item>
  `;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
