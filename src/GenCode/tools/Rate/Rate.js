import React from "react";
import _ from "lodash";
import { Rate, Form } from "antd";
import { props2Text, genRules, genDangerHtml } from "../../helper/util";

export default (option) => {
  const inputProps = _.pick(option, [
    "defaultValue",
    "disabled",
    "allowClear",
    "allowHalf",
    "count",
    "size",
    "allowClear",
  ]);
  const extraEl = genDangerHtml(option.extra);
  const rulesJson = genRules({ required: option.required });
  const component = (
    <Form.Item label={option.label} extra={extraEl} rules={rulesJson}>
      <Rate {...inputProps} />
    </Form.Item>
  );
  const formItemPropText = {
    label: option.label || "",
    extra: option.extra || "",
    rules: rulesJson.length ? JSON.stringify(rulesJson) : "",
  };
  const text = `
  <Form.Item ${props2Text(formItemPropText)}>
      <Rate ${props2Text(inputProps)} />
  </Form.Item>
  `;
  return { component, text };
};
