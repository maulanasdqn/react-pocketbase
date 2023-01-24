import { Table } from "antd";
import { useState } from "react";

const CustTable = ({ columns, data, loading, rowSelection, onChange }) => {
  const showTotal = (total, range) =>
    `${range[0]}-${range[1]} of ${total} items`;

  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const onTableRowExpand = (expanded, record) => {
    const keys = [];
    if (expanded) {
      keys.push(record.id.toString());
    }

    setExpandedRowKeys(keys);
  };
  return (
    <Table
      rowKey={(record) => record.id.toString()}
      size="large"
      onChange={onChange}
      onExpand={onTableRowExpand}
      rowSelection={rowSelection}
      expandedRowKeys={expandedRowKeys}
      loading={loading}
      columns={columns}
      dataSource={data?.items}
      pagination={{
        current: data?.page,
        total: data?.totalItems,
        pageSize: data?.perPage,
        pageSizeOptions: [5, 10, 20, 50],
        showSizeChanger: true,
        showTotal,
      }}
    />
  );
};

export default CustTable;
