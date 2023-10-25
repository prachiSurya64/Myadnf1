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


const Property = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
 
const {components} = antdThemeConfig


  if (data.length === 0) {
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        id: `${i}`,
        image: `images`,
        name: `Edward King`,
        hostname: `....`,
        propertyType: `type of property`,
        created: `Date(01/01/2023)`,
        moderation: `Published`,
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
      // Code to export as Excel
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
    },
    {
      title: "IMAGE",
      dataIndex: "image",
    },
    {
      title: "NAME",
      dataIndex: "name",
      render: (text, record) => (
        <span onClick={() => showModal(record)}>{text}</span>
      ),
    },
    {
      title: "HOSTNAME",
      dataIndex: "hostname",
    },
    {
      title: "PROPERTY TYPE",
      dataIndex: "propertyType",
    },
    {
      title: "CREATED AT",
      dataIndex: "created",
    },
    {
      title: "MODERATION STATUS",
      dataIndex: "moderation",
    },
    {
      title: "FLAG",
      dataIndex: "flag",
    },

    {
      title: "OPERATIONS",
      dataIndex: "operations",
      render: (_, record) => (
        <Space>
          <Button
          // type='secondary'
            style={{
              backgroundColor: components.Button.colorSuccess.main,
              color: components.Button.colorPrimary.colorText,
              borderRadius: components.borderRadius,
              border: "none",
              ":hover": {
                backgroundColor: components.Button.colorPrimaryHover.main,
              },
            }}
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          ></Button>
          <Popconfirm
            title="Are you sure you want to delete this item?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
            style={{colorWarning: components.Popconfirm.colorWarning }}
          
          >
            <Button
            // type='primary'
              icon={<DeleteOutlined />}
              style={{
                backgroundColor: components.Button.colorPrimary.main,
                color: components.Button.colorPrimary.colorText,
                borderRadius: components.borderRadius,
                border: "none",
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
        <FilePdfOutlined 
        style={{ color: "#7F1734" }} 
          
        />
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
        &nbsp; Dashboard /RealState-Properties
      </Typography.Title>
      <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
        <Button
          // type="secondary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
          style={{
            backgroundColor: components.Button.colorSuccess.main,
            color: components.Button.colorSuccess.colorText,
            borderRadius: components.borderRadius,
            border:"none"
          }}
        >
          <ReloadOutlined />
          Reload
        </Button>
        <Dropdown overlay={exportMenu}>
          <Button
          // type='secondary'
            style={{
              backgroundColor: components.Button.colorSuccess.main,
              color: components.Button.colorSuccess.colorText,
              borderRadius: components.borderRadius,
              border:"none"
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
                  color:components.colorPrimary.main,
                  
                }}
              >
                Bulk Actions
                <CaretDownOutlined />
              </Button>
            </Dropdown>
            <Button
            // type='secondary'
            
              style={{
                backgroundColor: components.Button.colorSuccess.main,
                color: components.Button.colorSuccess.colorText,
                borderRadius: components.borderRadius,
                border:"none"
              }}
              icon={<FilterOutlined />}
            >
              Filter
            </Button>
          </Space>

          <Input.Search
            style={{
              width: "200px",
              borderColor: components.Input.activeBorderColor,
              borderRadius: components.InputSearch.borderRadius,
            }}
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
          // type='text'
            key="cancel"
            onClick={handleCancel}
            style={{
              backgroundColor: components.Button.colorSuccess.main,
              color: components.Button.colorSuccess.colorText,
              borderRadius: components.borderRadius,
              border:"none"
            }}
          >
            Cancel
          </Button>,
          <Button
          type='primary'
            key="save"
            onClick={handleSave}
            style={{
              backgroundColor: components.Button.colorPrimary.main,
              color: components.Button.colorPrimary.colorText,
              borderRadius: components.borderRadius,
              border:"none"
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
              value={editingRecord.image}
              onChange={(e) =>
                setEditingRecord({ ...editingRecord, image: e.target.value })
              }
            />
            <Input
              value={editingRecord.name}
              onChange={(e) =>
                setEditingRecord({ ...editingRecord, name: e.target.value })
              }
            />
            <Input
              placeholder="HostName"
              value={editingRecord.hostname}
              onChange={(e) =>
                setEditingRecord({ ...editingRecord, hostname: e.target.value })
              }
            />
            <Input
              placeholder="Property-Type"
              value={editingRecord.propertyType}
              onChange={(e) =>
                setEditingRecord({
                  ...editingRecord,
                  propertyType: e.target.value,
                })
              }
            />
            <Input
              placeholder="created"
              value={editingRecord.created}
              onChange={(e) =>
                setEditingRecord({ ...editingRecord, created: e.target.value })
              }
            />
            <Input
              placeholder="moderation"
              value={editingRecord.moderation}
              onChange={(e) =>
                setEditingRecord({
                  ...editingRecord,
                  moderation: e.target.value,
                })
              }
            />
            <Input
              placeholder="flag"
              value={editingRecord.flag}
              onChange={(e) =>
                setEditingRecord({ ...editingRecord, flag: e.target.value })
              }
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Property;







