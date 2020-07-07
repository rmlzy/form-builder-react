import React from "react";

const _getComponent = (option) => {
  return (
    <div className="ant-descriptions-item">
      <div className="ant-descriptions-label">{option.label || ""}：</div>
      <div className="ant-descriptions-content">{option.value || ""}</div>
    </div>
  );
};

const _getText = (option) => {
  return `
    <div className="ant-descriptions-item">
      <div className="ant-descriptions-label">${option.label || ""}：</div>
      <div className="ant-descriptions-content">${option.value || ""}</div>
    </div>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
