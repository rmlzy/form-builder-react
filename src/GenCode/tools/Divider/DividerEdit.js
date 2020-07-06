import React from "react";
import { Drawer, Form, Input, Switch, Radio, Button } from "antd";

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
    <Drawer width="40%" title="分割线配置" visible={visible} onClose={onDrawerCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Form.Item label="内容" name="text">
          <Input placeholder="请输入内容" />
        </Form.Item>
        <Form.Item label="使用普通文字" name="plain" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="是否虚线" name="dashed" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="标题位置" name="orientation">
          <Radio.Group>
            <Radio value="left">左边</Radio>
            <Radio value="center">中间</Radio>
            <Radio value="right">右边</Radio>
          </Radio.Group>
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
