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

import {
  EditOutlined,
  DeleteOutlined,
  // ReloadOutlined,
  CaretDownOutlined,
  FilterOutlined,
  HomeFilled,
  FilePdfOutlined,
  FileExcelOutlined,
  FilePptOutlined,
  CopyOutlined,
  FileJpgOutlined,
} from "@ant-design/icons";

import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import FacilityForm from "../../components/forms/FacilityForm";
import TestimonialFilterForm from "../../components/forms/TestimonialFilterForm";

const DossiersDetails = () => {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isFilterFormVisible, setIsFilterFormVisible] = useState(false);

  if (data.length === 0) {
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        id: `${i}`,
        name: `Admin`,
        created: `created...field`,
        status: `Published`,
        flag: `languages`,
      });
    }
  }
  const handleCopy = () => {
    const tableData = data
      .map(
        (item) =>
          `${item.id}\t${item.name}\t${item.created}\t${item.status}\t${item.flag}`
      )
      .join("\n");
    navigator.clipboard.writeText(tableData);
    message.success("Table data copied to clipboard");
  };
  const handleCSVDownload = () => {
    const csvData = data.map((item) => ({
      ID: item.id,
      Name: item.name,
      Created: item.created,
      Status: item.status,
      Flag: item.flag,
    }));
    return (
      <CSVLink data={csvData} filename={"data.csv"} >
        CSV
      </CSVLink>
    );
  };

  const handlePDFDownload = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [["ID", "Name", "Created", "Status", "Flag"]],
      body: data.map((item) => [
        item.id,
        item.name,
        item.created,
        item.status,
        item.flag,
      ]),
    });
    doc.save("data.pdf");
  };

  const handleExcelDownload = () => {
    const excelData = data.map((item) => [
      item.id,
      item.name,
      item.created,
      item.status,
      item.flag,
    ]);
    const ws = XLSX.utils.aoa_to_sheet([
      ["ID", "Name", "Created", "Status", "Flag"],
      ...excelData,
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };

  const handlePrint = () => {
    window.print();
  };

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
      title: "CREATE AT",
      dataIndex: "created",
      width: 100,
      align: "right",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      width: 80,
      align: "right",
    },
    {
      title: "FLAG",
      dataIndex: "flag",
      width: 80,
      align: "right",
    },
    {
      title: "OPERATIONS",
      dataIndex: "operations",
      width: 150,
      align: "right",
      render: (_, record) => (
        <Space>
          <Button
            style={{ backgroundColor: "#5BAFA9", color: "WHITE",border:"none",borderRadius:"50px" }}
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
              icon={<DeleteOutlined />}
              // danger
              style={{
                backgroundColor: "#68437E",
                color: "WHITE",
                borderRadius:"50%",
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

  const bulkActionsMenu = (
    <Menu>
      <Menu.Item key="name">Name</Menu.Item>
      <Menu.Item key="hostname">HostName</Menu.Item>
      <Menu.Item key="propertyType">PropertyType</Menu.Item>
      <Menu.Item key="moderation">ModeRation Status</Menu.Item>
      <Menu.Item key="created">CreateAt</Menu.Item>
    </Menu>
  );

  // const showForm = () => {
  //   setIsFormVisible(true);
  // };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  const handleFormSubmit = (formData) => {
    const newData = [...data, formData];
    setData(newData);

    hideForm();
    message.success("Form data saved successfully");
  };

  const showFilterForm = () => {
    setIsFilterFormVisible(true);
  };

  const hideFilterForm = () => {
    setIsFilterFormVisible(false);
  };

  const handleFilterFormSubmit = (filterValues) => {
    console.log("Filter values:", filterValues);

    hideFilterForm();
  };

  return (
    <div>
      <div>
        <Typography.Title level={4}>
          <HomeFilled />
          &nbsp; Dashboard/ DossiersDetails
        </Typography.Title>
        <div
          style={{ marginBottom: 16, display: "flex", alignItems: "center" }}
        >
          {/* <Button
            type="primary"
            onClick={start}
            disabled={!hasSelected}
            loading={loading}
            style={{ backgroundColor: "#4B9CD3", color: "blue" }}
          >
            <ReloadOutlined />
            Reload
          </Button>
          &nbsp; */}
          <Button
             style={{ backgroundColor:"#5BAFA9",color:"white",borderRadius:"50rem" }}
            onClick={handleCopy}
          >
            <CopyOutlined /> Copy
          </Button>
          &nbsp;
          <Button style={{ backgroundColor:"#5BAFA9",color:"white" ,borderRadius:"50rem" }}>
            <FileJpgOutlined />
            {handleCSVDownload()}
          </Button>

          &nbsp;
          <Button
            style={{  backgroundColor:"#5BAFA9",color:"white" ,borderRadius:"50rem"  }}
            onClick={handlePDFDownload}
          >
            <FilePdfOutlined /> PDF
          </Button>
      &nbsp;
         
          <Button
            style={{ backgroundColor:"#5BAFA9",color:"white" ,borderRadius:"50rem"  }}
            onClick={handleExcelDownload}
          >
            <FileExcelOutlined /> Excel
          </Button>
      &nbsp;
        
          <Button
            style={{  backgroundColor:"#5BAFA9",color:"white",borderRadius:"50rem"  }}
            onClick={handlePrint}
          >
            <FilePptOutlined /> Print
          </Button>
          <span style={{ marginLeft: "auto" }}>
            <Space>
              <Dropdown overlay={bulkActionsMenu}>
                <Button className="hover-button">
                  Bulk Actions
                  <CaretDownOutlined />
                </Button>
              </Dropdown>
              <Button
                style={{ backgroundColor:"#5BAFA9",color:"white" ,borderRadius:"50rem"}}
                icon={<FilterOutlined />}
                onClick={showFilterForm}
              >
                Filter
              </Button>
            </Space>
            &nbsp;
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
              <Space>
                <Input
                  placeholder="Create At"
                  value={editingRecord.created}
                  onChange={(e) =>
                    setEditingRecord({
                      ...editingRecord,
                      created: e.target.value,
                    })
                  }
                />
              </Space>
              &nbsp; &nbsp;
              <Space>
                <Input
                  placeholder="Status"
                  value={editingRecord.status}
                  onChange={(e) =>
                    setEditingRecord({
                      ...editingRecord,
                      status: e.target.value,
                    })
                  }
                />
              </Space>
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

      {isFormVisible && (
        <Modal
          title="Create Facility"
          visible={isFormVisible}
          onCancel={hideForm}
          footer={null}
        >
          <FacilityForm onSave={handleFormSubmit} onCancel={hideForm} />
        </Modal>
      )}

      <TestimonialFilterForm
        visible={isFilterFormVisible}
        onCancel={hideFilterForm}
        onFilter={handleFilterFormSubmit}
      />
    </div>
  );
};

export default DossiersDetails;