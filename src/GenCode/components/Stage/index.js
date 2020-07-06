import React from "react";
import { Form } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ReactSortable } from "react-sortablejs";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Droppable, Editable } from "../index";
import { getToolComponent } from "../../helper/util";
import { selectSchema, setSchema, setActiveUuid } from "../../helper/redux";

const Stage = ({ width, height }) => {
  const [form] = Form.useForm();
  const uuid = `Stage__${uuidv4()}`;
  const schemaCopy = _.cloneDeep(useSelector(selectSchema));
  const dispatch = useDispatch();
  return (
    <Droppable name="Stage" uuid={uuid}>
      <div className="stage" style={{ width, height }} onClick={() => dispatch(setActiveUuid(""))}>
        <Form form={form} layout="vertical">
          <ReactSortable
            list={schemaCopy}
            setList={(newSchema) => dispatch(setSchema(newSchema))}
            ghostClass="stage__sort__ghost"
            dragClass="stage__sort__drag"
          >
            {schemaCopy.map((block, index) => (
              <Editable key={index} block={{ ...block, index }}>
                {getToolComponent(block)}
              </Editable>
            ))}
          </ReactSortable>
        </Form>
      </div>
    </Droppable>
  );
};

export default Stage;
