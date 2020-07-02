import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ style = {}, value, onChange }) => {
  style.height = style.height || 300;
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
  ];
  return <ReactQuill theme="snow" style={style} formats={formats} value={value} onChange={onChange} />;
};

export default Editor;
