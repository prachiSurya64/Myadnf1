
import { useState } from "react";
// import StyledMenu from "../themes/StyledMenu";
import {HappyProvider } from '@ant-design/happy-work-theme'

import {
  DashboardOutlined,
  FolderOpenOutlined,
  FormOutlined,
  GlobalOutlined,
  CalculatorOutlined,
  SolutionOutlined,
  InteractionOutlined,
  LockOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  PictureOutlined,
  SettingOutlined,
  CarryOutOutlined,
  OrderedListOutlined,
  SmileOutlined,
  StarOutlined,
  DollarOutlined,
  LinkedinFilled,
  MailOutlined,
  BellFilled,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

import {
  Layout,
  Typography,
  Badge,
  Drawer,
  List,
  Space,
  Menu,
  Button,
} from "antd";

import { useNavigate } from "react-router-dom";
import RouteComp from "../routes/RouteComp";
import antdThemeConfig from "../components/common/antdThemeConfig";
import styled from "@emotion/styled";

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const HFcomponent = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {components} =antdThemeConfig;

const StyledMenu = styled(Menu)`
  .ant-menu-item {
    color:${components.colorPrimary.main};
    ${'' /* background-color: ${components.Menu.itemActiveBg}; */}
    border-radius: ${components.Menu.borderRadius}px;
    transition: background-color ${components.Menu.motionDurationMid};
  }

  .ant-menu-item:hover {
    background-color: ${components.Menu.itemHoverBg};
    color:${components.colorSuccess.main};
    
  }

  .ant-menu-submenu-title {
    color:${components.colorPrimary.main};
    background-color: ${components.Menu.itemActiveBg};
    border-radius: ${components.Menu.borderRadius}px;

  }

  .ant-menu-submenu-title:hover {
    background-color: ${components.Menu.itemHoverBg};
    color:${components.colorSuccess.main};
  }
 
  .ant-menu-submenu.ant-menu-submenu-open < .ant-menu-submenu-title {
    color:${components.colorPrimary.main};
    background-color: ${components.Menu.itemActiveBg};
    border-radius: ${components.Menu.borderRadius}px;
  }
  .ant-menu-item-active {
    ${'' /* background-color: ${components.Menu.itemSelectedBg} !important;  */}
    color: ${components.Menu.itemSelectedColor} !important; 
  }
`;

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: " fixed",
          width: "100%",
          zIndex: "1",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor:"#68437E"
        }}
      >
      <HappyProvider>
        <Button 
        style={{border:"none"}}
         
          icon={isSidebarOpen ? <MenuUnfoldOutlined  style={{ color: components.colorSuccess.main }}/> : <MenuFoldOutlined  style={{ color: components.colorPrimary.main}}/>}
          onClick={handleToggleSidebar}
        />
        </HappyProvider>
        <Typography.Title style={{ color: "white" }}>
          Dashboard
        </Typography.Title>
        <Space>
          <Badge>
            <LinkedinFilled
              style={{
                fontSize: 20,
                color: "white",
                cursor: "pointer",
              }}
            />
          </Badge>
          <Badge dot>
            <MailOutlined
              style={{ fontSize: 20, color: "white", cursor: "pointer" }}
            />
          </Badge>
          <Badge>
            <BellFilled
              style={{ fontSize: 20, color: "white", cursor: "pointer" }}
            />
          </Badge> 
  
        </Space>
        <Drawer title="Comments/Email" maskColseable>
          <List
            renderItem={(item) => {
              return <List.Item>{item.body}</List.Item>;
            }}
          ></List>
        </Drawer>
        <Drawer title="Notifications" maskColseable>
          <List
            renderItem={(item) => {
              return (
                <List.Item>
                  <Typography.Text strong>{item.title}</Typography.Text>has been
                  ordered !
                </List.Item>
              );
            }}
          ></List>
        </Drawer>
      </Header>
      <Layout>
        <Sider
          width={230}
          className="site-layout-background"
          style={{
            overflow: "auto ",
            height: "calc(100vh - 64px)",
            position: "fixed",
            left: 0,
            top: 60,
            display: !isSidebarOpen ? "block" : "none",
            transition: "width 0.3s ease",
            backgroundColor:"white"
          }}

          // collapsedWidth={0} // Add this line to remove the collapsed width
          // collapsible
          //  collapsed={isSidebarOpen}
          // onCollapse={setIsSidebarOpen}
        >
          <HappyProvider>
          <StyledMenu
            onClick={(item) => {
              navigate(item.key);
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{icon:components.Menu.iconSize}}
          >
            <Menu.Item key="/" icon={<DashboardOutlined />} 
      
          >
              Dashboard
            </Menu.Item>

            <Menu.Item key="pages" icon={<FolderOpenOutlined />}>
              Pages
            </Menu.Item>

            <SubMenu
              theme="dark"
              key="blog"
              icon={<FormOutlined />}
              title="Blog"
            >
              <Menu.Item key="post">Post</Menu.Item>
              <Menu.Item key="categories1">Categories</Menu.Item>
              <Menu.Item key="tags">Tags</Menu.Item>
            </SubMenu>
            <SubMenu
              theme="dark"
              key="real-estate"
              icon={<GlobalOutlined />}
              title="Real Estate"
          
            >
         
            <Menu.Item key="properties">Properties</Menu.Item>
              <Menu.Item key="features">Features</Menu.Item>
              <Menu.Item key="facilities">Facilities</Menu.Item>
              <Menu.Item key="categories">Categories</Menu.Item>
              <Menu.Item key="types">Types</Menu.Item>
              <Menu.Item key="setting">Setting</Menu.Item>
            
           
            </SubMenu>

            <Menu.Item key="testimonials" icon={<CalculatorOutlined />}>
              Testimonials
            </Menu.Item>

            <Menu.Item key="consult" icon={<SolutionOutlined />}>
              Consults
            </Menu.Item>

            <Menu.Item key="account" icon={<LockOutlined />}>
              Accounts
            </Menu.Item>

            <Menu.Item key="sliders" icon={<InteractionOutlined />}>
              Simple sliders
            </Menu.Item>
            <Menu.Item key="contact" icon={<WhatsAppOutlined />}>
              Contact
            </Menu.Item>
            <SubMenu
              theme="dark"
              key="location"
              icon={<EnvironmentOutlined />}
              title="Location"
            >
              <Menu.Item key="location1">Properties</Menu.Item>
              <Menu.Item key="location2">Features</Menu.Item>
              <Menu.Item key="location3">Facilities</Menu.Item>
              <Menu.Item key="location4">Categories</Menu.Item>
              <Menu.Item key="location5">Types</Menu.Item>
              <Menu.Item key="location6">Settings</Menu.Item>
            </SubMenu>
            <Menu.Item key="medias" icon={<PictureOutlined />}>
              Medias
            </Menu.Item>

            <SubMenu
              theme="dark"
              key="settings"
              icon={<SettingOutlined />}
              title=" Settings"
            >
              <Menu.Item key="general">General</Menu.Item>
              <Menu.Item key="email">Email</Menu.Item>
              <Menu.Item key="notification">Notifications</Menu.Item>
              <Menu.Item key="mediasetting">Media</Menu.Item>
              <Menu.Item key="social-link">Social Link</Menu.Item>
              <Menu.Item key="security">Security</Menu.Item>
            </SubMenu>
            <Menu.Item key="applied-flat" icon={<CarryOutOutlined />}>
              Applied Flat
            </Menu.Item>

            <Menu.Item key="dossier-details" icon={<OrderedListOutlined />}>
              Dossier Details
            </Menu.Item>

            <Menu.Item key="admin-ref" icon={<SmileOutlined />}>
              Administration References
            </Menu.Item>

            <Menu.Item key="emp-ref" icon={<StarOutlined />}>
              Employers References
            </Menu.Item>

            <Menu.Item key="sponsors" icon={<DollarOutlined />}>
              Sponsors
            </Menu.Item>
          </StyledMenu>
          </HappyProvider>
        </Sider>

        {/* <Layout style={{ padding: '0 24px 24px' }}> */}
        <Layout
          style={{
            marginLeft: isSidebarOpen ? 50 : 230,
            padding: "0 24px 24px",
            overflow: "hidden",
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,

              marginRight: 30,
              marginTop: 70,
              // minHeight: 280,
            }}
          >
            <RouteComp />
          </Content>

          <Footer
            style={{
              alignItems: "center",
              display: "flex",
              height: "50px",
              justifyContent: "space-evenly",
              backgroundColor: "#c0abcf",
              marginBottom: "0%",
              // position: "sticky",
              // bottom: 0,
              // zIndex: 1,
            }}
          >
            <Typography.Link href="tel:+91">+91 1230985674</Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"}>
              Privacy Policy
            </Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"}>
              Terms&Conditions of Use
            </Typography.Link>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HFcomponent;







// import { useState } from "react";
// import {
//   DashboardOutlined,
//   FolderOpenOutlined,
//   FormOutlined,
//   GlobalOutlined,
//   CalculatorOutlined,
//   SolutionOutlined,
//   InteractionOutlined,
//   LockOutlined,
//   WhatsAppOutlined,
//   EnvironmentOutlined,
//   PictureOutlined,
//   SettingOutlined,
//   CarryOutOutlined,
//   OrderedListOutlined,
//   SmileOutlined,
//   StarOutlined,
//   DollarOutlined,
//   LinkedinFilled,
//   MailOutlined,
//   BellFilled,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
// } from "@ant-design/icons";

// import {
//   Layout,
//   Typography,
//   Badge,
//   Drawer,
//   List,
//   Space,
//   Menu,
//   Button,
// } from "antd";

// import { useNavigate } from "react-router-dom";
// import RouteComp from "../routes/RouteComp";

// const { Header, Sider, Content, Footer } = Layout;
// const { SubMenu } = Menu;

// const HFcomponent = () => {
//   const navigate = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleToggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Header
//         style={{
//           position: " fixed",
//           width: "100%",
//           zIndex: "1",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Button
//           type="primary"
//           icon={isSidebarOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//           onClick={handleToggleSidebar}
//         />
//         <Typography.Title style={{ color: "white" }}>
//           Dashboard
//         </Typography.Title>
//         <Space>
//           <Badge>
//             <LinkedinFilled
//               style={{
//                 fontSize: 20,
//                 color: "blue",
//                 cursor: "pointer",
//               }}
//             />
//           </Badge>
//           <Badge dot>
//             <MailOutlined
//               style={{ fontSize: 20, color: "white", cursor: "pointer" }}
//             />
//           </Badge>
//           <Badge>
//             <BellFilled
//               style={{ fontSize: 20, color: "white", cursor: "pointer" }}
//             />
//           </Badge>
//         </Space>
//         <Drawer title="Comments/Email" maskColseable>
//           <List
//             renderItem={(item) => {
//               return <List.Item>{item.body}</List.Item>;
//             }}
//           ></List>
//         </Drawer>
//         <Drawer title="Notifications" maskColseable>
//           <List
//             renderItem={(item) => {
//               return (
//                 <List.Item>
//                   <Typography.Text strong>{item.title}</Typography.Text>has been
//                   ordered !
//                 </List.Item>
//               );
//             }}
//           ></List>
//         </Drawer>
//       </Header>
//       <Layout>
//         <Sider
//           width={230}
//           className="site-layout-background"
//           style={{
//             overflow: "auto",
//             height: "calc(100vh - 64px)",
//             position: "fixed",
//             left: 0,
//             top: 60,
//             display: !isSidebarOpen ? "block" : "none",
//             transition: "width 0.3s ease",
//           }}

//           // collapsedWidth={0} // Add this line to remove the collapsed width
//           // collapsible
//           //  collapsed={isSidebarOpen}
//           // onCollapse={setIsSidebarOpen}
//         >
//           <Menu
//             onClick={(item) => {
//               navigate(item.key);
//             }}
//             defaultSelectedKeys={["1"]}
//             defaultOpenKeys={["sub1"]}
//             style={{ height: "100%", borderRight: 0, overflowY: "auto" }}
//           >
//             <Menu.Item key="/" icon={<DashboardOutlined />}>
//               Dashboard
//             </Menu.Item>

//             <Menu.Item key="pages" icon={<FolderOpenOutlined />}>
//               Pages
//             </Menu.Item>

//             <SubMenu
//               theme="dark"
//               key="blog"
//               icon={<FormOutlined />}
//               title="Blog"
//             >
//               <Menu.Item key="post">Post</Menu.Item>
//               <Menu.Item key="categories1">Categories</Menu.Item>
//               <Menu.Item key="tags">Tags</Menu.Item>
//             </SubMenu>
//             <SubMenu
//               theme="dark"
//               key="real-estate"
//               icon={<GlobalOutlined />}
//               title="Real Estate"
//             >
//               <Menu.Item key="properties">Properties</Menu.Item>
//               <Menu.Item key="features">Features</Menu.Item>
//               <Menu.Item key="facilities">Facilities</Menu.Item>
//               <Menu.Item key="categories">Categories</Menu.Item>
//               <Menu.Item key="types">Types</Menu.Item>
//               <Menu.Item key="setting">Setting</Menu.Item>
//             </SubMenu>

//             <Menu.Item key="testimonials" icon={<CalculatorOutlined />}>
//               Testimonials
//             </Menu.Item>

//             <Menu.Item key="consult" icon={<SolutionOutlined />}>
//               Consults
//             </Menu.Item>

//             <Menu.Item key="account" icon={<LockOutlined />}>
//               Accounts
//             </Menu.Item>

//             <Menu.Item key="sliders" icon={<InteractionOutlined />}>
//               Simple sliders
//             </Menu.Item>
//             <Menu.Item key="contact" icon={<WhatsAppOutlined />}>
//               Contact
//             </Menu.Item>
//             <SubMenu
//               theme="dark"
//               key="location"
//               icon={<EnvironmentOutlined />}
//               title="Location"
//             >
//               <Menu.Item key="location1">Properties</Menu.Item>
//               <Menu.Item key="location2">Features</Menu.Item>
//               <Menu.Item key="location3">Facilities</Menu.Item>
//               <Menu.Item key="location4">Categories</Menu.Item>
//               <Menu.Item key="location5">Types</Menu.Item>
//               <Menu.Item key="location6">Settings</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="medias" icon={<PictureOutlined />}>
//               Medias
//             </Menu.Item>

//             <SubMenu
//               theme="dark"
//               key="settings"
//               icon={<SettingOutlined />}
//               title=" Settings"
//             >
//               <Menu.Item key="general">General</Menu.Item>
//               <Menu.Item key="email">Email</Menu.Item>
//               <Menu.Item key="languages">Languages</Menu.Item>
//               <Menu.Item key="mediasetting">Media</Menu.Item>
//               <Menu.Item key="social-link">Social Link</Menu.Item>
//               <Menu.Item key="social-login">Social Login</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="applied-flat" icon={<CarryOutOutlined />}>
//               Applied Flat
//             </Menu.Item>

//             <Menu.Item key="dossier-details" icon={<OrderedListOutlined />}>
//               Dossier Details
//             </Menu.Item>

//             <Menu.Item key="admin-ref" icon={<SmileOutlined />}>
//               Administration References
//             </Menu.Item>

//             <Menu.Item key="emp-ref" icon={<StarOutlined />}>
//               Employers References
//             </Menu.Item>

//             <Menu.Item key="sponsors" icon={<DollarOutlined />}>
//               Sponsors
//             </Menu.Item>
//           </Menu>
//         </Sider>

//         {/* <Layout style={{ padding: '0 24px 24px' }}> */}
//         <Layout
//           style={{
//             marginLeft: isSidebarOpen ? 50 : 230,
//             padding: "0 24px 24px",
//             overflow: "hidden",
//           }}
//         >
//           <Content
//             className="site-layout-background"
//             style={{
//               padding: 24,

//               marginRight: 30,
//               marginTop: 70,
//               // minHeight: 280,
//             }}
//           >
//             <RouteComp />
//           </Content>

//           <Footer
//             style={{
//               alignItems: "center",
//               display: "flex",
//               height: "50px",
//               justifyContent: "space-evenly",
//               backgroundColor: "#D3D3D3",
//               marginBottom: "0%",
//               // position: "sticky",
//               // bottom: 0,
//               // zIndex: 1,
//             }}
//           >
//             <Typography.Link href="tel:+91">+91 1230985674</Typography.Link>
//             <Typography.Link href="https://www.google.com" target={"_blank"}>
//               Privacy Policy
//             </Typography.Link>
//             <Typography.Link href="https://www.google.com" target={"_blank"}>
//               Terms&Conditions of Use
//             </Typography.Link>
//           </Footer>
//         </Layout>
//       </Layout>
//     </Layout>
//   );
// };

// export default HFcomponent;

// // import { useState } from "react";
// // import {
// //   DashboardOutlined,
// //   FolderOpenOutlined,
// //   FormOutlined,
// //   GlobalOutlined,
// //   CalculatorOutlined,
// //   SolutionOutlined,
// //   InteractionOutlined,
// //   LockOutlined,
// //   WhatsAppOutlined,
// //   EnvironmentOutlined,
// //   PictureOutlined,
// //   SettingOutlined,
// //   CarryOutOutlined,
// //   OrderedListOutlined,
// //   SmileOutlined,
// //   StarOutlined,
// //   DollarOutlined,
// //   LinkedinFilled,
// //   MailOutlined,
// //   BellFilled,
// //   MenuUnfoldOutlined,
// //   MenuFoldOutlined,
// // } from "@ant-design/icons";

// // import {
// //   Layout,
// //   Typography,
// //   Badge,
// //   Drawer,
// //   List,
// //   Space,
// //   Menu,
// //   Button,
// // } from "antd";

// // import { useNavigate } from "react-router-dom";
// // import RouteComp from "../routes/RouteComp";

// // const { Header, Sider, Content, Footer } = Layout;
// // const { SubMenu } = Menu;

// // const HFcomponent = ({ isLoggedIn }) => {
// //   const navigate = useNavigate();
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const handleToggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   return (
// //     // <Layout>
// //     <Layout style={{ minHeight: "100vh", marginTop: 0 }}>
// //       <Header
// //         style={{
// //           position: " fixed",
// //           width: "100%",
// //           zIndex: "1",
// //           display: "flex",
// //           justifyContent: "space-between",
// //           alignItems: "center",
// //         }}
// //       >
// //         <Button
// //           type="primary"
// //           icon={isSidebarOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
// //           onClick={handleToggleSidebar}
// //         />
// //         <Typography.Title style={{ color: "white" }}>
// //           Dashboard
// //         </Typography.Title>
// //         <Space>
// //           <Badge>
// //             <LinkedinFilled
// //               style={{
// //                 fontSize: 20,
// //                 color: "blue",
// //                 cursor: "pointer",
// //               }}
// //             />
// //           </Badge>
// //           <Badge dot>
// //             {" "}
// //             <MailOutlined
// //               style={{ fontSize: 20, color: "white", cursor: "pointer" }}
// //             />
// //           </Badge>
// //           <Badge>
// //             <BellFilled
// //               style={{ fontSize: 20, color: "white", cursor: "pointer" }}
// //             />
// //           </Badge>
// //         </Space>
// //         <Drawer title="Comments/Email" maskColseable>
// //           <List
// //             renderItem={(item) => {
// //               return <List.Item>{item.body}</List.Item>;
// //             }}
// //           ></List>
// //         </Drawer>
// //         <Drawer title="Notifications" maskColseable>
// //           <List
// //             renderItem={(item) => {
// //               return (
// //                 <List.Item>
// //                   <Typography.Text strong>{item.title}</Typography.Text>has been
// //                   ordered !
// //                 </List.Item>
// //               );
// //             }}
// //           ></List>
// //         </Drawer>
// //       </Header>
// //       <Layout>
// //         <Sider
// //           width={200}
// //           className="site-layout-background"
// //           style={{
// //             overflow: "auto",
// //             height: "calc(100vh - 64px)",
// //             position: "fixed",
// //             left: 0,
// //             // left: isSidebarOpen ? 0 : -200,
// //             // left: isSidebarOpen ? 0 : 0,
// //             top: 60,
// //             display: !isSidebarOpen ? "block" : "none",
// //             transition: "width 0.3s ease",
// //           }}

// //           // collapsedWidth={0} // Add this line to remove the collapsed width
// //           // collapsible
// //           //  collapsed={isSidebarOpen}
// //           // onCollapse={setIsSidebarOpen}
// //         >
// //           <Menu
// //             onClick={(item) => {
// //               // item.key
// //               navigate(item.key);
// //             }}
// //             defaultSelectedKeys={["1"]}
// //             defaultOpenKeys={["sub1"]}
// //             style={{ height: "100%", borderRight: 0, overflowY: "auto" }}
// //           >
// //             <Menu.Item key="/" icon={<DashboardOutlined />}>
// //               Dashboard
// //             </Menu.Item>

// //             <Menu.Item key="pages" icon={<FolderOpenOutlined />}>
// //               Pages
// //             </Menu.Item>
// //             <Menu.Item key="blog" icon={<FormOutlined />}>
// //               Blog
// //             </Menu.Item>
// //             <SubMenu
// //               theme="dark"
// //               key="real-estate"
// //               icon={<GlobalOutlined />}
// //               title="Real Estate"
// //             >
// //               <Menu.Item key="properties">Properties</Menu.Item>
// //               <Menu.Item key="features">Features</Menu.Item>
// //               <Menu.Item key="facilities">Facilities</Menu.Item>
// //               <Menu.Item key="categories">Categories</Menu.Item>
// //               <Menu.Item key="types">Types</Menu.Item>
// //               <Menu.Item key="setting">Setting</Menu.Item>
// //             </SubMenu>

// //             <Menu.Item key="testimonials" icon={<CalculatorOutlined />}>
// //               Testimonials
// //             </Menu.Item>

// //             <Menu.Item key="consult" icon={<SolutionOutlined />}>
// //               Consults
// //             </Menu.Item>

// //             <Menu.Item key="account" icon={<LockOutlined />}>
// //               Accounts
// //             </Menu.Item>

// //             <Menu.Item key="sliders" icon={<InteractionOutlined />}>
// //               Simple sliders
// //             </Menu.Item>
// //             <Menu.Item key="contact" icon={<WhatsAppOutlined />}>
// //               Contact
// //             </Menu.Item>
// //             <SubMenu
// //               theme="dark"
// //               key="location"
// //               icon={<EnvironmentOutlined />}
// //               title="Location"
// //             >
// //               <Menu.Item key="location1">Properties</Menu.Item>
// //               <Menu.Item key="location2">Features</Menu.Item>
// //               <Menu.Item key="location3">Facilities</Menu.Item>
// //               <Menu.Item key="location4">Categories</Menu.Item>
// //               <Menu.Item key="location5">Types</Menu.Item>
// //               <Menu.Item key="location6">Settings</Menu.Item>
// //             </SubMenu>
// //             <Menu.Item key="medias" icon={<PictureOutlined />}>
// //               Medias
// //             </Menu.Item>

// //             <SubMenu
// //               theme="dark"
// //               key="settings"
// //               icon={<SettingOutlined />}
// //               title=" Settings"
// //             >
// //               <Menu.Item key="general">General</Menu.Item>
// //               <Menu.Item key="email">Email</Menu.Item>
// //               <Menu.Item key="languages">Languages</Menu.Item>
// //               <Menu.Item key="mediasetting">Media</Menu.Item>
// //               <Menu.Item key="social-link">Social Link</Menu.Item>
// //               <Menu.Item key="social-login">Social Login</Menu.Item>
// //             </SubMenu>
// //             <Menu.Item key="applied-flat" icon={<CarryOutOutlined />}>
// //               Applied Flat
// //             </Menu.Item>

// //             <Menu.Item key="dossier-details" icon={<OrderedListOutlined />}>
// //               Dossier Details
// //             </Menu.Item>

// //             <Menu.Item key="admin-ref" icon={<SmileOutlined />}>
// //               Administration References
// //             </Menu.Item>

// //             <Menu.Item key="emp-ref" icon={<StarOutlined />}>
// //               Employers References
// //             </Menu.Item>

// //             <Menu.Item key="sponsors" icon={<DollarOutlined />}>
// //               Sponsors
// //             </Menu.Item>
// //           </Menu>
// //         </Sider>

// //         {/* <Layout style={{ padding: '0 24px 24px' }}> */}
// //         <Layout
// //           style={{
// //             marginLeft: 200,
// //             padding: "0 24px 24px",
// //             overflow: "hidden",
// //           }}
// //         >
// //           <Content
// //             className="site-layout-background"
// //             style={{
// //               padding: 24,
// //               margin: 0,
// //               marginRight: 30,
// //               marginTop: 70,
// //               // minHeight: 280,
// //             }}
// //           >
// //             <RouteComp isLoggedIn={isLoggedIn} />
// //           </Content>

// //           <Footer
// //             style={{
// //               alignItems: "center",
// //               display: "flex",
// //               height: "50px",
// //               justifyContent: "space-evenly",
// //               backgroundColor: "#D3D3D3",
// //               marginBottom: "0%",
// //               // position: "sticky",
// //               // bottom: 0,
// //               // zIndex: 1,
// //             }}
// //           >
// //             <Typography.Link href="tel:+91">+91 1230985674</Typography.Link>
// //             <Typography.Link href="https://www.google.com" target={"_blank"}>
// //               Privacy Policy
// //             </Typography.Link>
// //             <Typography.Link href="https://www.google.com" target={"_blank"}>
// //               Terms&Conditions of Use
// //             </Typography.Link>
// //           </Footer>
// //         </Layout>
// //       </Layout>
// //     </Layout>
// //   );
// // };

// // export default HFcomponent;
