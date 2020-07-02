import React from "react";
import _ from "lodash";
import { props2Text } from "../../util";

const _H2 = (option) => {
  const props = _.pick(option, ["title"]);
  const component = <h2 key={option.index} {...props} dangerouslySetInnerHTML={{ __html: option.text }} />;
  const text = `<h2 ${props2Text(props)}>${option.text}</h2>`;
  return { component, text };
};

export default _H2;
