import React from "react";
import { useDrop } from "react-dnd";

const Dropable = ({ name, children }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Tool",
    drop: () => ({ name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return <div ref={drop}>{children}</div>;
};

export default Dropable;
