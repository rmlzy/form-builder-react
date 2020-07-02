import React from "react";
import { useDrop } from "react-dnd";
import { Form } from "antd";
import { _Row } from "./util";
import { H2 as _H2, P as _P, Divider as _Divider, Table as _Table } from "./components";
import Editable from "./Editable";
import Sortable from "./Sortable";

const Stage = ({ schema, onSort, onRemove, onChange }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Tool",
    drop: () => ({ name: "Stage" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const [activeBlockIndex, setActiveBlockIndex] = React.useState(null);
  return (
    <div ref={drop} className="stage" onClick={() => setActiveBlockIndex(null)}>
      <Form layout="vertical">
        {schema.map((block, blockIndex) => {
          block.index = blockIndex;
          let el;
          if (block.component === "H2") {
            el = _H2(block).component;
          }
          if (block.component === "P") {
            el = _P(block).component;
          }
          if (block.component === "Row") {
            el = _Row(block).component;
          }
          if (block.component === "Divider") {
            el = _Divider(block).component;
          }
          if (block.component === "Table") {
            el = _Table(block).component;
          }
          if (el) {
            return (
              <Sortable key={blockIndex} index={blockIndex} onSort={onSort}>
                <Editable
                  block={block}
                  active={activeBlockIndex === blockIndex}
                  onClick={() => setActiveBlockIndex(blockIndex)}
                  onRemove={() => onRemove(blockIndex)}
                  onChange={(newBlock) => onChange(blockIndex, newBlock)}
                >
                  {el}
                </Editable>
              </Sortable>
            );
          }
          return null;
        })}
      </Form>
    </div>
  );
};

export default Stage;
