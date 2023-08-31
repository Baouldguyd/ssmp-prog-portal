import React, { useState } from "react";
import { Button, Form, Input, Modal, Select, DatePicker } from "antd";
import axios from "axios";

const { TextArea } = Input;

const CreateView = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const [formInfo, setformInfo] = useState({
    course: "",
    taskTitle: "",
    taskPoints: "",
    taskDescription: "",
    deadline: ""
  });
  const [errors, setErrors] = useState({
    course: "",
    taskTitle: "",
    taskPoints: "",
    taskDescription: "",
    deadline: "",
    
  });

 /*  await sessionStorage.getItem("token", response.data.data.token);
  await sessionStorage.getItem("userRole", response.data.data.role); */

  const handleInputChange = ({ name, value }) => {
    setformInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleOk = async () => {
    
    try {
      
      await form.resetFields();

      const values = formInfo;
      console.log("Data being sent:", values); 

      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.post(
          process.env.REACT_APP_SSMP_BACKEND_API + "tasks/createTask",
          
          { ...formInfo, deadline: formInfo.deadline.toISOString()},{
            headers:{
              Authorization: `Bearer ${token}`,
              role: "ADMIN"
            }
          }
        );console.log(formInfo.deadline.toISOString());

        if (response.status === 201) {
          // Task created successfully, trigger the onCreate callback
          onCreate(values);
          console.log(values);
        }
      } catch (error) {
        console.error("Error creating task:", error);
      }
    } catch (info) {
      console.log("Validate Failed:", info);
    }
  };
  return (
    <Modal
    open={open}
      title="Create a new task"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={handleOk}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          id="course"
          name="course"
          label="Course"
          rules={[
            {
              required: true,
              message: "Please input the title of the Course!",
            },
          ]}
        >
          <Select  onChange={(value) => handleInputChange({ name: 'course', value })}>
            <Select.Option value="Html">Html</Select.Option>
            <Select.Option value="Css">Css</Select.Option>
            <Select.Option value="JavaScript">JavaScript</Select.Option>
            <Select.Option value="React">React</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          id="taskTitle"
          name="taskTitle"
          label="Task Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input onChange={(event) => handleInputChange({ name: 'taskTitle', value: event.target.value })} />
        </Form.Item>
        <Form.Item
          id="taskPoints"
          name="taskPoints"
          label="Task Points"
          rules={[
            {
              required: true,
              message: "Please input the point of the task!",
            },
          ]}
        >
          <Input onChange={(event) => handleInputChange({ name: 'taskPoints', value: event.target.value })} type="number" min={50} />
        </Form.Item>

        <Form.Item
          id="deadline"
          name="deadline"
          label="Deadline"
          rules={[
            {
              required: true,
              message: "Please input the Deadline of the task!",
            },
          ]}
        >
          <DatePicker value={formInfo.deadline}  onChange={(date) => handleInputChange({ name: 'deadline', value: date })} />
        </Form.Item>

        <Form.Item
          id="taskDescription"
          name="taskDescription"
          label="Details"
          rules={[
            {
              required: true,
              message: "Please input the details of the task!",
            },
          ]}
        >
          <TextArea onChange={(e) => handleInputChange({ name: 'taskDescription', value: e.target.value })} rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateView;
