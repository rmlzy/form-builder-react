import React from "react";
import { Form, Switch } from "antd";
import { genDangerHtml, genRules, props2Text } from "../../helper/util";

const _getComponent = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: genDangerHtml(option.extra),
    rules: genRules(option),
    valuePropName: "checked",
  };
  const switchProps = {
    size: option.size,
    checkedChildren: option.checkedChildren,
    unCheckedChildren: option.unCheckedChildren,
  };
  return (
    <Form.Item {...formItemProps}>
      <Switch {...switchProps} />
    </Form.Item>
  );
};

const _getText = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: option.extra,
    rules: genRules(option),
    valuePropName: "checked",
  };
  const switchProps = {
    size: option.size,
    checkedChildren: option.checkedChildren,
    unCheckedChildren: option.unCheckedChildren,
  };
  return `
    <Form.Item ${props2Text(formItemProps)}>
      <Switch ${props2Text(switchProps)} />
    </Form.Item>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
