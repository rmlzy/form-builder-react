import React from "react";
import { Form, Select } from "antd";
import { genDangerHtml, genRules, props2Text } from "../../helper/util";

const _getComponent = (option) => {
  const formItemProps = {
    label: option.label,
    extra: genDangerHtml(option.extra),
    rules: genRules(option),
  };
  const selectProps = {
    name: option.name,
    mode: option.mode,
    bordered: option.bordered,
    size: option.size,
  };
  return (
    <Form.Item {...formItemProps}>
      <Select {...selectProps} options={option.childes} />
    </Form.Item>
  );
};

const _getText = (option) => {
  const formItemProps = {
    label: option.label,
    extra: option.extra,
    rules: genRules(option),
  };
  const selectProps = {
    name: option.name,
    mode: option.mode,
    bordered: option.bordered,
    size: option.size,
    options: option.childes,
  };
  return `
  <Form.Item ${props2Text(formItemProps)}>
      <Select ${props2Text(selectProps)} />
  </Form.Item>
  `;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
