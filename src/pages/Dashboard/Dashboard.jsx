import PropTypes from "prop-types";
// import DemoLines from '../../components/DemoLines'

import {
  ShoppingCartOutlined,
  StopOutlined,
  TeamOutlined,
  BgColorsOutlined,
  HomeFilled,
} from "@ant-design/icons";
import { Card, Space, Statistic,Row,Col } from "antd";
import Typography from "antd/es/typography/Typography";
import DemoLines from "../../components/table/DemoLines";
import DemoColumns from "../../components/table/DemoColumns";
import DemoRose from "../../components/table/DemoRoseChart";
import DemoGauge from "../../components/table/DemoGauge";
import DemoRadar from "../../components/table/DemoArea";

// import DemoArea from "../../components/DemoArea";

function Dashboard() {
  return (
    <>
      <Typography.Title level={4}  style={{color:"#68437E"}}>
        <HomeFilled />
        &nbsp; Dashboard
      </Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          title={"Active Properties"}
          value={12640}
          icon={
            <ShoppingCartOutlined
              style={{
                color: "Indigo",
                backgroundColor: "rgba(175,200,238)",
                borderRadius: 19,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={"Pending Properties"}
          value={640}
          icon={
            <BgColorsOutlined
              style={{
                color: "Indigo",
                backgroundColor: "rgba(175,200,238)",
                borderRadius: 19,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={"Expire Properties"}
          value={10}
          icon={
            <StopOutlined
              style={{
                color: "Indigo",
                backgroundColor: "rgba(175,200,238)",
                borderRadius: 19,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={"Customers "}
          value={6240}
          icon={
            <TeamOutlined
              style={{
                color: "Indigo",
                backgroundColor: "rgba(175,200,238)",
                borderRadius: 19,
                padding: 8,
              }}
            />
          }
        />
      </Space>
     

      <Row gutter={16}>
        <Col span={16}>
        <DemoColumns />
      
        </Col>
        <Col span={8}>
     
        <DemoRose />

        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={14}>
       
        <DemoRadar />    
        </Col>
        <Col span={10}>    
        <DemoGauge />  
        </Col>
      </Row>
      
      <DemoLines />
      {/* <DemoGauge />
      <DemoRadar /> */}

      {/* <DemoArea /> */}
    </>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <>
      <Card
        style={{
          width: "300px",
          color: "blue",
          backgroundColor: "	#5f9ea0",
          alignItems: "end",
          cursor: "pointer",
          transition: "transform 0.8s ease-in-out",
          ":hover": {
            transform: "scale(1.05)",
            backgroundColor: "skyblue",
          },
        }}
      >
        <Space direction="horizontal">
          <div style={{ height: "20", fontSize: 24, padding: 8 }}>{icon}</div>
          <Statistic
            title={title}
            value={value}
            style={{
              display: "flex-1",
              // justifyContent: "space-end",
              justifyContent: "end",
              alignItems: "center",
            }}
          />
        </Space>
      </Card>
    {/* <DemoLines />
    <DemoColumns /> */}
    </>
  );
}
DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
};

export default Dashboard;



