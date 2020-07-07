import React from "react";
import _ from "lodash";
import { DatePicker, Form } from "antd";
import { props2Text, genRules, genDangerHtml } from "../../helper/util";

const _getComponent = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: genDangerHtml(option.extra),
    rules: genRules(option),
  };
  const dpProps = _.pick(option, ["allowClear", "picker", "placeholder", "size", "bordered", "showTime", "showToday"]);
  return (
    <Form.Item {...formItemProps}>
      {option.isRange ? <DatePicker.RangePicker {...dpProps} /> : <DatePicker {...dpProps} />}
    </Form.Item>
  );
};

const _getText = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: option.extra,
    rules: genRules(option),
  };
  const dpProps = _.pick(option, ["allowClear", "picker", "placeholder", "size", "bordered", "showTime", "showToday"]);
  const dpEl = option.isRange
    ? `<DatePicker.RangePicker ${props2Text(dpProps)} />`
    : `<DatePicker ${props2Text(dpProps)} />`;
  return `
  <Form.Item ${props2Text(formItemProps)}>
      ${dpEl}
  </Form.Item>
  `;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
