

import  { useState } from 'react';
import { Upload, Input, Button, Form, Space, Row, Col, Card, message, Switch } from 'antd';
import { PlusOutlined } from "@ant-design/icons";

const General = () => {
  // const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Prachi',
        email: 'prachi@example.com',
        country: 'indore',
        address: 'mactosys (502) arien hights',
        city: 'indore',
        zipCode: '452010',
   
  });

  // const handleEdit = () => {
  //   setEditing(!editing);
  // };
  const [fileList, setFileList] = useState([]);

  const [form] = Form.useForm();

    const handleUploadChange = ({ fileList: newFileList }) => setFileList(newFileList);
  
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div
          style={{
            marginTop: 8
          }}
        >
          Upload
        </div>
      </div>
    );

  const handleDelete = () => {
    // Implement delete user logic here
    console.log('User deleted');
  };

  const handleFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  const handleFormSubmit = () => {
    // We can save the form data here, for example, by making an API request.

    // Show a success message to indicate that changes are saved.
    message.success('Successfully saved your data');

    form.resetFields();
  };

  return (
    <div>
      <h2>User Profile</h2>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="User Profile">
            <Space direction="horizontal">
            <Upload
        listType="picture-circle"
        fileList={fileList}
        showUploadList={true}
        onChange={handleUploadChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      
          <Switch size='medium' />
    
              {/* <Button type="primary" onClick={handleEdit}>
                {editing ? "Save" : "Edit"}
              </Button> */}
              <Col span={12}> <Button type="default" onClick={handleDelete}>
                Delete User
              </Button></Col>
             
            
            </Space>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="User Details">
            <Form
              name="user-profile"
              initialValues={formData}
              onValuesChange={handleFormChange}
              onFinish={handleFormSubmit}
              form={form}
            >
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item label="Name" name="name">
                    <Input size="large" placeholder='Enter your name'/>
                  </Form.Item>
                  <Form.Item label="Email" name="email">
                    <Input size="large" placeholder='Email@.com'/>
                  </Form.Item>
                  <Form.Item label="Country" name="country">
                    <Input size="large"  placeholder='your country'/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Address" name="address">
                    <Input size="large"  placeholder='your'/>
                  </Form.Item>
                  <Form.Item label="City" name="city">
                    <Input size="large" placeholder='your city name'/>
                  </Form.Item>
                  <Form.Item label="Zip Code" name="zipCode">
                    <Input size="large" placeholder='452010'/>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save Changes
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default General;
