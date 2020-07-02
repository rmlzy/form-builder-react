import React from "react";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import classnames from "classnames";
import { EditH2, EditP, EditDivider, EditTable } from "./components";

const Editable = ({ active = false, block = {}, children, onClick, onRemove, onChange }) => {
  const [visible, setVisible] = React.useState(false);
  const cls = classnames({
    editable: true,
    active,
  });
  const onOk = (values) => {
    onChange({ ...block, ...values });
    setVisible(false);
  };
  return (
    <div
      className={cls}
      onClick={(evt) => {
        evt.stopPropagation();
        onClick();
      }}
    >
      {children}
      <div className="editable__actions">
        <Button size="small" shape="circle" onClick={() => setVisible(true)}>
          <EditOutlined />
        </Button>
        <Button size="small" shape="circle" danger onClick={onRemove}>
          <DeleteOutlined />
        </Button>
      </div>
      {block.component === "H2" && (
        <EditH2 text={block.text} visible={visible} onOk={onOk} onCancel={() => setVisible(false)} />
      )}
      {block.component === "P" && (
        <EditP text={block.text} visible={visible} onOk={onOk} onCancel={() => setVisible(false)} />
      )}
      {block.component === "Divider" && (
        <EditDivider text={block.text} visible={visible} onOk={onOk} onCancel={() => setVisible(false)} />
      )}
      {block.component === "Table" && (
        <EditTable option={block} visible={visible} onOk={onOk} onCancel={() => setVisible(false)} />
      )}
    </div>
  );
};

export default Editable;
