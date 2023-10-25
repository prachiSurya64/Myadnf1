
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
  PlusSquareOutlined,
  HomeFilled,
} from "@ant-design/icons";


import antdThemeConfig from "../../components/common/antdThemeConfig";
import SponsorsAddForm from "../../components/forms/SponsorsAddForm";

const Sponsors = () => {
 
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const {components} = antdThemeConfig

  if (data.length === 0) {
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        id: `${i}`,
        name: `Admin`,
        image: `photo`,
        amount: `₹/$...`,
        color: `filled_colors`,
      });
    }
  }

  // const start = () => {
  //   setLoading(true);
  //   //  AJAX request
  //   setTimeout(() => {
  //     setSelectedRowKeys([]);
  //     setLoading(false);
  //   }, 1000);
  // };

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
      width: 100,
    },
  
    {
      title: "IMAGES",
      dataIndex: "image",
      width: 100,
    },
    {
      title: "NAME",
      dataIndex: "name",
      width: 100,
      align:"center",
      render: (text, record) => (
        <span onClick={() => showModal(record)}>{text}</span>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      width: 100,
      align: "center",
    },
    {
      title: "Color",
      dataIndex: "color",
      width: 100,
      align: "center",
    },

    {
      title: "OPERATIONS",
      dataIndex: "operations",
      width: 100,
      align: "right",
      render: (_, record) => (
        <Space>
          <Button
          // type='secondary'
          style={{
              backgroundColor: components.Button.colorSuccess.main,
              color: components.Button.colorPrimary.colorText,
              borderRadius: components.borderRadius,
              border:"none"
            }}
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
           
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this item?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button
            // type='primary'
              icon={<DeleteOutlined />}
              danger
              style={{
                backgroundColor: components.Button.colorPrimary.main,
                color: components.Button.colorPrimary.colorText,
                borderRadius: components.borderRadius,
                border:"none"
              }}
            >
             
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



  const showForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  const handleFormSubmit = (formData) => {
    const newData = [...data, formData];
    setData(newData);

    hideForm();
    message.success("Form data saved successfully");
  };

  // const showFilterForm = () => {
  //   setIsFilterFormVisible(true);
  // };



  return (
    <div>
      <div>
        <Typography.Title level={4} style={{color:"#68437E"}}>
          <HomeFilled />
          &nbsp; Dashboard /Sponsors
        </Typography.Title>
        <div
          style={{ marginBottom: 16, display: "flex", alignItems: "center" }}
        >


          <Button
            style={{
                backgroundColor: components.Button.colorSuccess.main,
                color: components.Button.colorPrimary.colorText,
                borderRadius: components.borderRadius,
              }}
            onClick={showForm}
          >
            <PlusSquareOutlined /> Add
          </Button>

          <span style={{ marginLeft: "auto" }}>
            <Space>
        
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
            <Button   key="cancel" onClick={handleCancel}
            style={{
              backgroundColor: components.Button.colorSuccess.main,
              color: components.Button.colorPrimary.colorText,
              borderRadius: components.borderRadius,
            }}
            >
              Cancel
            </Button>,
            <Button   key="save" onClick={handleSave}
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
              <Input
                value={editingRecord.image}
                onChange={(e) =>
                  setEditingRecord({ ...editingRecord, image: e.target.value })
                }
              />
              <Space>
                <Input
                  value={editingRecord.amount}
                  onChange={(e) =>
                    setEditingRecord({
                      ...editingRecord,
                      amount: e.target.value,
                    })
                  }
                />
              </Space>
              <Space>
                <Input
                  placeholder="Color"
                  value={editingRecord.color}
                  onChange={(e) =>
                    setEditingRecord({
                      ...editingRecord,
                      color: e.target.value,
                    })
                  }
                />
              </Space>
              &nbsp; &nbsp;
              {/* <Space>
                <Input
                  placeholder="flag"
                  value={editingRecord.flag}
                  onChange={(e) =>
                    setEditingRecord({ ...editingRecord, flag: e.target.value })
                  }
                />
              </Space> */}
            </div>
          )}
        </Modal>
      </div>

      {isFormVisible && (
        <Modal
          title="Sponsors Details"
          visible={isFormVisible}
          onCancel={hideForm}
          footer={null}
        >
          <SponsorsAddForm onSave={handleFormSubmit} onCancel={hideForm} />
        </Modal>
      )}

      
    </div>
  );
};

export default Sponsors;

