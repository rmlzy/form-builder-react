import React from "react";
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

const Tool = ({ onDrop, ...rest }) => {
  const uuid = uuidv4();
  const data = { uuid, ...rest };
  const [{ isDragging }, drag] = useDrag({
    item: { ...data, type: "Tool" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onDrop(item);
        console.log(`把 ${item.component} 拖入 ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} className="tool" style={{ opacity }}>
      <div className="tool__icon">{rest.icon}</div>
      <div className="tool__name">{rest.name}</div>
    </div>
  );
};

export default Tool;
