import React from "react";
import { props2Text } from "../../helper/util";

const _getComponent = (option) => {
  const pProps = {
    title: option.title,
  };
  return <p {...pProps} dangerouslySetInnerHTML={{ __html: option.text }} />;
};

const _getText = (option) => {
  const pProps = {
    title: option.title,
  };
  return `<p ${props2Text(pProps)}>${option.text}</p>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
