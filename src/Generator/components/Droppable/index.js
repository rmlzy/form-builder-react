import React from "react";
import { useDrop } from "react-dnd";
import { getToolNames } from "../../helper/util";

const Index = ({ name, uuid, exclude = [], children }) => {
  const toolNames = getToolNames();
  const accept = toolNames.filter((item) => !exclude.includes(item));
  // eslint-disable-next-line
  const [{ canDrop, isOver }, drop] = useDrop({
    accept,
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      return { name, uuid };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });
  return <div ref={drop}>{children}</div>;
};

export default Index;
