import React from "react";
import { Drawer, Form, Button } from "antd";
import { TextEditor } from "../../components";

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
    <Drawer width="40%" title="页头配置" visible={visible} onClose={onDrawerCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Form.Item label="标题：" name="title" rules={[{ required: true, message: "必填项" }]}>
          <TextEditor />
        </Form.Item>
        <Form.Item label="副标题：" name="subTitle">
          <TextEditor />
        </Form.Item>
        <Form.Item label="操作区：" name="extra">
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
