import React from "react";
import { Drawer, Form, Input, Switch, Radio, Button, Select, Row, Col } from "antd";

export default ({ option, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    onOk(values);
  };
  return (
    <Drawer width="40%" title="分割线配置" visible={visible} onClose={onCancel}>
      <Form form={form} initialValues={option} layout="vertical" onFinish={onFinish}>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="内容：" name="text">
              <Input placeholder="请输入内容" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="类型：" name="_type">
              <Select placeholder="请选择">
                <Select.Option value="horizontal">水平</Select.Option>
                <Select.Option value="vertical">垂直</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="使用普通文字：" name="plain" valuePropName="checked">
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="是否虚线：" name="dashed" valuePropName="checked">
              <Switch />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="标题位置：" name="orientation">
          <Radio.Group>
            <Radio value="left">左边</Radio>
            <Radio value="center">中间</Radio>
            <Radio value="right">右边</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={() => form.submit()}>
            保存
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
