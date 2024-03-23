"use client";
import { Collapse, ConfigProvider, Form, Input, Select } from "antd";
import {
  UserOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "@/components/ui/Button";
const { Option } = Select;

const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "Cash on Delivery",
    children: <p>Pay on Delivery</p>,
  },
  {
    key: "2",
    label: "Razorpay",
    children: <p>Pay via Razorpay</p>,
  },
  {
    key: "3",
    label: "Bank Transfer",
    children: <p>{text}</p>,
  },
];

const Cart = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    setTimeout(() => {
      console.log("Form submitted:", values);
    }, 1000);
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: { labelColor: "white" },
        },
      }}
    >
      <div className="flex justify-center w-screen mt-20 items-center ">
        <div className="text-white w-11/12 mt-14 h-full">
          <h1 className="flex justify-center items-center py-10 font-bold text-5xl">
            Complete your Order
          </h1>
          <hr />
          <div className="flex md:flex-row flex-col">
            {/* Customer Info */}
            <div className=" pl-8 mr-3 md:w-1/2">
              <Form form={form} onFinish={onFinish} layout="vertical">
                {/* Email */}
                <div className="my-10">
                  <div className="flex justify-between mb-4 items-center">
                    <h1 className="text-2xl font-bold text-white">Customer Infomation</h1>
                    <h2 className="text-gray-500">
                      Already have an account?{" "}
                      <span className="text-white font-semibold cursor-pointer">
                        Login
                      </span>
                    </h2>
                  </div>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined />}
                      placeholder="Enter your Email"
                    />
                  </Form.Item>
                </div>
                {/* Billing Address */}
                <div className="my-10">
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-white">Billing & Shipping</h1>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Form.Item
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your First Name!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<UserOutlined />}
                          placeholder="First Name*"
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Last Name!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<UserOutlined />}
                          placeholder="Last Name*"
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name="address1"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Address!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<EnvironmentOutlined />}
                          placeholder="Flat/ House Number/ Building/ Apartment*"
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name="address2"
                        rules={[
                          {
                            required: true,
                            message: "Enter your address!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<EnvironmentOutlined />}
                          placeholder="Area/ Street/ Sector/ Village*"
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name="city"
                        rules={[
                          {
                            required: true,
                            message: "Enter your Town/City!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<EnvironmentOutlined />}
                          placeholder="Town/ City*"
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name="state"
                        rules={[
                          {
                            required: true,
                            message: "Enter your State!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<EnvironmentOutlined />}
                          placeholder="State*"
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name="country"
                        rules={[
                          {
                            required: true,
                            message: "Please select your Country!",
                          },
                        ]}
                      >
                        <Select
                          placeholder="Select Country*"
                          prefix={<EnvironmentOutlined />}
                        >
                          <Option value="USA">USA</Option>
                          <Option value="Canada">Canada</Option>
                          <Option value="UK">UK</Option>
                          {/* Add more countries as options */}
                        </Select>
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name="pin"
                        rules={[
                          {
                            required: true,
                            message: "Enter your PIN CODE!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<EnvironmentOutlined />}
                          placeholder="PIN*"
                        />
                      </Form.Item>
                    </div>
                    <div className="col-span-2">
                      <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Contact Number!",
                          },
                          {
                            pattern: /^[0-9]{10}$/,
                            message:
                              "Please enter a valid 10-digit Phone Number!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<PhoneOutlined />}
                          placeholder="Phone*"
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>

                <div className="my-10">
                  <div className="flex flex-col justify-between mb-4 text-white">
                    <h1 className="text-2xl font-bold mb-4">
                      Additional Information
                    </h1>
                    <Collapse
                      items={items}
                      defaultActiveKey={["1"]}
                      onChange={onChange}
                    />
                  </div>
                </div>

                <Form.Item style={{ textAlign: "center", width: "full" }}>
                  <Button text="Pay" htmlType="submit" />
                </Form.Item>
              </Form>
            </div>
            {/* Cart Summary */}
            <div className="border-l-2 flex md:w-1/2 justify-center p-10">
              {/* Product Section */}
              <div className="flex flex-col flex-1 md:mr-8">
                <h1 className="text-xl font-bold mb-4">Product</h1>
                <hr className="border-gray-300 mb-4" />
                <h1 className="text-lg mb-4">BlueDart Plan</h1>
                <hr className="border-gray-300 mb-4" />
                <h1 className="text-lg mb-4">SubTotal</h1>
                <hr className="border-gray-300 mb-4" />
                <h1 className="text-lg">Total</h1>
              </div>

              {/* Price Section */}
              <div className="flex flex-col flex-1">
                <h1 className="text-xl font-bold mb-4">Price</h1>
                <hr className="border-gray-300 mb-4" />
                <h1 className="text-lg mb-4">$120</h1>
                <hr className="border-gray-300 mb-4" />
                <h1 className="text-lg mb-4">$120</h1>
                <hr className="border-gray-300 mb-4" />
                <h1 className="text-lg">$120</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Cart;
