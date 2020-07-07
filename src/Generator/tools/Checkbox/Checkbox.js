import React from "react";
import { Checkbox, Form } from "antd";
import { genDangerHtml, genRules, props2Text } from "../../helper/util";

const _getComponent = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: genDangerHtml(option.extra),
    rules: genRules(option),
  };
  const checkboxGroupProps = {
    optionType: option.optionType,
    buttonStyle: option.optionType,
  };
  return (
    <Form.Item {...formItemProps}>
      <Checkbox.Group {...checkboxGroupProps}>
        {option.childes.map((item, i) => (
          <Checkbox key={i} value={item.value}>
            {item.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </Form.Item>
  );
};

const _getText = (option) => {
  const formItemProps = {
    label: option.label,
    extra: option.extra,
    rules: genRules(option),
  };
  const checkboxGroupProps = {
    optionType: option.optionType,
    buttonStyle: option.optionType,
  };
  const checkboxEls = option.childes.map((item) => {
    const checkboxProps = props2Text({
      value: item.value,
    });
    return `<Checkbox ${checkboxProps}>${item.label}</Checkbox>`;
  });
  return `
  <Form.Item ${props2Text(formItemProps)}>
      <Checkbox.Group ${props2Text(checkboxGroupProps)}>
          ${checkboxEls.join("\n")}
      </Checkbox.Group>
  </Form.Item>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
