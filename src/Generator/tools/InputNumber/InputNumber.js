import React from "react";
import _ from "lodash";
import { InputNumber, Form } from "antd";
import { props2Text, genRules, genDangerHtml } from "../../helper/util";

const _getComponent = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: genDangerHtml(option.extra),
    rules: genRules(option),
  };
  const inputProps = _.pick(option, [
    "defaultValue",
    "size",
    "allowClear",
    "placeholder",
    "min",
    "max",
    "precision",
    "decimalSeparator",
    "step",
  ]);
  return (
    <Form.Item {...formItemProps}>
      <InputNumber {...inputProps} />
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
    "defaultValue",
    "size",
    "allowClear",
    "placeholder",
    "min",
    "max",
    "precision",
    "decimalSeparator",
    "step",
  ]);
  return `
  <Form.Item ${props2Text(formItemProps)}>
      <InputNumber ${props2Text(inputProps)} />
  </Form.Item>
  `;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
