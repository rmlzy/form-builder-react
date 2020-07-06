import React from "react";
import { Radio, Form, Input } from "antd";
import _ from "lodash";
import { genDangerHtml, genRules, props2Text } from "../../helper/util";

const defaultChildes = [
  { label: "选项1", value: "field1" },
  { label: "选项2", value: "field2" },
  { label: "选项3", value: "field3" },
];

export default (option) => {
  const groupProps = _.pick(option, ["defaultValue", "name", "size", "optionType", "buttonStyle"]);
  option.childes = option.childes || [];
  if (option.childes.length === 0) {
    option.childes = defaultChildes;
  }
  const extraEl = genDangerHtml(option.extra);
  const rulesJson = genRules({ required: option.required });
  const component = (
    <Form.Item label={option.label} extra={extraEl} rules={rulesJson}>
      <Radio.Group {...groupProps}>
        {option.childes.map((item, i) => {
          return (
            <Radio key={i} value={item.value}>
              {item.label}
            </Radio>
          );
        })}
      </Radio.Group>
    </Form.Item>
  );
  const formItemPropText = {
    label: option.label || "",
    extra: option.extra || "",
    rules: rulesJson.length ? JSON.stringify(rulesJson) : "",
  };
  const radioPropText = option.childes.map((item) => {
    const stepProps = props2Text({
      value: item.value,
    });
    return `<Radio ${stepProps}>${item.label}</Radio>`;
  });
  const text = `
  <Form.Item ${props2Text(formItemPropText)}>
      <Radio.Group ${props2Text(groupProps)}>
          ${radioPropText}
      </Radio.Group>
  </Form.Item>
  `;
  return { component, text };
};
