import React from "react";
import { Radio, Form } from "antd";
import { genDangerHtml, genRules, props2Text } from "../../helper/util";

const _getComponent = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: genDangerHtml(option.extra),
    rules: genRules(option),
  };
  const radioGroupProps = {
    optionType: option.optionType,
    buttonStyle: option.optionType,
  };
  return (
    <Form.Item {...formItemProps}>
      <Radio.Group {...radioGroupProps}>
        {option.childes.map((item, i) => (
          <Radio key={i} value={item.value}>
            {item.label}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

const _getText = (option) => {
  const formItemProps = {
    label: option.label,
    extra: option.extra,
    rules: genRules(option),
  };
  const radioGroupProps = {
    optionType: option.optionType,
    buttonStyle: option.optionType,
  };
  const radioEls = option.childes.map((item) => {
    const radioProps = props2Text({
      value: item.value,
    });
    return `<Radio ${radioProps}>${item.label}</Radio>`;
  });
  return `
  <Form.Item ${props2Text(formItemProps)}>
      <Radio.Group ${props2Text(radioGroupProps)}>
          ${radioEls.join("\n")}
      </Radio.Group>
  </Form.Item>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
