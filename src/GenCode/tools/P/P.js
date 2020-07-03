import React from "react";
import _ from "lodash";
import { props2Text } from "../../helper/util";

export const PMeta = {
  component: "P",
  componentIcon: "P",
  componentName: "段落",
  text: "这是一个段落",
};

export const _P = (option) => {
  const props = _.pick(option, ["title"]);
  const component = <p key={option.index} {...props} dangerouslySetInnerHTML={{ __html: option.text }} />;
  const text = `<p ${props2Text(props)}>${option.text}</p>`;
  return { component, text };
};
