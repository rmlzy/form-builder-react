import React from "react";
import { Drawer, Form, Button, Input, InputNumber, Row, Col, Radio, Switch } from "antd";
import { MenuOutlined, PlusOutlined } from "@ant-design/icons";
import { ReactSortable } from "react-sortablejs";
import _ from "lodash";

export default ({ option, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const [childes, setChildes] = React.useState(option.childes);
  const onFinish = (values) => {
    onOk({ ...values, childes });
  };
  const addRow = () => {
    const row = { title: "", subTitle: "" };
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
  return (
    <Drawer width="50%" title="面包屑配置" visible={visible} onClose={onCancel}>
      <Form form={form} initialValues={option} layout="vertical" onFinish={onFinish}>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="当前步骤：" name="current" rules={[{ required: true, message: "必填项" }]}>
              <InputNumber style={{ width: "100%" }} min={0} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="方向：" name="direction">
              <Radio.Group>
                <Radio value="horizontal">水平</Radio>
                <Radio value="vertical">竖直</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="标签位置：" name="labelPlacement">
              <Radio.Group>
                <Radio value="horizontal">图标右方</Radio>
                <Radio value="vertical">图标下方</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="点状步骤条：" name="progressDot" valuePropName="checked">
              <Switch checkedChildren="是" unCheckedChildren="否" />
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
        <Form.Item label="步骤：">
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
                    value={child.title}
                    placeholder="标题"
                    onChange={(evt) => setRowField(childIndex, "title", evt.target.value)}
                  />
                </Col>
                <Col span={9}>
                  <Input
                    style={{ width: "100%" }}
                    value={child.subTitle}
                    placeholder="子标题"
                    onChange={(evt) => setRowField(childIndex, "subTitle", evt.target.value)}
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
