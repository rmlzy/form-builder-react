import React from "react";
import _ from "lodash";
import { Input, Form } from "antd";
import { props2Text, genRules } from "../../helper/util";

export default (option) => {
  const formItemProps = _.pick(option, ["label", "extra", "required"]);
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
    "style",
    "className",
  ]);
  inputProps.type = option.htmlType;
  const extra = formItemProps.extra ? <div dangerouslySetInnerHTML={{ __html: formItemProps.extra }} /> : "";
  const component = (
    <Form.Item label={formItemProps.label} extra={extra} rules={[{ required: true }]}>
      <Input {...inputProps} />
    </Form.Item>
  );
  const rulesText = genRules(formItemProps, "text");
  const text = `
  <Form.Item label="${formItemProps.label}" extra="${formItemProps.extra}" rules={${rulesText}}>
      <Input ${props2Text(inputProps)} />
  </Form.Item>
  `;
  return { component, text };
};
