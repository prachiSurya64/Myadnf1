

import {
    Form,
    Input,
    Button,
    Row,
    Col,
    Upload,
    Select,
    message,
    Radio,
    Modal,
  } from "antd";
  import {
    PlusOutlined,
    DownCircleOutlined,
    InfoCircleFilled,
    MinusOutlined,
    UpOutlined,
    DownOutlined,
  } from "@ant-design/icons";
  import { useState } from "react";
  
  const { Option } = Select;
  
  const SettingMediaForm = () => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const onFinish = (values) => {
      console.log("Form values:", values);
      message.success("Form data saved successfully!");
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
  
    const handleModalConfirm = () => {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setIsModalVisible(false);
  
        alert("Thumbnails generated successfully!");
      }, 3000);
    };
  
    const handleModalCancel = () => {
      setIsModalVisible(false);
    };
  
    const [isGenerating, setIsGenerating] = useState(false);
  
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
                label="Driver"
                name="driver"
                initialValue="localDisk"
                rules={[{ required: true, message: "Driver is required" }]}
              >
                <Select suffixIcon={<DownCircleOutlined />}>
                  <Option value="localDisk">LocalDisk</Option>
                  <Option value="AmazonS3">Amazon S3</Option>
                  <Option value="digitalSpaces">DigitalOcean Spaces</Option>
                  <Option value="wasabi">Wasabi</Option>
                  <Option value="bunnyCDN">BunnyCDN</Option>
                </Select>
              </Form.Item>
  
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
            <Col span={12}>
              <Form.Item
                label="Turn off automatic URL translation into Latin?"
                name="urltranslation"
                initialValue="Yes"
              >
                <Radio.Group>
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No">No</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Enable chunk size upload?"
                name="enableChunkUpload"
                initialValue="Yes"
              >
                <Radio.Group>
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No">No</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Row>
              <p
                style={{
                  backgroundColor: "#d0f5fc",
                  height: "auto",
                  color: "blue",
                }}
              >
                <b style={{ marginLeft: "1" }}>
                  <InfoCircleFilled />
                </b>
                &nbsp;&nbsp; Chunk size upload is used to upload large file size.
              </p>
            </Row>
          </Row>
          <br />
          <Row gutter={16} style={{ backgroundColor: "#f0f8ff " }}>
            <Col span={12}>
              <Form.Item
                label="Chunk size (Bytes)"
                name="chunkbytes"
                rules={[{ required: true, message: "size is required" }]}
              >
                <Input
                  placeholder="Enter Chunk size"
                  addonAfter={
                    <div>
                      <PlusOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            chunkbytes:
                              (form.getFieldValue("chunkbytes") || 0) + 1,
                          })
                        }
                      />
                      <MinusOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            chunkbytes:
                              (form.getFieldValue("chunkbytes") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Chunk max file size (MB)"
                name="chunkmb"
                rules={[{ required: true, message: " size is required" }]}
              >
                <Input
                  placeholder="Enter Chunk max file size"
                  addonAfter={
                    <div>
                      <PlusOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            chunkmb: (form.getFieldValue("chunkmb") || 0) + 1,
                          })
                        }
                      />
                      <MinusOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            chunkmb: (form.getFieldValue("chunkmb") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Enable WaterMark ?"
                name="watermark"
                initialValue="Yes" // Set the initial value to Yes or No
              >
                <Radio.Group>
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No">No</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <h3> Media thumbnails sizes:</h3>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Thumb (Default: 150x150)" name="thumbwidth">
                <Input
                  Width
                  placeholder="Width : "
                  addonAfter={
                    <div>
                      <UpOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbwidth:
                              (form.getFieldValue("thumbwidth") || 0) + 1,
                          })
                        }
                      />
                      <DownOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbwidth:
                              (form.getFieldValue("thumbwidth") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
              <Form.Item label="Large (Default: 1024xauto)" name="largewidth">
                <Input
                  placeholder="Width : "
                  addonAfter={
                    <div>
                      <UpOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbwidth:
                              (form.getFieldValue("thumbwidth") || 0) + 1,
                          })
                        }
                      />
                      <DownOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbwidth:
                              (form.getFieldValue("thumbwidth") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
              <Form.Item
                label="Medium Large (Default: 640xauto)"
                name="mediumlargewidth"
              >
                <Input
                  placeholder="Width : "
                  addonAfter={
                    <div>
                      <UpOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbwidth:
                              (form.getFieldValue("thumbwidth") || 0) + 1,
                          })
                        }
                      />
                      <DownOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbwidth:
                              (form.getFieldValue("thumbwidth") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
              <Form.Item
                label="Property Large  (Default: autox610)"
                name="propertylargewidth"
              >
                <Input
                  placeholder="Width : "
                  addonAfter={
                    <div>
                      <UpOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbwidth:
                              (form.getFieldValue("thumbwidth") || 0) + 1,
                          })
                        }
                      />
                      <DownOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbwidth:
                              (form.getFieldValue("thumbwidth") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
              <Form.Item label="Medium (Default: 400xauto)" name="mediumwidth">
                <Input
                  placeholder="Width : "
                  addonAfter={
                    <div>
                      <UpOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbwidth:
                              (form.getFieldValue("thumbwidth") || 0) + 1,
                          })
                        }
                      />
                      <DownOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbwidth:
                              (form.getFieldValue("thumbwidth") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label=" " name="thumbheight">
                <Input
                  placeholder="Height : "
                  addonAfter={
                    <div>
                      <UpOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbheight:
                              (form.getFieldValue("thumbheight") || 0) + 1,
                          })
                        }
                      />
                      <DownOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbheight:
                              (form.getFieldValue("thumbheight") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
              <Form.Item label=" " name="thumbheight">
                <Input
                  placeholder="Height : "
                  addonAfter={
                    <div>
                      <UpOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbheight:
                              (form.getFieldValue("thumbheight") || 0) + 1,
                          })
                        }
                      />
                      <DownOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbheight:
                              (form.getFieldValue("thumbheight") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
              <Form.Item label=" " name="thumbheight">
                <Input
                  placeholder="Height : "
                  addonAfter={
                    <div>
                      <UpOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbheight:
                              (form.getFieldValue("thumbheight") || 0) + 1,
                          })
                        }
                      />
                      <DownOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbheight:
                              (form.getFieldValue("thumbheight") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
              <Form.Item label=" " name="thumbheight">
                <Input
                  placeholder="Height : "
                  addonAfter={
                    <div>
                      <UpOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbheight:
                              (form.getFieldValue("thumbheight") || 0) + 1,
                          })
                        }
                      />
                      <DownOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbheight:
                              (form.getFieldValue("thumbheight") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
              <Form.Item label=" " name="thumbheight">
                <Input
                  placeholder="Height : "
                  addonAfter={
                    <div>
                      <UpOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbheight:
                              (form.getFieldValue("thumbheight") || 0) + 1,
                          })
                        }
                      />
                      <DownOutlined
                        onClick={() =>
                          form.setFieldsValue({
                            thumbheight:
                              (form.getFieldValue("thumbheight") || 0) - 1,
                          })
                        }
                      />
                    </div>
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <p
              style={{
                backgroundColor: "#d0f5fc",
                height: "auto",
                color: "blue",
              }}
            >
              <b style={{ marginLeft: "1" }}>
                <InfoCircleFilled />
              </b>
              &nbsp;&nbsp;Set width or height to 0 if you just want to crop by
              width or height. Need to click on Generate thumbnails to apply
              changes.
            </p>
          </Row>
          <br />
          <br />
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#68437e",
                  }}
                >
                  Save Setting
                </Button>
  
                <Button
                  style={{
                    marginLeft: "15px",
                    backgroundColor: "#5bafa9",
                  }}
                  htmlType="button"
                  type="primary"
                  onClick={() => setIsModalVisible(true)}
                  disabled={isGenerating}
                >
                  Generate Thumblines
                </Button>
  
                <Modal
                  title="Generate Thumbnails"
                  visible={isModalVisible}
                  onCancel={handleModalCancel}
                  headStyle={{ backgroundColor: "black", color: "#ffffff" }}
                  footer={[
                    <Button
                      key="cancel"
                      onClick={handleModalCancel}
                      disabled={isGenerating}
                    >
                      Cancel
                    </Button>,
                    <Button
                      key="generate"
                      type="primary"
                      onClick={handleModalConfirm}
                      loading={isGenerating}
                    >
                      Generate
                    </Button>,
                  ]}
                >
                  <p>
                    Are you sure you want to re-generate thumbnails for all images
                    ?
                    <br />
                    It will take time so please DO NOT leave this page, wait until
                    it is finished.
                  </p>
                </Modal>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  };
  
  export default SettingMediaForm;
  