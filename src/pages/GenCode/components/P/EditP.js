import React from "react";
import { Modal, Form } from "antd";
import { Editor } from "../index";

const EditP = ({ text, visible, onOk, onCancel }) => {
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
    <Modal width="80%" title="编辑段落" visible={visible} onOk={onModalOk} onCancel={onModalCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Form.Item label="内容" name="text" rules={[{ required: true, message: "必填项" }]}>
          <Editor />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditP;
