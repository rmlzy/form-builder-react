import React from "react";
import { Row, Col } from "antd";
import { Droppable, Editable } from "../../components";
import { getToolComponent } from "../../helper/util";
import { v4 as uuidv4 } from "uuid";

export default (option) => {
  const { gutter } = option;
  const defaultChildes = [
    { span: 8, component: "Col", uuid: `Col__${uuidv4()}`, childes: [] },
    { span: 8, component: "Col", uuid: `Col__${uuidv4()}`, childes: [] },
    { span: 8, component: "Col", uuid: `Col__${uuidv4()}`, childes: [] },
  ];
  option.childes = option.childes || [];
  if (option.childes.length === 0) {
    option.childes = defaultChildes;
  }
  const component = (
    <Row className="row-highlight" gutter={gutter}>
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
  const text = `<Row gutter={gutter}>{children}</Row>`;
  return { component, text };
};
