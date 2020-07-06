import React from "react";
import { Steps } from "antd";
import _ from "lodash";
import { props2Text } from "../../helper/util";

const defaultChildes = [
  { title: "第一步", subTitle: "副标题" },
  { title: "第二步", subTitle: "副标题" },
  { title: "第三步", subTitle: "副标题" },
];

export default (option) => {
  option.direction = option.direction || "horizontal";
  option.labelPlacement = option.labelPlacement || "horizontal";
  const props = _.pick(option, ["current", "direction", "labelPlacement", "progressDot", "size", "status"]);
  option.childes = option.childes || [];
  if (option.childes.length === 0) {
    option.childes = defaultChildes;
  }

  const component = (
    <Steps {...props}>
      {option.childes.map((item, i) => {
        return <Steps.Step key={i} title={item.title} subTitle={item.subTitle} />;
      })}
    </Steps>
  );

  const itemTexts = option.childes.map((item) => {
    const stepProps = props2Text({
      title: item.title,
      subTitle: item.subTitle,
    });
    return `<Steps.Step ${stepProps} />`;
  });
  const text = `
<Steps ${props2Text(props)}>
  ${itemTexts.join("\n")}
</Steps>`;
  return { component, text };
};
