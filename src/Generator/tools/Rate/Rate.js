import React from "react";
import { Rate, Form } from "antd";
import { props2Text, genRules, genDangerHtml } from "../../helper/util";

const _getComponent = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: genDangerHtml(option.extra),
    rules: genRules(option),
  };
  const rateProps = {
    allowClear: option.allowClear,
    allowHalf: option.allowHalf,
    count: option.count,
    size: option.size,
  };
  return (
    <Form.Item {...formItemProps}>
      <Rate {...rateProps} />
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
  const rateProps = {
    allowClear: option.allowClear,
    allowHalf: option.allowHalf,
    count: option.count,
    size: option.size,
  };
  return `
  <Form.Item ${props2Text(formItemProps)}>
      <Rate ${props2Text(rateProps)} />
  </Form.Item>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
