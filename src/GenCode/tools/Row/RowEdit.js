import React from "react";
import { Drawer, Form, Button, InputNumber, Row, Col } from "antd";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { PlusOutlined } from "@ant-design/icons";

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
  const addCol = (span) => {
    const newCol = { span, component: "Col", uuid: `Col__${uuidv4()}`, childes: [] };
    setChildes([...childes, newCol]);
  };
  const setColSpan = ({ uuid }, span) => {
    const newChildes = childes.map((child) => {
      if (child.uuid === uuid) {
        child.span = span;
      }
      return child;
    });
    setChildes(newChildes);
  };
  const removeCol = ({ uuid }) => {
    const newChildes = childes.filter((child) => child.uuid !== uuid);
    setChildes(newChildes);
  };
  return (
    <Drawer width="40%" title="栅格配置" visible={visible} onClose={onDrawerCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Form.Item label="列间隔, 单位: px" name="gutter">
          <InputNumber style={{ width: "100%" }} min={0} />
        </Form.Item>
        <Form.Item label="列">
          {childes.map((child) => {
            return (
              <Row key={child.uuid} gutter={20} style={{ marginBottom: 10 }}>
                <Col span={10}>
                  <InputNumber
                    style={{ width: "100%" }}
                    value={child.span}
                    onChange={(evt) => setColSpan(child, evt)}
                  />
                </Col>
                <Col span={4}>
                  <Button danger onClick={() => removeCol(child)}>
                    删除
                  </Button>
                </Col>
              </Row>
            );
          })}
          <Button icon={<PlusOutlined />} onClick={() => addCol(1)} block>
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
