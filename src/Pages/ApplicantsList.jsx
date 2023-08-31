import React, { useState } from "react";
import { Switch, Table } from "antd";
import Popmodal from "./Popmodal";

const columns = [
  {
    title: "Full Name",
    width: 3,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Age",
    width: 3,
    dataIndex: "age",
    key: "age",
    fixed: "left",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "1",
    width: 5,
  },
  {
    title: "Status",
    dataIndex: "address",
    key: "status",
    width: 5,
  },

  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 10,
    render: () => <Popmodal />,
  },
];

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: Math.floor(Math.random() * 35),
    address: `${i} , Ikorodu, Lagos `,
    email: `dummmy@gmail.com`,
  });
}

const ApplicantsListApp = () => {
  const [fixedTop, setFixedTop] = useState(false);
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{
        x: 1500,
      }}
      summary={() => (
        <Table.Summary fixed={fixedTop ? "top" : "bottom"}>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2}>
              <Switch
                checkedChildren="Fixed Top"
                unCheckedChildren="Fixed Top"
                checked={fixedTop}
                onChange={() => {
                  setFixedTop(!fixedTop);
                }}
              />
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      sticky
    />
  );
};
export default ApplicantsListApp;
