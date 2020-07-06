import React from "react";
import { InputNumber, Button, message, Modal } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import _ from "lodash";
import { useSelector } from "react-redux";
import { Tool, Stage } from "./components";
import { CodeEditor } from "./components";
import { selectSchema, selectTools } from "./helper/redux";
import { schema2code, genClassCode } from "./helper/util";

const GenCode = () => {
  const tools = _.cloneDeep(useSelector(selectTools));
  const schema = _.cloneDeep(useSelector(selectSchema));
  const safeStringify = (json) => {
    let str;
    try {
      str = JSON.stringify(json, null, "\t");
    } catch (e) {
      message.error(e.message);
    }
    return str;
  };
  console.log("SCHEMA: \n", safeStringify(schema));

  const [schemaVisible, setSchemaVisible] = React.useState(false);
  const [codeVisible, setCodeVisible] = React.useState(false);
  const [width, setWidth] = React.useState(980);
  const [height, setHeight] = React.useState(750);
  const code = genClassCode(schema2code(schema));
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="gen-code-page layout">
        <div className="layout__hd clearfix">
          <div className="action pull-left">
            <InputNumber value={width} onChange={(val) => setWidth(val)} />
          </div>
          <div className="action pull-left">
            <span>×</span>️
          </div>
          <div className="action pull-left">
            <InputNumber value={height} onChange={(val) => setHeight(val)} />
          </div>
          <div className="action pull-right">
            <span className="a" onClick={() => setCodeVisible(true)}>
              查看Code
            </span>
          </div>
          <div className="action pull-right">
            <span className="a" style={{ marginRight: 10 }} onClick={() => setSchemaVisible(true)}>
              查看Schema
            </span>
          </div>
        </div>
        <div className="layout__bd">
          <Stage schema={schema} width={width} height={height} />
        </div>
        <div className="layout__sd">
          {tools.map((tool, i) => {
            return <Tool key={i} {...tool} />;
          })}
        </div>
      </div>

      <Modal
        title="Schema"
        width="80%"
        visible={schemaVisible}
        footer={null}
        onOk={() => setSchemaVisible(false)}
        onCancel={() => setSchemaVisible(false)}
      >
        <CodeEditor value={safeStringify(schema)} />
      </Modal>

      <Modal
        title="Code"
        width="80%"
        visible={codeVisible}
        footer={null}
        onOk={() => setCodeVisible(false)}
        onCancel={() => setCodeVisible(false)}
      >
        <CodeEditor value={code} />
      </Modal>
    </DndProvider>
  );
};

export default GenCode;
