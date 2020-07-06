import React from "react";
import _ from "lodash";
import { Input, Form } from "antd";
import { props2Text, genRules, genDangerHtml } from "../../helper/util";

export default (option) => {
  const inputProps = _.pick(option, [
    "addonAfter",
    "addonBefore",
    "defaultValue",
    "disabled",
    "id",
    "maxLength",
    "prefix",
    "size",
    "suffix",
    "allowClear",
    "placeholder",
  ]);
  inputProps.type = option.htmlType || "text";
  const extraEl = genDangerHtml(option.extra);
  const rulesJson = genRules({ required: option.required });
  const component = (
    <Form.Item label={option.label} extra={extraEl} rules={rulesJson}>
      <Input {...inputProps} />
    </Form.Item>
  );
  const formItemPropText = {
    label: option.label || "",
    extra: option.extra || "",
    rules: rulesJson.length ? JSON.stringify(rulesJson) : "",
  };
  const text = `
  <Form.Item ${props2Text(formItemPropText)}>
      <Input ${props2Text(inputProps)} />
  </Form.Item>
  `;
  return { component, text };
};
