



import { useState } from "react";
import {
  Button,
  Table,
  Space,
  Modal,
  Popconfirm,
  message,
  Input,
  Typography,
  Dropdown,
  Menu,
} from "antd";
import * as XLSX from "xlsx";

import {
  EditOutlined,
  DeleteOutlined,
  ReloadOutlined,
  CaretDownOutlined,
  FilterOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
  DownloadOutlined,
  HomeFilled,
} from "@ant-design/icons";
import antdThemeConfig from "../../components/common/antdThemeConfig";

const Features = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { components } = antdThemeConfig;
  if (data.length === 0) {
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        id: `${i}`,
        name: `Admin`,
        flag: `languages`,
      });
    }
  }

  const start = () => {
    setLoading(true);
    //  AJAX request
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const showModal = (record) => {
    setEditingRecord(record);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = (record) => {
    showModal(record);
  };

  const handleSave = () => {
    const newData = data.map((item) =>
      item.key === editingRecord.key ? editingRecord : item
    );
    setData(newData);

    setIsModalVisible(false);
    message.success("Changes saved successfully");
  };
  const handleExport = (type) => {
    if (type === "csv") {
      let csvData =
        "ID,IMAGE,NAME,HOSTNAME,PROPERTY TYPE,CREATED AT,MODERATION STATUS,FLAG\n";
      data.forEach((item) => {
        csvData += `${item.id},${item.image},${item.name},${item.hostname},${item.propertyType},${item.created},${item.moderation},${item.flag}\n`;
      });

      const blob = new Blob([csvData], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "property_data.csv";
      link.click();
    } else if (type === "excel") {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Property Data");
      const excelBlob = new Blob([
        XLSX.write(workbook, { bookType: "xlsx", type: "blob" }),
      ]);

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(excelBlob);
      link.download = "property_data.xlsx";
      link.click();
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 80,
    },
    {
      title: "NAME",
      dataIndex: "name",
      width: 200,
      render: (text, record) => (
        <span onClick={() => showModal(record)}>{text}</span>
      ),
    },
    {
      title: "",
      dataIndex: "separator",
      width: 20,
      render: () => <div style={{ width: "100%", height: "100%" }} />,
    },
    {
      title: "FLAG",
      dataIndex: "flag",
      width: 80,
    },
    {
      title: "OPERATIONS",
      dataIndex: "operations",
      width: 200,
      render: (_, record) => (
        <Space>
          <Button
            style={{
              backgroundColor: components.Button.colorSuccess.main,
              color: components.Button.colorPrimary.colorText,
              borderRadius: components.borderRadius,
              border:"none"
            }}
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          ></Button>
          <Popconfirm
            title="Are you sure you want to delete this item?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              danger
              style={{
                backgroundColor: components.Button.colorPrimary.main,
                color: components.Button.colorPrimary.colorText,
                borderRadius: components.borderRadius,
                border:"none"
              }}
            ></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const handleSearch = (value) => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
    message.success(`Item with key ${key} has been deleted`);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  const exportMenu = (
    <Menu>
      <Menu.Item key="csv">
        {" "}
        <FilePdfOutlined style={{ color: "#7F1734" }} />
        Export as CSV
      </Menu.Item>
      <Menu.Item key="excel">
        <FileExcelOutlined style={{ color: "green" }} />
        <span onClick={() => handleExport("excel")}>Export as Excel</span>
      </Menu.Item>
    </Menu>
  );

  const bulkActionsMenu = (
    <Menu>
      <Menu.Item key="name">Name</Menu.Item>
      <Menu.Item key="hostname">HostName</Menu.Item>
      <Menu.Item key="propertyType">PropertyType</Menu.Item>
      <Menu.Item key="moderation">ModeRation Status</Menu.Item>
      <Menu.Item key="created">CreateAt</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Typography.Title level={4} style={{ color: "#68437E" }}>
        <HomeFilled />
        &nbsp; Dashboard /RealState-Features
      </Typography.Title>
      <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
          style={{
            backgroundColor: components.Button.colorSuccess.main,
            color: components.Button.colorSuccess.colorText,
            borderRadius: components.borderRadius,
          }}
        >
          <ReloadOutlined />
          Reload
        </Button>
        <Dropdown overlay={exportMenu}>
          <Button
            style={{
              backgroundColor: components.Button.colorSuccess.main,
              color: components.Button.colorSuccess.colorText,
              borderRadius: components.borderRadius,
            }}
          >
            <DownloadOutlined /> Export
          </Button>
        </Dropdown>

        <span style={{ marginLeft: "auto" }}>
          <Space>
            <Dropdown overlay={bulkActionsMenu}>
              <Button
                className="hover-button"
                style={{
                  borderColor: components.Input.activeBorderColor,
                  borderRadius: components.Input.borderRadius,
                }}
              >
                Bulk Actions
                <CaretDownOutlined />
              </Button>
            </Dropdown>
            <Button
              style={{
                backgroundColor: components.Button.colorSuccess.main,
                color: components.Button.colorSuccess.colorText,
                borderRadius: components.borderRadius,
              }}
              icon={<FilterOutlined />}
            >
              Filter
            </Button>
          </Space>

          <Input.Search
            style={{ width: "200px" }}
            placeholder="Search Name"
            onSearch={handleSearch}
          />
        </span>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={true}
      />

      <Modal
        title="Edit Record"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="cancel"
            onClick={handleCancel}
            style={{
              backgroundColor: components.Button.colorSuccess.main,
              color: components.Button.colorSuccess.colorText,
              borderRadius: components.borderRadius,
            }}
          >
            Cancel
          </Button>,
          <Button
            key="save"
            onClick={handleSave}
            style={{
              backgroundColor: components.Button.colorPrimary.main,
              color: components.Button.colorPrimary.colorText,
              borderRadius: components.borderRadius,
            }}
          >
            Save
          </Button>,
        ]}
      >
        {editingRecord && (
          <div>
            <p>ID: {editingRecord.id}</p>

            <Input
              value={editingRecord.name}
              onChange={(e) =>
                setEditingRecord({ ...editingRecord, name: e.target.value })
              }
            />

            <Space>
              <Input
                placeholder="flag"
                value={editingRecord.flag}
                onChange={(e) =>
                  setEditingRecord({ ...editingRecord, flag: e.target.value })
                }
              />
            </Space>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Features;
