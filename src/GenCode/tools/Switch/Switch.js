import React from "react";
import { Form, Switch } from "antd";
import _ from "lodash";

export default (option) => {
  const props = _.pick(option, [
    "label",
    "extra",
    "ajaxName",
    "autoFocus",
    "disabled",
    "size",
    "checkedChildren",
    "unCheckedChildren",
    "defaultChecked",
  ]);
  const extra = props.extra ? <div dangerouslySetInnerHTML={{ __html: props.extra }} /> : "";
  const component = (
    <Form.Item label={props.label} extra={extra} name={props.name} valuePropName="checked">
      <Switch {...props} />
    </Form.Item>
  );
  const text = "";
  return { component, text };
};
