import React from "react";
import { Drawer, Form, Button, Input, Switch, Row, Col, Radio } from "antd";
import { TextEditor } from "../../components";

export default ({ option, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    onOk(values);
  };
  return (
    <Drawer width="50%" title="上传配置" visible={visible} onClose={onCancel}>
      <Form form={form} initialValues={option} layout="vertical" onFinish={onFinish}>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="标题：" name="label" rules={[{ required: true, message: "必填项" }]}>
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="字段名称：" name="name" rules={[{ required: true, message: "必填项" }]}>
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="文案：" name="text" rules={[{ required: true, message: "必填项" }]}>
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="提示：" name="hint">
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="是否必填：" name="required" valuePropName="checked">
              <Switch checkedChildren="是" unCheckedChildren="否" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="类型：" name="mode">
          <Radio.Group>
            <Radio value="button">按钮风格</Radio>
            <Radio value="card">卡片风格</Radio>
            <Radio value="drag">拖拽风格</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="额外信息：" name="extra">
          <TextEditor />
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
