import React from "react";
import { Row, Col } from "antd";
import Dropable from "../../Dropable";

const _Row = ({ gutter, cols = "8 8 8", children }) => {
  cols = cols.trim();
  const component = (
    <Row gutter={gutter}>
      {cols.split(" ").map((col, colIndex) => {
        const span = Number(col);
        return (
          <Col key={colIndex} span={span}>
            <Dropable name="Col">
              <div className="col-highlight"></div>
            </Dropable>
          </Col>
        );
      })}
    </Row>
  );
  const text = `<Row gutter={gutter}>{children}</Row>`;
  return { component, text };
};

export default _Row;
