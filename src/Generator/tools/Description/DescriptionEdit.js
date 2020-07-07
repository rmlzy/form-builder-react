import React from "react";
import { Drawer, Form, Button, Input } from "antd";

export default ({ option, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    onOk(values);
  };
  return (
    <Drawer width="40%" title="描述配置" visible={visible} onClose={onCancel}>
      <Form form={form} initialValues={option} layout="vertical" onFinish={onFinish}>
        <Form.Item label="字段名：" name="label" rules={[{ required: true, message: "必填项" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="字段值：" name="value" rules={[{ required: true, message: "必填项" }]}>
          <Input />
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
