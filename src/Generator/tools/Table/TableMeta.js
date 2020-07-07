export default {
  component: "Table",
  componentName: "表格",
  columns: [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ],
  dataSource: [],
  size: "middle",
  pagination: true,
};
