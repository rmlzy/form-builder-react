import React from "react";
import { Table } from "antd";
import _ from "lodash";
import { props2Text } from "../../helper/util";

const _getComponent = (option) => {
  const tableProps = _.pick(option, ["bordered", "size", "dataSource", "columns", "pagination", "footer"]);
  const paginationConfig = {
    total: tableProps.dataSource.length,
    current: 1,
    showSizeChanger: true,
    showQuickJumper: true,
    showTitle: true,
    showTotal: (total) => `共 ${total} 条数据`,
    pageSize: 10,
    pageSizeOptions: [10, 50, 100, 200],
  };
  return <Table {...tableProps} pagination={tableProps.pagination ? paginationConfig : false} />;
};

const _getText = (option) => {
  const props = _.pick(option, ["bordered", "size", "dataSource", "columns", "pagination", "footer"]);
  const paginationConfig = {
    total: props.dataSource.length,
    current: 1,
    showSizeChanger: true,
    showQuickJumper: true,
    showTitle: true,
    showTotal: (total) => `共 ${total} 条数据`,
    pageSize: 10,
    pageSizeOptions: [10, 50, 100, 200],
  };
  const tableProps = {
    ...props,
    pagination: option.pagination ? paginationConfig : "",
  };
  return `<Table ${props2Text(tableProps)} />`;
};

export default (option) => ({
  component: _getComponent(option),
  text: _getText(option),
});
