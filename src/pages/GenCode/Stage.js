import React from "react";
import { Form } from "antd";
import { H2 as _H2, P as _P, Divider as _Divider, Table as _Table, Row as _Row, Input as _Input } from "./components";
import Dropable from "./Dropable";
import Editable from "./Editable";
import Sortable from "./Sortable";

const Stage = ({ schema, onSort, onRemove, onChange }) => {
  const [activeBlockIndex, setActiveBlockIndex] = React.useState(null);
  return (
    <Dropable name="Stage">
      <div className="stage" onClick={() => setActiveBlockIndex(null)}>
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
            if (block.component === "Input") {
              el = _Input(block).component;
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
    </Dropable>
  );
};

export default Stage;
