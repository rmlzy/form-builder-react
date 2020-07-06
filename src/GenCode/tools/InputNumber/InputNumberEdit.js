import React from "react";
import { Drawer, Form, Button, Select, Input, Switch, InputNumber, Row, Col, Radio } from "antd";
import _ from "lodash";
import { TextEditor } from "../../components";

export default ({ option, visible, onOk, onCancel }) => {
  option.extra = option.extra || "";
  option.size = option.size || "middle";
  option.htmlType = option.htmlType || "text";
  const [form] = Form.useForm();
  const initialValues = _.cloneDeep(option);
  const onFinish = (values) => {
    onOk(values);
  };
  const onDrawerOk = () => {
    form.submit();
  };
  const onDrawerCancel = () => {
    onCancel();
  };
  return (
    <Drawer width="40%" title="数字输入框配置" visible={visible} onClose={onDrawerCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="标题" name="label" rules={[{ required: true, message: "必填项" }]}>
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col spa={12}>
            <Form.Item label="字段名称" name="name" rules={[{ required: true, message: "必填项" }]}>
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="小数点" name="decimalSeparator">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="是否必填" name="required" valuePropName="checked">
              <Switch checkedChildren="是" unCheckedChildren="否" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="数值精度" name="precision">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="每次改变步数，可以为小数" name="step">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="最大值" name="max">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="最小值" name="min">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="尺寸" name="size">
          <Radio.Group>
            <Radio value="small">小号</Radio>
            <Radio value="middle">中号</Radio>
            <Radio value="large">大号</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="额外信息" name="extra">
          <TextEditor />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onDrawerOk}>
            保存
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
