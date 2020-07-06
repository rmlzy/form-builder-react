import React from "react";
import { Drawer, Form, Button, Input, InputNumber, Row, Col, Radio, Switch } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import _ from "lodash";

export default ({ option, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const initialValues = _.cloneDeep(option);
  const [childes, setChildes] = React.useState(option.childes);
  const onFinish = (values) => {
    onOk({ ...values, childes });
  };
  const onDrawerOk = () => {
    form.submit();
  };
  const onDrawerCancel = () => {
    onCancel();
  };
  const addRow = () => {
    const newCol = { text: "" };
    setChildes([...childes, newCol]);
  };
  const setRowLabel = (index, label) => {
    const newChildes = _.cloneDeep(childes);
    newChildes[index].label = label;
    setChildes(newChildes);
  };
  const setRowValue = (index, value) => {
    const newChildes = _.cloneDeep(childes);
    newChildes[index].value = value;
    setChildes(newChildes);
  };
  const removeRow = (index) => {
    const newChildes = childes.filter((child, childIndex) => childIndex !== index);
    setChildes(newChildes);
  };
  return (
    <Drawer width="40%" title="单选框配置" visible={visible} onClose={onDrawerCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="标题：" name="label" rules={[{ required: true, message: "必填项" }]}>
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col spa={12}>
            <Form.Item label="字段名称：" name="name" rules={[{ required: true, message: "必填项" }]}>
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="尺寸：" name="size">
          <Radio.Group>
            <Radio value="small">小号</Radio>
            <Radio value="middle">中号</Radio>
            <Radio value="large">大号</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="选项：">
          {childes.map((child, childIndex) => {
            return (
              <Row key={childIndex} gutter={20} style={{ marginBottom: 10 }}>
                <Col span={10}>
                  <Input
                    style={{ width: "100%" }}
                    value={child.label}
                    placeholder="名称"
                    onChange={(evt) => setRowLabel(childIndex, evt.target.value)}
                  />
                </Col>
                <Col span={10}>
                  <Input
                    style={{ width: "100%" }}
                    value={child.value}
                    placeholder="值"
                    onChange={(evt) => setRowValue(childIndex, evt.target.value)}
                  />
                </Col>
                <Col span={4}>
                  <Button danger onClick={() => removeRow(childIndex)}>
                    删除
                  </Button>
                </Col>
              </Row>
            );
          })}
          <Button icon={<PlusOutlined />} onClick={addRow} block>
            新增
          </Button>
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
