import React from "react";
import { Drawer, Form, Button, InputNumber } from "antd";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import "./style.less";

const EditRow = ({ option, visible, onOk, onCancel }) => {
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
              <div key={child.uuid} className="multiple-list">
                <InputNumber
                  style={{ width: "50%" }}
                  value={child.span}
                  onChange={(evt) => setColSpan(child, evt)}
                />
                <span className="multiple-list__remove text-danger" onClick={() => removeCol(child)}>
                  删除
                </span>
              </div>
            );
          })}
          <Button type="primary" onClick={() => addCol(1)}>
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

export default EditRow;
