import React from "react";
import { Modal, Form } from "antd";
import { Editor } from "../index";

const EditTable = ({ option, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const { columns } = option;
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
    <Modal width="80%" title="编辑表格" visible={visible} onOk={onModalOk} onCancel={onModalCancel}>
      <Form form={form} initialValues={option} layout="vertical" onFinish={onFinish}>
        <Form.Item label="内容" name="text" rules={[{ required: true, message: "必填项" }]}>
          <Editor />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditTable;
