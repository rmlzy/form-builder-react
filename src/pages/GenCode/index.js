import React from "react";
import { Row, Col } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import parse from "./parse";
import Tool from "./Tool";
import Stage from "./Stage";

export default class GenCode extends React.Component {
  state = {
    tools: [
      { icon: "H", name: "标题", component: "H2", text: "这里是标题" },
      { icon: "P", name: "段落", component: "P", text: "这里是段落" },
      {
        icon: "D",
        name: "分割线",
        component: "Divider",
        type: "horizontal",
        orientation: "center",
        plain: true,
        dashed: false,
      },
      { icon: "G", name: "栅格", component: "Row", gutter: 0, cols: "8 8 8" },
      {
        icon: "B",
        name: "表格",
        component: "Table",
        size: "middle",
        bordered: true,
        columns: [
          {
            title: "姓名",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "年龄",
            dataIndex: "age",
            key: "age",
          },
          {
            title: "住址",
            dataIndex: "address",
            key: "address",
          },
        ],
      },
      { icon: "I", name: "文本输入框", component: "Input" },
    ],

    schema: [
      {
        component: "Input",
        label: "输入框",
        name: "field",
      },
    ],
  };

  onDropTool = (tool) => {
    const { schema } = this.state;
    schema.push(tool);
    this.setState({ schema });
  };

  onSortBlock = (dragIndex, hoverIndex) => {
    const { schema } = this.state;
    const dragBlock = schema[dragIndex];
    const newSchema = update(schema, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragBlock],
      ],
    });
    this.setState({ schema: newSchema });
  };

  onRemoveBlock = (removedIndex) => {
    const { schema } = this.state;
    const newSchema = update(schema, { $splice: [[removedIndex, 1]] });
    this.setState({ schema: newSchema });
  };

  onEditBlock = (editedIndex, newBlock) => {
    const { schema } = this.state;
    const newSchema = update(schema, {
      [editedIndex]: { $set: newBlock },
    });
    this.setState({ schema: newSchema });
  };

  render() {
    const { tools, schema } = this.state;
    const { code } = parse(schema);
    console.log(code);
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="gen-code-page">
          <Row gutter={20}>
            <Col span={19}>
              <h2>画布</h2>
              <Stage
                schema={schema}
                onSort={this.onSortBlock}
                onRemove={this.onRemoveBlock}
                onChange={this.onEditBlock}
              />
            </Col>
            <Col span={5}>
              <h2>控件</h2>
              {tools.map((tool, i) => {
                return <Tool key={i} {...tool} onDrop={this.onDropTool} />;
              })}
            </Col>
          </Row>
        </div>
      </DndProvider>
    );
  }
}
