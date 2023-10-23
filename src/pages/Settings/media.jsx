import { Row, Col, Typography } from "antd";
import { HomeFilled } from "@ant-design/icons";
import SettingMediaForm from "../../components/forms/SettingMediaForm";

const MediaSetting = () => {
  return (
    <div className="media-page-container">
      <Typography.Title level={4}>
        <HomeFilled />
        &nbsp; Dashboard /RealState-Facilities
      </Typography.Title>

      <Row gutter={16}>
        <Col span={8}>
          <div
            className="media-design"
            style={{ backgroundColor: "#FFFAFA", marginTop: "5%" }}
          >
            <h2 style={{ width: "30%", display: "inline-block" }}>Media</h2>
            <p style={{ marginTop: "5%" }}>Settings for the Media...</p>
          </div>
        </Col>
        <Col span={16}>
          <div
            className="media-form"
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "7px",
            }}
          >
            <SettingMediaForm />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MediaSetting;
