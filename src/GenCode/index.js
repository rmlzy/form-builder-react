import React from "react";
import { Row, Col, Button, message, Modal } from "antd";
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
  const code = genClassCode(schema2code(schema));
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="gen-code-page">
        <Row gutter={20}>
          <Col span={19}>
            <div className="action-bar">
              <Button type="primary" style={{ marginRight: 10 }} onClick={() => setSchemaVisible(true)}>
                查看Schema
              </Button>
              <Button type="primary" onClick={() => setCodeVisible(true)}>
                查看Code
              </Button>
            </div>
            <Stage schema={schema} />
          </Col>
          <Col span={5}>
            <h2>控件</h2>
            {tools.map((tool, i) => {
              return <Tool key={i} {...tool} />;
            })}
          </Col>
        </Row>
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
