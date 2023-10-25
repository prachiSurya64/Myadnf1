import { Form, Input, Button, Row, Col, Upload, message, Switch } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import antdThemeConfig from "../common/antdThemeConfig";

const AccountsForm = () => {
  const [form] = Form.useForm();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Form data saved successfully!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
const {components} =  antdThemeConfig;

  return (
    <div style={{ padding: "20px" }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "First Name is required" }]}
            >
              <Input placeholder="Enter First Name" 
                 style={{borderRadius:components.Input.borderRadius}}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Last Name is required" }]}
            >
              <Input placeholder="Enter Last Name" 
                 style={{borderRadius:components.Input.borderRadius}}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Username is required" }]}
            >
              <Input placeholder="Enter Username" 
                 style={{borderRadius:components.Input.borderRadius}}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phone"
              name="phone"
              //   rules={[{ required: true, message: "Phone is required" }]}
            >
              <Input placeholder="Enter Phone" 
                 style={{borderRadius:components.Input.borderRadius}}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Invalid email format" },
              ]}
            >
              <Input placeholder="Enter Email" 
                 style={{borderRadius:components.Input.borderRadius}}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Is Featured"
              name="isFeatured"
              valuePropName="checked"
            >
              <Switch style={{ transform: "scale(0.8)" }} />
              &nbsp; &nbsp; &nbsp; is featured ?
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="PassWord"
              name="password"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter Password" 
                 style={{borderRadius:components.Input.borderRadius}}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="PassWord Confirmation"
              name="pass-confirmation"
              rules={[{ required: true, message: "Please select a status" }]}
            >
              <Input placeholder="Re-Enter Password" 
                 style={{borderRadius:components.Input.borderRadius}}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Description is required" }]}
            >
              <Input.TextArea placeholder="Enter Description" rows={4} 
                //  style={{borderRadius:components.Input.borderRadius}}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            {/* <Form.Item
              label="Image"
              name="image"
              rules={[{ required: true, message: "Image is required" }]}
            >
              <Upload>
                <Button>Upload Image</Button>
              </Upload>
            </Form.Item> */}
            <Form.Item
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          {/* <Col span={12}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Description is required" }]}
            >
              <Input.TextArea placeholder="Enter Description" rows={4} />
            </Form.Item>
          </Col> */}
          <Col span={12}>
            <Form.Item label="Publish" name="publish">
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor:   components.Button.colorPrimary.main, 
                  color:components.Button.colorPrimary.colorText,  
                  borderRadius: components.borderRadius,
                }}
              >
                Save
              </Button>
              <Button
                style={{
                  marginLeft: "15px",

                  backgroundColor:   components.Button.colorSuccess.main, 
                  color:components.Button.colorPrimary.colorText,  
                  borderRadius: components.borderRadius,
                }}
                htmlType="button"
                // type="primary"
              >
                Save & Edit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AccountsForm;
