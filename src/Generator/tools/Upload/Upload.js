import React from "react";
import { Upload, Form, Button } from "antd";
import { UploadOutlined, PlusOutlined, InboxOutlined } from "@ant-design/icons";
import { props2Text, genRules, genDangerHtml } from "../../helper/util";

const _getComponent = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: genDangerHtml(option.extra),
    rules: genRules(option),
  };
  let uploadEl;
  if (option.mode === "button") {
    const uploadProps = {
      name: "file",
      action: "https://your_awesome_upload_url",
    };
    uploadEl = (
      <Upload {...uploadProps}>
        <Button>
          <UploadOutlined />
          {option.text || ""}
        </Button>
        <p>{option.hint || ""}</p>
      </Upload>
    );
  }
  if (option.mode === "card") {
    const uploadProps = {
      name: "file",
      action: "https://your_awesome_upload_url",
      listType: "picture-card",
      showUploadList: true,
    };
    uploadEl = (
      <Upload {...uploadProps}>
        <PlusOutlined />
        <p className="ant-upload-text">{option.text || ""}</p>
        <p className="ant-upload-hint">{option.hint || ""}</p>
      </Upload>
    );
  }
  if (option.mode === "drag") {
    const uploadProps = {
      name: "file",
      action: "https://your_awesome_upload_url",
      multiple: true,
    };
    uploadEl = (
      <Upload.Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">{option.text || ""}</p>
        <p className="ant-upload-hint">{option.hint || ""}</p>
      </Upload.Dragger>
    );
  }
  return <Form.Item {...formItemProps}>{uploadEl}</Form.Item>;
};

const _getText = (option) => {
  const formItemProps = {
    name: option.name,
    label: option.label,
    extra: option.extra,
    rules: genRules(option),
  };
  let uploadText;
  if (option.mode === "button") {
    const uploadProps = {
      name: "file",
      action: "https://your_awesome_upload_url",
    };
    uploadText = `
      <Upload ${props2Text(uploadProps)}>
        <Button>
          <UploadOutlined />
          ${option.text || ""}
        </Button>
        <p>${option.hint || ""}</p>
      </Upload>`;
  }
  if (option.mode === "card") {
    const uploadProps = {
      name: "file",
      action: "https://your_awesome_upload_url",
      listType: "picture-card",
      showUploadList: true,
    };
    uploadText = `
      <Upload ${props2Text(uploadProps)}>
        <PlusOutlined />
        <p className="ant-upload-text">${option.text || ""}</p>
        <p className="ant-upload-hint">${option.hint || ""}</p>
      </Upload>`;
  }
  if (option.mode === "drag") {
    const uploadProps = {
      name: "file",
      action: "https://your_awesome_upload_url",
      multiple: true,
    };
    uploadText = `
      <Upload.Dragger ${props2Text(uploadProps)}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">${option.text || ""}</p>
        <p className="ant-upload-hint">${option.hint || ""}</p>
      </Upload.Dragger>`;
  }
  return `
  <Form.Item ${props2Text(formItemProps)}>
      ${uploadText}
  </Form.Item>
  `;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
