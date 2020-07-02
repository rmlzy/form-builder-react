import React from "react";
import { Modal, Form, Input } from "antd";

const EditH2 = ({ text, visible, onOk, onCancel }) => {
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
    <Modal title="编辑标题" visible={visible} onOk={onModalOk} onCancel={onModalCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Form.Item label="内容" name="text" rules={[{ required: true, message: "必填项" }]}>
          <Input placeholder="请输入内容" value={text} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditH2;
