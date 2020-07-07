import React from "react";
import { Drawer, Form, Button, Input, Table, Row, Col, Radio, Switch, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import _ from "lodash";

export default ({ option, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const initialValues = _.cloneDeep(option);
  const [columns, setColumns] = React.useState(option.columns);
  const genMockData = (max) => {
    const dataSource = [];
    for (let i = 0; i < max; i++) {
      let row = {
        index: i,
      };
      columns.forEach((item) => {
        row[item.dataIndex] = `Mock Data ${i}`;
      });
      dataSource.push(row);
    }
    return dataSource;
  };
  const onFinish = (values) => {
    const dataSource = genMockData(30);
    onOk({ ...values, columns, dataSource });
  };
  const onDrawerOk = () => {
    form.submit();
  };
  const onDrawerCancel = () => {
    onCancel();
  };
  const addRow = () => {
    const newCol = { title: "", key: "", dataIndex: "" };
    setColumns([...columns, newCol]);
  };
  const setRowFieldByIndex = (index, key, val) => {
    const newChildes = _.cloneDeep(columns);
    newChildes[index][key] = val;
    setColumns(newChildes);
  };
  const removeRow = (index) => {
    const newChildes = columns.filter((column, columnIndex) => columnIndex !== index);
    setColumns(newChildes);
  };
  const columnsConfig = [
    {
      title: "名称",
      width: 100,
      render: (text, record, index) => {
        return (
          <Input
            style={{ width: "100%" }}
            value={record.title}
            placeholder="名称"
            onChange={(evt) => setRowFieldByIndex(index, "title", evt.target.value)}
          />
        );
      },
    },
    {
      title: "字段名",
      width: 100,
      render: (text, record, index) => {
        return (
          <Input
            style={{ width: "100%" }}
            value={record.dataIndex}
            placeholder="字段名"
            onChange={(evt) => setRowFieldByIndex(index, "dataIndex", evt.target.value)}
          />
        );
      },
    },
    {
      title: "宽度",
      width: 150,
      render: (text, record, index) => {
        return (
          <Input
            style={{ width: "100%" }}
            value={record.width}
            placeholder="像素或者百分比"
            onChange={(evt) => setRowFieldByIndex(index, "width", evt.target.value)}
          />
        );
      },
    },
    {
      title: "固定",
      dataIndex: "fixed",
      key: "fixed",
      width: 100,
      render: (text, record, index) => {
        return (
          <Select value={record.fixed} onChange={(val) => setRowFieldByIndex(index, "fixed", val)}>
            <Select.Option value="">不固定</Select.Option>
            <Select.Option value="left">左侧</Select.Option>
            <Select.Option value="right">右侧</Select.Option>
          </Select>
        );
      },
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => (
        <Button danger onClick={() => removeRow(index)}>
          删除
        </Button>
      ),
    },
  ];
  return (
    <Drawer width="50%" title="表格配置" visible={visible} onClose={onDrawerCancel}>
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Row gutter={20}>
          <Col span={12}></Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="展示边框：" name="bordered" valuePropName="checked">
              <Switch checkedChildren="是" unCheckedChildren="否" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="展示分页：" name="pagination" valuePropName="checked">
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
        <Form.Item label="列：">
          <Table
            size="small"
            pagination={false}
            dataSource={columns}
            style={{ marginBottom: 10 }}
            columns={columnsConfig}
          />
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
