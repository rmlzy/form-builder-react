import React from "react";
import { Button, message, Card, Row, Col } from "antd";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

export default class UI extends React.Component {
  state = {
    schema: {},
    formData: {
      name: "张三",
      mobile: "",
      orderNo: "",
    },
  };

  onSchemaChange = (schema) => {
    this.setState({ schema: JSON.parse(schema) });
  };

  safeStringify = (json) => {
    let str;
    try {
      str = JSON.stringify(json, null, "\t");
    } catch (e) {
      message.error(e.message);
    }
    return str;
  };

  render() {
    const { schema, formData } = this.state;
    return (
      <div className="ui-page">
        <Row gutter={20}>
          <Col span={12}>
            <h2>JSONSchema</h2>
            <AceEditor
              mode="javascript"
              theme="monokai"
              width="100%"
              height="800px"
              value={this.safeStringify(schema)}
              onChange={this.onSchemaChange}
              name="js_JSONSchema"
              editorProps={{ $blockScrolling: true }}
            />
          </Col>

          <Col span={12}>
            <h2>预览</h2>
          </Col>
        </Row>
      </div>
    );
  }
}
