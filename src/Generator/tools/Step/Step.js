import React from "react";
import { Steps } from "antd";
import { props2Text } from "../../helper/util";

const _getComponent = (option) => {
  const stepsProps = {
    current: option.current,
    direction: option.direction,
    labelPlacement: option.labelPlacement,
    progressDot: option.progressDot,
    size: option.size,
  };
  return (
    <Steps {...stepsProps}>
      {option.childes.map((item, i) => (
        <Steps.Step key={i} title={item.title} subTitle={item.subTitle} />
      ))}
    </Steps>
  );
};

const _getText = (option) => {
  const stepsProps = {
    current: option.current,
    direction: option.direction,
    labelPlacement: option.labelPlacement,
    progressDot: option.progressDot,
    size: option.size,
  };
  const itemTexts = option.childes.map((item) => {
    const stepProps = {
      title: item.title,
      subTitle: item.subTitle,
    };
    return `<Steps.Step ${props2Text(stepProps)} />`;
  });
  return `
  <Steps ${props2Text(stepsProps)}>
    ${itemTexts.join("\n")}
  </Steps>`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
