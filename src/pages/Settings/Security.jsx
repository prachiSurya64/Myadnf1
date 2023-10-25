



import { Form, Input, Button, Typography } from 'antd';

const Security= () => {
    const onFinish = (values) => {
      // Handle password change logic here
      console.log('Received values:', values);
    };
  
    const validateNewPassword = (_, value) => {
      // Password validation regex
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  
      if (!value || passwordRegex.test(value)) {
        return Promise.resolve();
      }
  
      return Promise.reject(new Error('Password must have at least 6 characters, one special character, one uppercase letter, and one number.'));
    };
  
    return (

     <>
 <Typography.Title  level={4}>Dashboard/Security</Typography.Title>
 <Form
        name="password-change-form"
        onFinish={onFinish}
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 24 }}
       style={{
        boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",
        boxSizing:"border-box",
        maxWidth: "400px",
        margin: "0 auto",
        border: "1px solid #fff",
        borderRadius: "8px",
        padding: "20px",

       }}
      >
        Old Password :
        <Form.Item
          // label="Old Password"
          name="oldPassword"
          rules={[
            {
              required: true,
              message: 'Please enter your old password!',
            },
          ]}
        >
          <Input.Password size='large'/>
        </Form.Item>
        New Password :
        <Form.Item
          // label="New Password"
          name="newPassword"
          rules={[
            {
              required: true,
              message: 'Please enter your new password!',
            },
            {
              validator: validateNewPassword,
            },
          ]}
        >
          <Input.Password size='large'/>
        </Form.Item>
  
        Confirm Password :
        <Form.Item
          // label="Confirm Password"
          name="confirmPassword"
          dependencies={['newPassword']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your new password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(' password do not match!'));
              },
            }),
          ]}
        >
          <Input.Password size='large'/>
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Button type="primary" htmlType="submit">
            Change Password
          </Button>
        </Form.Item>
      </Form>

     </>
    );
  };
export default Security;



