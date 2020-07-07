import React from "react";

const _getComponent = (option) => {
  return <div className="ant-descriptions-title">{option.text || ""}</div>;
};

const _getText = (option) => {
  return `<div className="ant-descriptions-title">${option.text || ""}</div>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
