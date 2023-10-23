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
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const PageIndex = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (data.length === 0) {
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        id: `${i}`,
        name: `Edward King`,
        template: `default`,
        created: `Date(01/01/2023)`,
        status: `Published`,
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

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "NAME",
      dataIndex: "name",
      render: (text, record) => (
        <span onClick={() => showModal(record)}>{text}</span>
      ),
    },
    {
      title: "TEMPLATE",
      dataIndex: "template",
    },
    {
      title: "CREATED AT",
      dataIndex: "created",
    },
    {
      title: "STATUS",
      dataIndex: "status",
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
            style={{ backgroundColor: "#355E3B", color: "black" }}
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this item?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              danger
              style={{ backgroundColor: "#A52A2A", color: "black" }}
            >
              Delete
            </Button>
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

  return (
    <div>
      <Typography.Title level={4}>
        <b>Dashboard /PageIndex</b>
      </Typography.Title>
      <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
          style={{ backgroundColor: "#4B9CD3", color: "blue" }}
        >
          <ReloadOutlined />
          Reload
        </Button>
        <span style={{ marginLeft: "auto" }}>
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
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
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
            <Input
              placeholder="Template"
              value={editingRecord.template}
              onChange={(e) =>
                setEditingRecord({ ...editingRecord, template: e.target.value })
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
              placeholder="status"
              value={editingRecord.status}
              onChange={(e) =>
                setEditingRecord({ ...editingRecord, status: e.target.value })
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

export default PageIndex;
