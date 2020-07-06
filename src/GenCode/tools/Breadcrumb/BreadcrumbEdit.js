import React from "react";
import { Drawer, Form, Button, Input } from "antd";
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
    <Drawer width="40%" title="面包屑配置" visible={visible} onClose={onDrawerCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Form.Item label="分割线" name="separator" rules={[{ required: true, message: "必填项" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="路径">
          {childes.map((child, childIndex) => {
            return (
              <div key={childIndex} className="multiple-list">
                <Input
                  style={{ width: "50%" }}
                  value={child.text}
                  onChange={(evt) => setRow(childIndex, evt.target.value)}
                />
                <span className="multiple-list__remove text-danger" onClick={() => removeRow(childIndex)}>
                  删除
                </span>
              </div>
            );
          })}
          <Button type="primary" onClick={addRow}>
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
