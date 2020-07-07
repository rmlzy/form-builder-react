import React from "react";
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTool } from "../../helper/redux";

const Tool = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { ...props, type: props.component },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      item.uuid = `${item.component}__${uuidv4()}`;
      if (item && dropResult) {
        console.log(`You dragged ${item.uuid} into ${dropResult.uuid}!`);
        dispatch(addTool({ tool: item, targetUuid: dropResult.uuid }));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const dispatch = useDispatch();
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} className="tool" style={{ opacity }}>
      <div className="tool__name">
        <b>{props.component}</b>
        <span>{props.componentName}</span>
      </div>
    </div>
  );
};

export default Tool;
