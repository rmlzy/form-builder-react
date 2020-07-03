import React from "react";
import { Row, Col } from "antd";
import { Droppable, Editable } from "../../components";
import { getToolComponent } from "../../helper/util";

export const RowMeta = {
  component: "Row",
  componentIcon: "G",
  componentName: "栅格",
  gutter: 0,
  childes: [],
};

export const _Row = ({ gutter, childes }) => {
  const component = (
    <Row className="row-highlight" gutter={gutter}>
      {(childes || []).map((col, colIndex) => {
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
