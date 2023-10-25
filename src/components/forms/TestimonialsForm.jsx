import { Form, Input, Button, Select, Row, Col, Upload, message } from "antd";

const { Option: SelectOption } = Select;

const TestimonialsForm = () => {
  const [form] = Form.useForm();
  //   const [formData, setFormData] = useState({});

  const onFinish = (values) => {
    console.log("Form values:", values);
    // setFormData(values);
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
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Icons" name="icons">
              <Input placeholder="Choose Icon" />
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
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Description is required" }]}
            >
              <Input.TextArea placeholder="Enter Description" rows={4} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Image"
              name="image"
              rules={[{ required: true, message: "Image is required" }]}
            >
              <Upload>
                <Button>Upload Image</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button
                type="primary"
                style={{ marginLeft: "10px" }}
                htmlType="button"
              >
                Save & Edit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {/* <div>
        <h2>Form Data</h2>
        <pre style={{ overflow: "hidden" }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div> */}
    </div>
  );
};

export default TestimonialsForm;

















// import { Form, Input, Button, Select, Row, Col, Upload, message } from "antd";

// const { Option: SelectOption } = Select;

// const TestimonialsForm = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log("Form values:", values);

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
//             <Form.Item label="Position/Company" name="position">
//               <Input placeholder="Position/Company" />
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
//             <Form.Item label="Publish" name="publish">
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 style={{
//                   backgroundColor: "#68437e",
//                   marginLeft: "5px",
//                 }}
//               >
//                 Save
//               </Button>
//               <Button
//                 style={{
//                   margin: "40px",
//                   marginLeft: "5px",
//                   marginTop: "10px",
//                   backgroundColor: "#5bafa9",
//                 }}
//                 htmlType="button"
//                 type="primary"
//               >
//                 Save & Edit
//               </Button>
//             </Form.Item>
//           </Col>
//         </Row>
//       </Form>
//     </div>
//   );
// };

// export default TestimonialsForm;

// // // import { useState } from "react";
// // import { Form, Input, Button, Select, Row, Col, Upload, message } from "antd";

// // const { Option: SelectOption } = Select;

// // const TestimonialsForm = () => {
// //   const [form] = Form.useForm();
// //   //   const [formData, setFormData] = useState({});

// //   const onFinish = (values) => {
// //     console.log("Form values:", values);
// //     // setFormData(values);
// //     message.success("Form data saved successfully!");
// //   };

// //   const onFinishFailed = (errorInfo) => {
// //     console.log("Failed:", errorInfo);
// //   };

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <Form
// //         form={form}
// //         layout="vertical"
// //         onFinish={onFinish}
// //         onFinishFailed={onFinishFailed}
// //       >
// //         <Row gutter={16}>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Name"
// //               name="name"
// //               rules={[{ required: true, message: "Name is required" }]}
// //             >
// //               <Input placeholder="Enter Name" />
// //             </Form.Item>
// //           </Col>
// //           <Col span={12}>
// //             <Form.Item label="Publish" name="publish">
// //               <Button
// //                 type="primary"
// //                 htmlType="submit"
// //                 style={{ backgroundColor: "#68437e" }}
// //               >
// //                 Save
// //               </Button>
// //               <Button
// //                 style={{ marginLeft: "10px", backgroundColor: "#5bafa9" }}
// //                 htmlType="button"
// //                 type="primary"
// //               >
// //                 Save & Edit
// //               </Button>
// //             </Form.Item>
// //           </Col>
// //         </Row>
// //         <Row gutter={16}>
// //           <Col span={12}>
// //             <Form.Item label="Icons" name="icons">
// //               <Input placeholder="Choose Icon" />
// //             </Form.Item>
// //           </Col>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Status"
// //               name="status"
// //               rules={[{ required: true, message: "Please select a status" }]}
// //             >
// //               <Select placeholder="Select status">
// //                 <SelectOption value="Published">Published</SelectOption>
// //                 <SelectOption value="Unpublished">Unpublished</SelectOption>
// //               </Select>
// //             </Form.Item>
// //           </Col>
// //         </Row>
// //         <Row gutter={16}>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Description"
// //               name="description"
// //               rules={[{ required: true, message: "Description is required" }]}
// //             >
// //               <Input.TextArea placeholder="Enter Description" rows={4} />
// //             </Form.Item>
// //           </Col>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Image"
// //               name="image"
// //               rules={[{ required: true, message: "Image is required" }]}
// //             >
// //               <Upload>
// //                 <Button>Upload Image</Button>
// //               </Upload>
// //             </Form.Item>
// //           </Col>
// //         </Row>
// //         <Row gutter={16}>
// //           <Col span={24}>
// //             <Form.Item>
// //               <Button type="primary" htmlType="submit">
// //                 Save
// //               </Button>
// //               <Button
// //                 type="primary"
// //                 style={{ marginLeft: "10px" }}
// //                 htmlType="button"
// //               >
// //                 Save & Edit
// //               </Button>
// //             </Form.Item>
// //           </Col>
// //         </Row>
// //       </Form>
// //       {/* <div>
// //         <h2>Form Data</h2>
// //         <pre style={{ overflow: "hidden" }}>
// //           {JSON.stringify(formData, null, 2)}
// //         </pre>
// //       </div> */}
// //     </div>
// //   );
// // };

// // export default TestimonialsForm;
