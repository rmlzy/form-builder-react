import React from "react";
import { Modal, Form, Input, Switch, Radio } from "antd";

const EditDivider = ({ text, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const initialValues = { text };
  const onFinish = (values) => {
    onOk(values);
  };
  const onModalOk = () => {
    form.submit();
  };
  const onModalCancel = () => {
    onCancel();
  };
  return (
    <Modal title="编辑分割线" visible={visible} onOk={onModalOk} onCancel={onModalCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Form.Item label="内容" name="text">
          <Input placeholder="请输入内容" />
        </Form.Item>
        <Form.Item label="使用普通文字" name="plain">
          <Switch />
        </Form.Item>
        <Form.Item label="是否虚线" name="dashed">
          <Switch />
        </Form.Item>
        <Form.Item label="标题位置" name="orientation">
          <Radio.Group>
            <Radio value="left">左边</Radio>
            <Radio value="center">中间</Radio>
            <Radio value="right">右边</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditDivider;
