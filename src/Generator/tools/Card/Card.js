import React from "react";
import { Card } from "antd";
import { Droppable, Editable } from "../../components";
import { getToolComponent } from "../../helper/util";

const _getComponent = (option) => {
  const cardProps = {
    title: option.title,
    size: option.size,
    bordered: option.bordered,
    bodyStyle: { padding: 10 },
  };
  const colChildEl = (option.childes || []).map((child, childIndex) => (
    <Editable key={childIndex} block={child}>
      {getToolComponent(child)}
    </Editable>
  ));
  return (
    <Card {...cardProps}>
      <Droppable name="Card" uuid={option.uuid} exclude={["Card"]}>
        <div className="card-highlight">{colChildEl}</div>
      </Droppable>
    </Card>
  );
};

const _getText = (option) => {
  return `<div className="ant-descriptions-title">${option.text || ""}</div>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
