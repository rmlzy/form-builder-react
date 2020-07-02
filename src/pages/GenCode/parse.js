import React from "react";
import { Form } from "antd";
import { _Row, _Input, _Divider } from "./util";
import { H2 as _H2, P as _P } from "./components";
import Sortable from "./Sortable.js";

/**
 * 生成组件
 * @param schema
 * @returns {*}
 */
const parseComponent = (schema) => {
  return (
    <Form layout="vertical">
      {schema.map((block, blockIndex) => {
        block.index = blockIndex;
        if (block.component === "H2") {
          return <Sortable>{_H2(block).component}</Sortable>;
        }
        if (block.component === "P") {
          return <Sortable>{_P(block).component}</Sortable>;
        }
        if (block.component === "Row") {
          return _Row(block).component;
        }
        if (block.component === "Divider") {
          return _Divider(block).component;
        }
        return null;
      })}
    </Form>
  );
};

/**
 * 生成代码
 * @param schema
 * @returns {string}
 */
const parseCode = (schema) => {
  const blocks = [];
  schema.forEach((block, blockIndex) => {
    if (block.component === "H2") {
      blocks.push(_H2(block).text);
    }
    if (block.component === "P") {
      blocks.push(_P(block).text);
    }
    if (block.component === "Row") {
      blocks.push(_Row(block).text);
    }
    if (block.component === "Divider") {
      blocks.push(_Divider(block).text);
    }
  });
  blocks.unshift(`<Form layout="vertical">`);
  blocks.push(`</Form>`);
  return blocks.join("\n");
};

const parse = (schema) => {
  const component = parseComponent(schema);
  const code = parseCode(schema);
  return { component, code };
};

export default parse;
