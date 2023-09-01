import { QuestionCircleOutlined } from "@ant-design/icons";
import React from "react";
import { Popconfirm } from "antd";
import { BsThreeDots } from "react-icons/bs";
import styled from "@emotion/styled";

const Popmodal = () => (
  <Popconfirm
    className=" hover:scale-150 duration-200 cursor-pointer"
    title="Do you wish to:"
    okText="Decline"
    okType="danger"
    cancelText="Approve"
    style={{ width:"30px", backgroundColor: "black", color: "white" }}
  >
    <BsThreeDots />
    
  </Popconfirm>
);

export default Popmodal;

