"use client";
import React, { useState } from "react";
import { Form, Input, Row, Col, ConfigProvider } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setReceiverData } from "@/redux/features/data/dataSlice";
import Button from "@/components/ui/Button";
import { redirect } from "next/navigation";

const FormData = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("Form submitted:", values);
      dispatch(setReceiverData(values));
      redirect("/cart");
    }, 1000);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: { labelColor: "white" },
        },
      }}
    >
      <div className="w-screen h-screen items-center text-white flex mx-24">
        <div className="w-1/2">
          <h1 className="flex justify-center items-center font-semibold text-4xl capitalize">
            Receiver's Details
          </h1>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Enter your Name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input Receiver Email!",
                },
                {
                  type: "email",
                  message: "Please enter a valid Email address!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Enter Receiver Email"
              />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input Receiver Contact Number!",
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit Phone Number!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Enter Receiver's Phone Number"
              />
            </Form.Item>
            <Form.Item
              label="Location"
              name="location"
              rules={[
                {
                  required: true,
                  message: "Please input Receiver's Location!",
                },
              ]}
            >
              <Input
                prefix={<EnvironmentOutlined />}
                placeholder="Enter Receiver's Location"
              />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button text="Submit" htmlType="submit" loading={loading} />
            </Form.Item>
          </Form>
        </div>
        <div className="w-1/2 ml-24">IMAGE</div>
      </div>
    </ConfigProvider>
  );
};

export default FormData;
