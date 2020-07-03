import React from "react";
import _ from "lodash";
import { Input, Form } from "antd";

const _Input = (option) => {
  const props = _.pick(option, [
    "addonAfter",
    "addonBefore",
    "defaultValue",
    "disabled",
    "id",
    "maxLength",
    "prefix",
    "size",
    "suffix",
    "type",
    "allowClear",
    "placeholder",
    "style",
    "className",
  ]);
  const extra = option.extra ? <div dangerouslySetInnerHTML={{ __html: option.extra }} /> : "";
  const component = (
    <Form.Item label={option.label} extra={extra}>
      <Input readOnly key={option.index} {...props} />
    </Form.Item>
  );
  const text = ``;
  return { component, text };
};

export default _Input;
