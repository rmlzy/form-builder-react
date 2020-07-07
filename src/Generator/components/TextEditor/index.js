import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default class TextEditor extends React.Component {
  render() {
    const { style, value, onChange } = this.props;
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
  }
}
