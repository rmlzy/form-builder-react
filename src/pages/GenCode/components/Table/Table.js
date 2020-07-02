import React from "react";
import { Table } from "antd";
import _ from "lodash";

const _Table = (option) => {
  option.dataSource = [];
  const props = _.pick(option, ["bordered", "size", "dataSource", "columns", "dataSource", "footer"]);
  const component = <Table {...props} />;
  const text = "";
  return { component, text };
};

export default _Table;
