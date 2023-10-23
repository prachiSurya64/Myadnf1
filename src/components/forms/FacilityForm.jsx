import { useState } from "react";
import { Form, Input, Button, Select, Row, Col, message } from "antd";
import {
  AppleOutlined,
  TwitterOutlined,
  YahooOutlined,
  InstagramOutlined,
  AmazonOutlined,
  CodeSandboxOutlined,
  CodepenOutlined,
  FacebookOutlined,
  GooglePlusOutlined,
  LinkedinOutlined,
  GitlabOutlined,
  QqOutlined,
  SkypeOutlined,
  AlipayCircleOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
  WechatOutlined,
  AndroidOutlined,
  WeiboOutlined,
  Html5Outlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
  WeiboSquareOutlined,
  DingdingOutlined,
  AliwangwangOutlined,
  GithubOutlined,
  ChromeOutlined,
  WindowsOutlined,
  IeOutlined,
} from "@ant-design/icons";

const { Option: SelectOption } = Select;

const iconsList = [
  { icon: <AppleOutlined />, name: "apple" },
  { icon: <AndroidOutlined />, name: "android" },
  { icon: <WindowsOutlined />, name: "windows" },
  { icon: <IeOutlined />, name: "ieOutlined" },
  { icon: <ChromeOutlined />, name: "chromeOutlined" },
  { icon: <GithubOutlined />, name: "githubOutlined" },
  { icon: <AliwangwangOutlined />, name: "aliwangwangOutlined" },
  { icon: <DingdingOutlined />, name: "dingdingOutlined" },
  { icon: <WeiboSquareOutlined />, name: "weiboSquareOutlined" },
  { icon: <WeiboCircleOutlined />, name: "weiboCircleOutlined" },
  { icon: <TaobaoCircleOutlined />, name: "taobaoCircleOutlined" },
  { icon: <Html5Outlined />, name: "Html" },
  { icon: <WeiboOutlined />, name: "Weibootlined" },
  { icon: <TwitterOutlined />, name: "twitter" },
  { icon: <WechatOutlined />, name: "wechatOutlined" },
  { icon: <WhatsAppOutlined />, name: "whatsapp" },
  { icon: <YoutubeOutlined />, name: "youtube" },
  { icon: <AlipayCircleOutlined />, name: "alipayCircleOutlined" },
  { icon: <SkypeOutlined />, name: "skype" },
  { icon: <QqOutlined />, name: "qqOutlined" },
  { icon: <GitlabOutlined />, name: "git" },
  { icon: <LinkedinOutlined />, name: "linkedin" },
  { icon: <GooglePlusOutlined />, name: "google" },
  { icon: <FacebookOutlined />, name: "facebook" },
  { icon: <CodepenOutlined />, name: "codepen" },
  { icon: <CodeSandboxOutlined />, name: "codesandbox" },
  { icon: <AmazonOutlined />, name: "amazon" },
  { icon: <InstagramOutlined />, name: "insta" },
  { icon: <YahooOutlined />, name: "yahoo" },
];

