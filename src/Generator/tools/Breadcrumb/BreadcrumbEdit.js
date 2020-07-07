import React from "react";
import { Drawer, Form, Button, Input, Row, Col } from "antd";
import { ReactSortable } from "react-sortablejs";
import _ from "lodash";
import { PlusOutlined, MenuOutlined } from "@ant-design/icons";

export default ({ option, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const [childes, setChildes] = React.useState(option.childes);
  const onFinish = (values) => {
    onOk({ ...values, childes });
  };
  const addRow = () => {
    const newCol = { text: "" };
    setChildes([...childes, newCol]);
  };
  const setRow = (index, text) => {
    const newChildes = _.cloneDeep(childes);
    newChildes[index].text = text;
    setChildes(newChildes);
  };
  const removeRow = (index) => {
    const newChildes = childes.filter((child, childIndex) => childIndex !== index);
    setChildes(newChildes);
  };
  return (
    <Drawer width="40%" title="面包屑配置" visible={visible} onClose={onCancel}>
      <Form form={form} initialValues={option} layout="vertical" onFinish={onFinish}>
        <Form.Item label="分割线：" name="separator" rules={[{ required: true, message: "必填项" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="路径：">
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
                <Col span={10}>
                  <Input
                    style={{ width: "100%" }}
                    value={child.text}
                    onChange={(evt) => setRow(childIndex, evt.target.value)}
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
