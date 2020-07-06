import React from "react";
import { Drawer, Form, Button, Select, Input, Switch, InputNumber, Row, Col, Radio } from "antd";
import _ from "lodash";
import { TextEditor } from "../../components";

export default ({ option, visible, onOk, onCancel }) => {
  option.extra = option.extra || "";
  option.size = option.size || "middle";
  option.htmlType = option.htmlType || "text";
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
    <Drawer width="40%" title="输入框配置" visible={visible} onClose={onDrawerCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item
              label="标题"
              name="label"
              rules={[{ required: true, message: "必填项" }]}
              extra="用于页面展示, 例如: 用户名"
            >
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col spa={12}>
            <Form.Item
              label="字段名称"
              name="name"
              rules={[{ required: true, message: "必填项" }]}
              extra="提交给接口的名称, 例如: name"
            >
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="HTML类型" name="htmlType" rules={[{ required: true, message: "必填项" }]}>
              <Select placeholder="请选择">
                <Select.Option value="text">文字</Select.Option>
                <Select.Option value="email">邮箱</Select.Option>
                <Select.Option value="password">密码</Select.Option>
                <Select.Option value="color">颜色</Select.Option>
                <Select.Option value="url">URL</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="是否必填" name="required" valuePropName="checked">
              <Switch checkedChildren="是" unCheckedChildren="否" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="占位内容" name="placeholder">
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="最大长度" name="maxLength">
              <InputNumber style={{ width: "100%" }} min={1} placeholder="留空代表不限制" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="尺寸" name="size">
          <Radio.Group>
            <Radio value="small">小号</Radio>
            <Radio value="middle">中号</Radio>
            <Radio value="large">大号</Radio>
          </Radio.Group>
        </Form.Item>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="前缀" name="prefix">
              <Input type="text" placeholder="例如: +86" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="后缀" name="suffix">
              <Input type="text" placeholder="例如: .com" />
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
