import React from "react";
import { InputNumber, message, Modal, Button } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import fileDownload from "js-file-download";
import { Tool, Stage } from "./components";
import { CodeEditor } from "./components";
import { selectSchema, selectTools, setSchema } from "./helper/redux";
import { schema2code } from "./helper/util";

const GenCode = () => {
  const dispatch = useDispatch();
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
  const [code, setCode] = React.useState({});
  const showCode = async () => {
    try {
      const res = await schema2code(schema);
      if (res.success) {
        setCode(res.data);
        setCodeVisible(true);
      } else {
        message.error(res.message);
      }
    } catch (e) {
      message.error(e.message);
    }
  };
  const downloadFile = () => {
    fileDownload(code.text, `${code.uuid}.js`);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="gen-code-page layout">
        <div className="layout__hd clearfix">
          <Button type="link" onClick={showCode}>
            查看Code
          </Button>
          <Button type="link" onClick={() => setSchemaVisible(true)}>
            查看Schema
          </Button>
          <Button type="link" danger onClick={() => dispatch(setSchema([]))}>
            清空
          </Button>
        </div>
        <div className="layout__bd">
          <Stage schema={schema} />
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
        okText="下载"
        cancelText="关闭"
        onOk={downloadFile}
        onCancel={() => setCodeVisible(false)}
      >
        <CodeEditor value={code.text} />
      </Modal>
    </DndProvider>
  );
};

export default GenCode;
