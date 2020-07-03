import React from "react";
import { v4 as uuidv4 } from "uuid";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

const CodeEditor = ({ value, onChange }) => {
  return (
    <AceEditor
      mode="javascript"
      theme="github"
      width="100%"
      value={value}
      onChange={onChange}
      name={uuidv4()}
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default CodeEditor;
