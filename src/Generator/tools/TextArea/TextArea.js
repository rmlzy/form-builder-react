import React from "react";
import { Input, Form } from "antd";
import { props2Text, genRules, genDangerHtml } from "../../helper/util";

const _getComponent = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: genDangerHtml(option.extra),
    rules: genRules(option),
  };
  const textAreaProps = {
    maxLength: option.maxLength,
    placeholder: option.placeholder,
    rows: option.rows,
  };
  return (
    <Form.Item {...formItemProps}>
      <Input.TextArea {...textAreaProps} />
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
  const textAreaProps = {
    maxLength: option.maxLength,
    placeholder: option.placeholder,
    rows: option.rows,
  };
  return `
    <Form.Item ${props2Text(formItemProps)}>
      <Input.TextArea ${props2Text(textAreaProps)} />
    </Form.Item>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
