import React from "react";
import _ from "lodash";
import { Input, Form } from "antd";
import { props2Text, genRules } from "../../helper/util";

export default (option) => {
  const inputProps = _.pick(option, [
    "defaultValue",
    "disabled",
    "maxLength",
    "size",
    "allowClear",
    "placeholder",
    "style",
    "className",
    "rows",
  ]);
  const extraEl = option.extra ? <div dangerouslySetInnerHTML={{ __html: option.extra }} /> : "";
  const rulesJson = genRules({ required: option.required });
  const component = (
    <Form.Item label={option.label} extra={extraEl} rules={rulesJson}>
      <Input.TextArea {...inputProps} />
    </Form.Item>
  );
  const formItemPropText = {
    label: option.label || "",
    extra: option.extra || "",
    rules: rulesJson.length ? JSON.stringify(rulesJson) : "",
  };
  const text = `
  <Form.Item ${props2Text(formItemPropText)}>
      <Input.TextArea ${props2Text(inputProps)} />
  </Form.Item>
  `;
  return { component, text };
};
