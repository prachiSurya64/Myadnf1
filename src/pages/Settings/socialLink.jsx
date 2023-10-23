import { useState } from "react";
import { Form, Input, Button, message, Typography } from "antd";
import {
  // FacebookOutlined,
  FacebookFilled,
  TwitterOutlined,
  GoogleOutlined,
  HomeFilled,
} from "@ant-design/icons";

const SocialLink = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const onFinish = (values) => {
    const { facebook, twitter, google } = values;

    if (!facebook && !twitter && !google) {
      message.warning("Please enter at least one link.");
    } else if (
      (facebook && !isValidUrl(facebook)) ||
      (twitter && !isValidUrl(twitter)) ||
      (google && !isValidUrl(google))
    ) {
      message.error("Please enter valid links.");
    } else {
      console.log("Received values:", values);
      setSuccessMessageVisible(true);
      form.resetFields();
      message.success("Settings saved successfully");
    }
  };

  const isValidUrl = (url) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  const [form] = Form.useForm();
  return (
    <>
      <div>
        <Typography.Title level={4}>
          <HomeFilled />
          &nbsp; Dashboard /Social-Links
        </Typography.Title>
      </div>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          border: "1px solid #fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "20px",
          boxSizing: "border-box",
        }}
        form={form}
      >
        <Form.Item label="Google :" name="google">
          <Input
            prefix={
              <GoogleOutlined style={{ fontSize: "16px", color: "#F75D59" }} />
            }
            placeholder=": Enter Google link"
          />
        </Form.Item>

        <Form.Item label=" Twitter :" name="twitter">
          <Input
            prefix={
              <TwitterOutlined style={{ fontSize: "16px", color: "teal" }} />
            }
            placeholder=": Enter Twitter link"
          />
        </Form.Item>

        <Form.Item label="Facebook :" name="facebook">
          <Input
            prefix={
              <FacebookFilled style={{ fontSize: "16px", color: "#1890ff" }} />
            }
            placeholder=": Enter Facebook link"
          />
        </Form.Item>

        {successMessageVisible && (
          <Form.Item>
            <div style={{ color: "green", marginBottom: "16px" }}>
              Successfully saved settings and fields are empty.
            </div>
          </Form.Item>
        )}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
          >
            Save Settings
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SocialLink;
