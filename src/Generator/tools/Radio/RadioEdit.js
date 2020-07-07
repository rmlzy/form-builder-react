import React from "react";
import { Drawer, Form, Button, Input, Row, Col, Radio } from "antd";
import { ReactSortable } from "react-sortablejs";
import { MenuOutlined, PlusOutlined } from "@ant-design/icons";
import _ from "lodash";

export default ({ option, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const initialValues = _.cloneDeep(option);
  const [childes, setChildes] = React.useState(option.childes);
  const addRow = () => {
    const row = { label: "", value: "" };
    setChildes([...childes, row]);
  };
  const setRowField = (index, key, val) => {
    const newChildes = _.cloneDeep(childes);
    newChildes[index][key] = val;
    setChildes(newChildes);
  };
  const removeRow = (index) => {
    const newChildes = childes.filter((child, childIndex) => childIndex !== index);
    setChildes(newChildes);
  };
  const onFinish = (values) => {
    onOk({ ...values, childes });
  };
  return (
    <Drawer width="50%" title="单选框配置" visible={visible} onClose={onCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
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
        <Form.Item label="选项：">
          <ReactSortable
            list={childes}
            setList={setChildes}
            handle=".sortable__handle"
            ghostClass="sortable__ghost"
            dragClass="sortable__drag"
          >
            {childes.map((child, childIndex) => (
              <Row key={childIndex} gutter={20} style={{ marginBottom: 10 }}>
                <Col span={2}>
                  <div className="sortable__handle">
                    <MenuOutlined />
                  </div>
                </Col>
                <Col span={9}>
                  <Input
                    style={{ width: "100%" }}
                    value={child.label}
                    placeholder="名称"
                    onChange={(evt) => setRowField(childIndex, "label", evt.target.value)}
                  />
                </Col>
                <Col span={9}>
                  <Input
                    style={{ width: "100%" }}
                    value={child.value}
                    placeholder="值"
                    onChange={(evt) => setRowField(childIndex, "value", evt.target.value)}
                  />
                </Col>
                <Col span={4}>
                  <Button danger onClick={() => removeRow(childIndex)}>
                    删除
                  </Button>
                </Col>
              </Row>
            ))}
          </ReactSortable>

          <Button icon={<PlusOutlined />} onClick={addRow} block>
            新增
          </Button>
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
