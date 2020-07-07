import React from "react";
import { PageHeader } from "antd";
import { genDangerHtml, props2Text } from "../../helper/util";

const _getComponent = (option) => {
  const phProps = {
    title: genDangerHtml(option.title),
    subTitle: genDangerHtml(option.subTitle),
    extra: genDangerHtml(option.extra),
  };
  return <PageHeader {...phProps} />;
};

const _getText = (option) => {
  const phProps = {
    title: option.title,
    subTitle: option.subTitle,
    extra: option.extra,
  };
  return `<PageHeader ${props2Text(phProps)}/>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
