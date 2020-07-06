import React from "react";
import { Drawer, Form, Button, Switch, Input, Row, Col, Radio } from "antd";
import _ from "lodash";
import { TextEditor } from "../../components";

export default ({ option, visible, onOk, onCancel }) => {
  option.extra = option.extra || "";
  option.size = option.size || "middle";
  const [form] = Form.useForm();
  const initialValues = _.cloneDeep(option);
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
    <Drawer width="40%" title="文本输入框配置" visible={visible} onClose={onDrawerCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Form.Item label="展示名称" name="label" rules={[{ required: true, message: "必填项" }]}>
          <Input type="text" placeholder="用于页面展示, 例如: 用户名" />
        </Form.Item>
        <Form.Item label="字段名称" name="name" rules={[{ required: true, message: "必填项" }]}>
          <Input type="text" placeholder="提交给接口的名称, 例如: name" />
        </Form.Item>
        <Form.Item label="默认启用" name="defaultChecked" valuePropName="checked">
          <Switch checkedChildren="是" unCheckedChildren="否" />
        </Form.Item>
        <Form.Item label="尺寸" name="size">
          <Radio.Group>
            <Radio value="small">小号</Radio>
            <Radio value="middle">中号</Radio>
            <Radio value="large">大号</Radio>
          </Radio.Group>
        </Form.Item>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="选中时的内容" name="checkedChildren">
              <Input type="text" placeholder="例如: 启用" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="非选中时的内容" name="unCheckedChildren">
              <Input type="text" placeholder="例如: 停用" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="额外信息" name="extra">
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
