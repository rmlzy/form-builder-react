import React from "react";
import { Col } from "antd";

const _Col = ({ span = 3, children }) => {
  const component = (
    <Col className="row-highlight" span={span}>
      {children}
    </Col>
  );
  const text = "";
  return { component, text };
};

export default _Col;
