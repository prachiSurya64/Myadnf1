import { Button, Divider, Form, Input, Typography, message } from "antd";
import "../../styles/Login.css";
import {
  GoogleOutlined,
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeFilled,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Login() {
  const [form] = Form.useForm(); // Create a form instance using Form.useForm()

  const login = () => {
    form
      .validateFields()
      .then((values) => {
        // Retrieve the existing data from localStorage
        const existingEmail = localStorage.getItem("email");
        const existingPassword = localStorage.getItem("password");

        // Concatenate new email and password with existing data (if available)
        const updatedEmail = existingEmail
          ? existingEmail + "," + values.myEmail
          : values.myEmail;
        const updatedPassword = existingPassword
          ? existingPassword + "," + values.myPassword
          : values.myPassword;

        // Save the updated data to localStorage
        localStorage.setItem("email", updatedEmail);
        localStorage.setItem("password", updatedPassword);

        message.success("Login Successful");

        // Reset the form fields after successful login
        form.resetFields();
      })
      .catch((error) => {
        console.error("Login failed:", error);
        message.error("Login failed. Please try again.");
      });
  };

  // Function to retrieve and display email and password from localStorage
  const showStoredData = () => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email && password) {
      message.info(`Stored email: ${email}, Stored password: ${password}`);
    } else {
      message.info("No data stored in localStorage.");
    }
  };

  return (
    <>
      <div className="appBg">
        <Form className="loginForm" form={form} onFinish={login}>
          <Typography.Title style={{ margin: "35px" }}>
            Welcome Back
          </Typography.Title>

          <Form.Item
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
            label="Enter-mail"
            name="myEmail"
            className="label"
            style={{ margin: "35px" }}
          >
            <Input placeholder="Enter your email" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                type: "password",
                message: "Enter your password",
              },
            ]}
            label="Password "
            name="myPassword"
            className="label"
            style={{ margin: "35px" }}
          >
            <Input.Password
              placeholder="Enter your password"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          {/* Set the width of the login button */}
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{ width: "80%", alignItems: "center", marginLeft: 35 }}
          >
            Login
          </Button>

          <Divider style={{ borderColor: "black" }}>or Login with</Divider>
          <div className="SocialIcons">
            <GoogleOutlined
              className="icons"
              onClick={login}
              style={{ color: "skyblue" }}
            />
            <TwitterOutlined
              className="icons"
              onClick={login}
              style={{ color: "teal" }}
            />
            <FacebookFilled
              className="icons"
              onClick={login}
              style={{ color: "blue" }}
            />
            <InstagramOutlined
              className="icons"
              onClick={login}
              style={{ color: "purple" }}
            />
            <YoutubeFilled
              className="icons"
              onClick={login}
              style={{ color: "red" }}
            />
          </div>
        </Form>
        <Button
          onClick={showStoredData}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            boxShadow: "0px 6px 6px 4px rgba(0, 0.3, 245, 0.3)",
            borderColor: "green",
          }}
        >
          Show Stored Data
        </Button>
      </div>
    </>
  );
}

export default Login;

// import { Button, Divider, Form, Input, Typography, message } from "antd";
// import "../../styles/Login.css";
// import {
//   GoogleOutlined,
//   FacebookFilled,
//   TwitterOutlined,
//   InstagramOutlined,
//   YoutubeFilled,
//   LockOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { useState } from "react";

// function Login() {
//   const [form] = Form.useForm();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = () => {
//     form
//       .validateFields()
//       .then((values) => {
//         console.log("Form values:", values);
//         setIsLoggedIn(true);
//         message.success("Login Successful");
//         form.resetFields();
//       })
//       .catch((error) => {
//         console.error("Login failed:", error);
//         message.error("Login failed. Please try again.");
//       });
//   };

//   const handleLoginButtonClick = () => {
//     const email = localStorage.getItem("email");
//     const password = localStorage.getItem("password");

//     if (email && password) {
//       message.info(`Stored email: ${email}, Stored password: ${password}`);
//     } else {
//       message.info("No data stored in localStorage.");
//     }
//   };

//   return (
//     <>
//       <div className="appBg">
//         <Form className="loginForm" form={form} onFinish={login}>
//           <Typography.Title style={{ margin: "35px" }}>
//             Welcome Back
//           </Typography.Title>

//           <Form.Item
//             rules={[
//               {
//                 required: true,
//                 type: "email",
//                 message: "Please enter a valid email",
//               },
//             ]}
//             label="Enter-mail"
//             name="myEmail"
//             className="label"
//             style={{ margin: "35px" }}
//           >
//             <Input placeholder="Enter your email" prefix={<UserOutlined />} />
//           </Form.Item>

//           <Form.Item
//             rules={[
//               {
//                 required: true,
//                 type: "password",
//                 message: "Enter your password",
//               },
//             ]}
//             label="Password"
//             name="myPassword"
//             className="label"
//             style={{ margin: "35px" }}
//           >
//             <Input.Password
//               placeholder="Enter your password"
//               prefix={<LockOutlined />}
//             />
//           </Form.Item>

//           {/* Set the width of the login button */}
//           <Button
//             type="primary"
//             htmlType="submit"
//             block
//             style={{ width: "80%", alignItems: "center", marginLeft: 35 }}
//           >
//             Login
//           </Button>

//           <Divider style={{ borderColor: "black" }}>or Login with</Divider>
//           <div className="SocialIcons">
//             <GoogleOutlined className="icons" style={{ color: "skyblue" }} />
//             <TwitterOutlined className="icons" style={{ color: "teal" }} />
//             <FacebookFilled className="icons" style={{ color: "blue" }} />
//             <InstagramOutlined className="icons" style={{ color: "purple" }} />
//             <YoutubeFilled className="icons" style={{ color: "red" }} />
//           </div>
//         </Form>
//       </div>
//       {/* Use the && operator instead of & */}
//       {isLoggedIn && (
//         <Button onClick={handleLoginButtonClick}>Show Stored Data</Button>
//       )}
//     </>
//   );
// }

// export default Login;
