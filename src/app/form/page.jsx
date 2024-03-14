"use client";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import { Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const FormData = () => {
  return (
    <div style={{ backgroundColor: "#253138" }}>
      <Navbar />
      <div className="px-20 py-32">
        <div className="flex flex-col bg-white w-1/2 px-10 py-24 rounded-lg">
          <h1 className="text-black flex justify-center font-semibold text-2xl mb-10">
            Sender's Details
          </h1>
          <Form
            name="basic"
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              labelAlign="top"
              labelStyle={{ color: "white" }}
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              labelAlign="top"
              labelStyle={{ color: "white" }}
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Age"
              name="age"
              labelAlign="top"
              labelStyle={{ color: "white" }}
              rules={[
                {
                  required: true,
                  message: "Please input your age!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              labelAlign="top"
              labelStyle={{ color: "white" }}
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button text="Submit" htmlType="submit" />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FormData;
