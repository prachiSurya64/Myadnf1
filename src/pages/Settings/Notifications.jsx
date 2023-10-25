import { Col, Row, Typography,  Switch } from "antd";
import { useState } from "react";
const Notifications = () => {
  const [open, setOpen] = useState(true);
  const onChange = (checked) => {
    setOpen(checked);
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "auto",
        // border: "1px solid black",
        borderRadius: "10px",
        padding: "8px",
        boxShadow:
          " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={8}>

          <Typography.Title level={3}>col-6</Typography.Title>
          <Typography.Title level={4}>col-6</Typography.Title>
         
        </Col>
        <Col className="gutter-row" span={8}>
          <Typography>col-6</Typography>
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <>
            <Switch
              onChange={onChange}
              checked={open}
              size="medium"
              
              // style={{
              //   margin: 16,
              //   backgroundColor:"#5BAFA9"
              // }}
            />
          </>
        </Col>
      </Row>
    </div>
  );
};

export default Notifications;