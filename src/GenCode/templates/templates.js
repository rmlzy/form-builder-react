export const debugSchema = [
  {
    component: "H2",
    text: "输入框",
    title: "H2 Title",
  },
  {
    component: "P",
    text: "这里是段落",
  },
  {
    component: "Row",
    gutter: 20,
    col: 8,
    children: [
      {
        component: "Input",
        label: "输入框",
        name: "input1",
        size: "small",
        placeholder: "size:small",
      },
      {
        component: "Input",
        label: "输入框",
        name: "input1",
        size: "middle",
        placeholder: "size:middle",
      },
      {
        component: "Input",
        label: "输入框",
        name: "input1",
        size: "large",
        placeholder: "size:large",
      },
    ],
  },
  {
    component: "Row",
    gutter: 20,
    col: 8,
    children: [
      {
        component: "Input",
        label: "输入框",
        name: "input1",
        placeholder: "normal",
      },
      {
        component: "Input",
        label: "输入框",
        name: "input2",
        addonAfter: "AFTER",
        placeholder: "addonAfter",
      },
      {
        component: "Input",
        label: "输入框",
        name: "input3",
        addonBefore: "BEFORE",
        placeholder: "addonBefore",
      },
    ],
  },
  {
    component: "Row",
    gutter: 20,
    col: 8,
    children: [
      {
        component: "Input",
        label: "输入框",
        name: "input1",
        prefix: "¥",
        placeholder: "prefix",
      },
      {
        component: "Input",
        label: "输入框",
        name: "input2",
        suffix: ".com",
        placeholder: "suffix",
      },
      {
        component: "Input",
        label: "输入框",
        name: "input2",
        allowClear: true,
        placeholder: "allowClear",
      },
    ],
  },
  {
    component: "Row",
    gutter: 20,
    col: 8,
    children: [
      {
        component: "Input",
        label: "输入框",
        name: "input1",
        className: "demo-class",
        placeholder: "自定义Class",
      },
      {
        component: "Input",
        label: "输入框",
        name: "input2",
        style: { background: "red" },
        placeholder: "自定义Style",
      },
    ],
  },
  {
    component: "Divider",
    dashed: true,
    type: "horizontal",
  },
  {
    component: "Divider",
    type: "horizontal",
  },
  {
    component: "Divider",
    type: "horizontal",
    text: "我是有底线的",
  },
  {
    component: "Divider",
    type: "horizontal",
    text: "我是有底线的",
    plain: true,
    orientation: "right",
  },
];