const FacilityForm = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});

  const onFinish = (values) => {
    console.log("Form values:", values);
    setFormData(values);
    message.success("Form data saved successfully!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
              label="Name"
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Status"
              name="status"
              rules={[{ required: true, message: "Please select a status" }]}
            >
              <Select placeholder="Select status">
                <SelectOption value="Published">Published</SelectOption>
                <SelectOption value="Unpublished">Unpublished</SelectOption>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Icons" name="icons">
              <Select placeholder="Choose Icon">
                {iconsList.map((icon) => (
                  <SelectOption key={icon.name} value={icon.name}>
                    {icon.icon} {icon.name}
                  </SelectOption>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Form.Item label="Publish" name="publish">
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#68437e" }}
            >
              Save
            </Button>
            <Button
              style={{ marginLeft: "10px", backgroundColor: "#5bafa9" }}
              htmlType="button"
              type="primary"
            >
              Save & Edit
            </Button>
          </Form.Item>
        </Row>
      </Form>
      <div>
        <h2>Form Data</h2>
        <pre style={{ overflow: "hidden" }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default FacilityForm;

// import { useState } from "react";
// import { Form, Input, Button, Select, Row, Col, message } from "antd";

// const { Option: SelectOption } = Select;

// const FacilityForm = () => {
//   const [form] = Form.useForm();
//   const [formData, setFormData] = useState({}); // Initialize state for form data

//   const onFinish = (values) => {
//     console.log("Form values:", values);
//     setFormData(values); // Update state with form values
//     message.success("Form data saved successfully!");
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//       >
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               label="Name"
//               name="name"
//               rules={[{ required: true, message: "Name is required" }]}
//             >
//               <Input placeholder="Enter Name" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="Status"
//               name="status"
//               rules={[{ required: true, message: "Please select a status" }]}
//             >
//               <Select placeholder="Select status">
//                 <SelectOption value="Published">Published</SelectOption>
//                 <SelectOption value="Unpublished">Unpublished</SelectOption>
//               </Select>
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item label="Icons" name="icons">
//               <Input placeholder="Choose Icon" />
//             </Form.Item>
//           </Col>

//           <Form.Item label="Publish" name="publish">
//             <Button
//               type="primary"
//               htmlType="submit"
//               style={{ backgroundColor: "#68437e" }}
//             >
//               Save
//             </Button>
//             <Button
//               style={{ marginLeft: "10px", backgroundColor: "#5bafa9" }}
//               htmlType="button"
//               type="primary"
//             >
//               Save & Edit
//             </Button>
//           </Form.Item>
//         </Row>
//       </Form>
//       <div>
//         <h2>Form Data</h2>
//         <pre style={{ overflow: "hidden" }}>
//           {JSON.stringify(formData, null, 2)}
//         </pre>
//       </div>
//     </div>
//   );
// };

// export default FacilityForm;

// import { useState } from "react";
// import { Form, Input, Button, Select, Row, Col, Upload, message } from "antd";

// const { Option: SelectOption } = Select;

// const FacilityForm = () => {
//   const [form] = Form.useForm();
//   const [formData, setFormData] = useState({}); // Initialize state for form data

//   const onFinish = (values) => {
//     console.log("Form values:", values);
//     setFormData(values); // Update state with form values
//     message.success("Form data saved successfully!");
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//       >
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               label="Name"
//               name="name"
//               rules={[{ required: true, message: "Name is required" }]}
//             >
//               <Input placeholder="Enter Name" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item label="Publish" name="publish">
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 style={{ backgroundColor: "#68437e" }}
//               >
//                 Save
//               </Button>
//               <Button
//                 style={{ marginLeft: "10px", backgroundColor: "#5bafa9" }}
//                 htmlType="button"
//                 type="primary"
//               >
//                 Save & Edit
//               </Button>
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item label="Icons" name="icons">
//               <Input placeholder="Choose Icon" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="Status"
//               name="status"
//               rules={[{ required: true, message: "Please select a status" }]}
//             >
//               <Select placeholder="Select status">
//                 <SelectOption value="Published">Published</SelectOption>
//                 <SelectOption value="Unpublished">Unpublished</SelectOption>
//               </Select>
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               label="Description"
//               name="description"
//               rules={[{ required: true, message: "Description is required" }]}
//             >
//               <Input.TextArea placeholder="Enter Description" rows={4} />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="Image"
//               name="image"
//               rules={[{ required: true, message: "Image is required" }]}
//             >
//               <Upload>
//                 <Button>Upload Image</Button>
//               </Upload>
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row gutter={16}>
//           <Col span={24}>
//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Save
//               </Button>
//               <Button
//                 type="primary"
//                 style={{ marginLeft: "10px" }}
//                 htmlType="button"
//               >
//                 Save & Edit
//               </Button>
//             </Form.Item>
//           </Col>
//         </Row>
//       </Form>
//       <div>
//         <h2>Form Data</h2>
//         <pre style={{ overflow: "hidden" }}>
//           {JSON.stringify(formData, null, 2)}
//         </pre>
//       </div>
//     </div>
//   );
// };

// export default FacilityForm;
