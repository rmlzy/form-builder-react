import React from "react";
import { Drawer, Form, Button, Input, Row, Col, Radio, Select, Switch } from "antd";

export default ({ option, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const initialValues = option;
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
    <Drawer width="40%" title="段落配置" visible={visible} onClose={onDrawerCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="内容" name="text" rules={[{ required: true, message: "必填项" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="类型" name="_type" rules={[{ required: true, message: "必填项" }]}>
              <Select placeholder="请选择">
                <Select.Option value="primary">primary</Select.Option>
                <Select.Option value="ghost">ghost</Select.Option>
                <Select.Option value="dashed">dashed</Select.Option>
                <Select.Option value="danger">danger</Select.Option>
                <Select.Option value="link">link</Select.Option>
                <Select.Option value="text">text</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="形状" name="shape">
              <Radio.Group>
                <Radio value="">默认</Radio>
                <Radio value="circle">圆形</Radio>
                <Radio value="round">圆角</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="尺寸" name="size">
              <Radio.Group>
                <Radio value="small">小号</Radio>
                <Radio value="middle">中号</Radio>
                <Radio value="large">大号</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="块状按钮" name="block" valuePropName="checked">
              <Switch checkedChildren="是" unCheckedChildren="否" />
            </Form.Item>
          </Col>
          <Col span={12}></Col>
        </Row>
        <Form.Item>
          <Button type="primary" onClick={onDrawerOk}>
            保存
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
