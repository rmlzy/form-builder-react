import React from "react";
import { Row, Col } from "antd";
import { Droppable, Editable } from "../../components";
import { getToolComponent, getToolText, props2Text } from "../../helper/util";

const _getComponent = (option) => {
  const rowProps = {
    gutter: option.gutter,
  };
  return (
    <Row className="row-highlight" {...rowProps}>
      {(option.childes || []).map((col, colIndex) => {
        const colChildEl = (col.childes || []).map((child, childIndex) => (
          <Editable key={childIndex} block={child}>
            {getToolComponent(child)}
          </Editable>
        ));
        return (
          <Col key={colIndex} span={col.span}>
            <Droppable name="Col" uuid={col.uuid} exclude={["Row"]}>
              <div className="col-highlight">{colChildEl}</div>
            </Droppable>
          </Col>
        );
      })}
    </Row>
  );
};

const _getText = (option) => {
  const rowProps = {
    gutter: option.gutter,
  };
  const colTexts = option.childes.map((col) => {
    const childTexts = col.childes.map((child) => getToolText(child));
    return `<Col span={${col.span}}>${childTexts.join("\n")}</Col>`;
  });
  return `<Row ${props2Text(rowProps)}>${colTexts.join("\n")}</Row>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
