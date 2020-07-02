import React from "react";
import { Form, Row, Col, Input, Divider } from "antd";
import _ from "lodash";

export const props2Text = (props) => {
  let texts = [];
  for (let key in props) {
    const value = props[key];
    if (value === "") {
      continue;
    }
    if (_.isString(value)) {
      texts.push(`${key}="${value}"`);
    } else {
      texts.push(`${key}={${value}}`);
    }
  }
  return texts.join(" ");
};

export const _Divider = (option) => {
  const props = _.pick(option, ["className", "dashed", "orientation", "style", "type", "plain"]);
  const component = <Divider {...props}>{option.text || ""}</Divider>;
  const text = `<Divider ${props2Text(props)}>${option.text || ""}</Divider>`;
  return { component, text };
};

export const _Input = (option) => {
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
  const component = <Input key={option.index} {...props} />;
  const text = `<Input ${props2Text(props)} />`;
  return { component, text };
};

export const _Row = (option) => {
  const { gutter, col, children = [] } = option;
  const childCmpts = children.map((control, controlIndex) => {
    control.index = controlIndex;
    let el;
    if (control.component === "Input") {
      el = _Input(control).component;
    }
    return (
      <Col span={col} key={controlIndex}>
        <Form.Item label={control.label}>{el}</Form.Item>
      </Col>
    );
  });
  const component = (
    <Row key={option.index} gutter={gutter}>
      {childCmpts}
    </Row>
  );

  const texts = [];
  children.forEach((control, controlIndex) => {
    if (control.component === "Input") {
      const el = `
      <Col span=${col}>
        <Form.Item label=${control.label}>
          ${_Input(control).text}
        </Form.Item>
      </Col>`;
      texts.push(el);
    }
  });
  texts.unshift(`<Row gutter=${gutter}>`);
  texts.push(`</Row>`);
  return { component, text: texts.join("\n") };
};
