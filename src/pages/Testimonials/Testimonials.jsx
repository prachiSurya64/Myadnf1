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
  ReloadOutlined,
  CaretDownOutlined,
  FilterOutlined,
  PlusSquareOutlined,
  HomeFilled,
} from "@ant-design/icons";
import TestimonialsForm from "../../components/forms/TestimonialsForm";
import TestimonialFilterForm from "../../components/forms/TestimonialFilterForm";

const Testimonials = () => {
  const [isFilterFormVisible, setIsFilterFormVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  if (data.length === 0) {
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        id: `${i}`,
        name: `Admin`,
        image: `photo`,
        created: `created...field`,

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
      title: "IMAGES",
      dataIndex: "image",
      width: 100,
    },
    {
      title: "CREATE AT",
      dataIndex: "created",
      // width: 100,
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
              style={{
                backgroundColor: "#A52A2A",
                color: "black",
              }}
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

  const bulkActionsMenu = (
    <Menu>
      <Menu.Item key="name">Name</Menu.Item>
      <Menu.Item key="hostname">HostName</Menu.Item>
      <Menu.Item key="propertyType">PropertyType</Menu.Item>
      <Menu.Item key="moderation">ModeRation Status</Menu.Item>
      <Menu.Item key="created">CreateAt</Menu.Item>
    </Menu>
  );

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
          &nbsp; Dashboard /Testimonials
        </Typography.Title>
        <div
          style={{ marginBottom: 16, display: "flex", alignItems: "center" }}
        >
          <Button
            type="primary"
            onClick={start}
            disabled={!hasSelected}
            loading={loading}
            style={{ backgroundColor: "#4B9CD3", color: "white" }}
          >
            <ReloadOutlined />
            Reload
          </Button>

          <Button
            style={{ backgroundColor: "#4B9CD3", color: "white" }}
            onClick={showForm}
          >
            <PlusSquareOutlined /> Create
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
                style={{ backgroundColor: "#4B9CD3", color: "white" }}
                icon={<FilterOutlined />}
                onClick={showFilterForm}
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
              &nbsp;
              <Input
                value={editingRecord.image}
                onChange={(e) =>
                  setEditingRecord({
                    ...editingRecord,
                    image: e.target.value,
                  })
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
          title="New Testimonials"
          visible={isFormVisible}
          onCancel={hideForm}
          footer={null}
        >
          <TestimonialsForm onSave={handleFormSubmit} onCancel={hideForm} />
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

export default Testimonials;

// import { useState } from "react";
// import {
//   Button,
//   Table,
//   Space,
//   Modal,
//   Popconfirm,
//   message,
//   Input,
//   Typography,
//   Dropdown,
//   Menu,
// } from "antd";

// import {
//   EditOutlined,
//   DeleteOutlined,
//   ReloadOutlined,
//   CaretDownOutlined,
//   FilterOutlined,
//   PlusSquareOutlined,
//   HomeFilled,
// } from "@ant-design/icons";
// import TestimonialsForm from "../../components/forms/TestimonialsForm";

// const Testimonials = () => {
// const [selectedRowKeys, setSelectedRowKeys] = useState([]);
// const [loading, setLoading] = useState(false);
// const [data, setData] = useState([]);
// const [editingRecord, setEditingRecord] = useState(null);
// const [isModalVisible, setIsModalVisible] = useState(false);
// const [isFormVisible, setIsFormVisible] = useState(false);

// if (data.length === 0) {
//   for (let i = 0; i < 46; i++) {
//     data.push({
//       key: i,
//       id: `${i}`,
//       name: `Admin`,
//       image: `photo`,
//       created: `created...field`,

//       flag: `languages`,
//     });
//   }
// }

// const start = () => {
//   setLoading(true);
//   //  AJAX request
//   setTimeout(() => {
//     setSelectedRowKeys([]);
//     setLoading(false);
//   }, 1000);
// };

// const showModal = (record) => {
//   setEditingRecord(record);
//   setIsModalVisible(true);
// };

// const handleCancel = () => {
//   setIsModalVisible(false);
// };

// const handleEdit = (record) => {
//   showModal(record);
// };

// const handleSave = () => {
//   const newData = data.map((item) =>
//     item.key === editingRecord.key ? editingRecord : item
//   );
//   setData(newData);

//   setIsModalVisible(false);
//   message.success("Changes saved successfully");
// };

// const columns = [
//   {
//     title: "ID",
//     dataIndex: "id",
//     width: 80,
//   },
//   {
//     title: "NAME",
//     dataIndex: "name",
//     width: 200,
//     render: (text, record) => (
//       <span onClick={() => showModal(record)}>{text}</span>
//     ),
//   },
//   {
//     title: "IMAGES",
//     dataIndex: "image",
//     width: 100,
//   },
//   {
//     title: "CREATE AT",
//     dataIndex: "created",
//     // width: 100,
//     align: "right",
//   },

//   {
//     title: "FLAG",
//     dataIndex: "flag",
//     width: 80,
//     align: "right",
//   },
//   {
//     title: "OPERATIONS",
//     dataIndex: "operations",
//     width: 150,
//     align: "right",
//     render: (_, record) => (
//       <Space>
//         <Button
//           style={{ backgroundColor: "#355E3B", color: "black" }}
//           icon={<EditOutlined />}
//           onClick={() => handleEdit(record)}
//         >
//           Edit
//         </Button>
//         <Popconfirm
//           title="Are you sure you want to delete this item?"
//           onConfirm={() => handleDelete(record.key)}
//           okText="Yes"
//           cancelText="No"
//         >
//           <Button
//             icon={<DeleteOutlined />}
//             danger
//             style={{
//               backgroundColor: "#A52A2A",
//               color: "black",
//             }}
//           >
//             Delete
//           </Button>
//         </Popconfirm>
//       </Space>
//     ),
//   },
// ];

// const handleSearch = (value) => {
//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(value.toLowerCase())
//   );
//   setData(filteredData);
// };

// const onSelectChange = (selectedRowKeys) => {
//   setSelectedRowKeys(selectedRowKeys);
// };

// const handleDelete = (key) => {
//   const newData = data.filter((item) => item.key !== key);
//   setData(newData);
//   message.success(`Item with key ${key} has been deleted`);
// };

// const rowSelection = {
//   selectedRowKeys,
//   onChange: onSelectChange,
// };

// const hasSelected = selectedRowKeys.length > 0;

// const bulkActionsMenu = (
//   <Menu>
//     <Menu.Item key="name">Name</Menu.Item>
//     <Menu.Item key="hostname">HostName</Menu.Item>
//     <Menu.Item key="propertyType">PropertyType</Menu.Item>
//     <Menu.Item key="moderation">ModeRation Status</Menu.Item>
//     <Menu.Item key="created">CreateAt</Menu.Item>
//   </Menu>
// );

// const showForm = () => {
//   setIsFormVisible(true);
// };

// const hideForm = () => {
//   setIsFormVisible(false);
// };

// const handleFormSubmit = (formData) => {
//   const newData = [...data, formData];
//   setData(newData);

//   hideForm();
//   message.success("Form data saved successfully");
// };

//   return (
//     <div>
// <div>
//   <Typography.Title level={4}>
//     <HomeFilled />
//     &nbsp; Dashboard /Testimonials
//   </Typography.Title>
//   <div
//     style={{ marginBottom: 16, display: "flex", alignItems: "center" }}
//   >
//     <Button
//       type="primary"
//       onClick={start}
//       disabled={!hasSelected}
//       loading={loading}
//       style={{ backgroundColor: "#4B9CD3", color: "blue" }}
//     >
//       <ReloadOutlined />
//       Reload
//     </Button>

//     <Button
//       style={{ backgroundColor: "#4B9CD3", color: "blue" }}
//       onClick={showForm} // Show the form when the button is clicked
//     >
//       <PlusSquareOutlined /> Create
//     </Button>

//     <span style={{ marginLeft: "auto" }}>
//       <Space>
//         <Dropdown overlay={bulkActionsMenu}>
//           <Button className="hover-button">
//             Bulk Actions
//             <CaretDownOutlined />
//           </Button>
//         </Dropdown>
//               <Button
//                 style={{ backgroundColor: "#4B9CD3", color: "blue" }}
//                 icon={<FilterOutlined />}
//               >
//                 Filter
//               </Button>
//             </Space>

//     <Input.Search
//       style={{ width: "200px" }}
//       placeholder="Search Name"
//       onSearch={handleSearch}
//     />
//   </span>
//   <span style={{ marginLeft: 8 }}>
//     {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
//   </span>
// </div>
// <Table
//   rowSelection={rowSelection}
//   columns={columns}
//   dataSource={data}
//   pagination={true}
// />

//         <Modal
//           title="Edit Record"
//           visible={isModalVisible}
//           onCancel={handleCancel}
//           footer={[
//             <Button key="cancel" onClick={handleCancel}>
//               Cancel
//             </Button>,
//             <Button key="save" type="primary" onClick={handleSave}>
//               Save
//             </Button>,
//           ]}
//         >
//           {editingRecord && (
//             <div>
//               <p>ID: {editingRecord.id}</p>
//               <Input
//                 value={editingRecord.name}
//                 onChange={(e) =>
//                   setEditingRecord({ ...editingRecord, name: e.target.value })
//                 }
//               />
//               <Input
//                 value={editingRecord.image}
//                 onChange={(e) =>
//                   setEditingRecord({ ...editingRecord, image: e.target.value })
//                 }
//               />
//               <Space>
//                 <Input
//                   placeholder="Create At"
//                   value={editingRecord.created}
//                   onChange={(e) =>
//                     setEditingRecord({
//                       ...editingRecord,
//                       created: e.target.value,
//                     })
//                   }
//                 />
//               </Space>
//               &nbsp; &nbsp;
//               <Space>
//                 <Input
//                   placeholder="flag"
//                   value={editingRecord.flag}
//                   onChange={(e) =>
//                     setEditingRecord({ ...editingRecord, flag: e.target.value })
//                   }
//                 />
//               </Space>
//             </div>
//           )}
//         </Modal>
//       </div>

//       {isFormVisible && (
//         <Modal
//           title="Testimonials"
//           visible={isFormVisible}
//           onCancel={hideForm}
//           footer={null}
//         >
//           <TestimonialsForm onSave={handleFormSubmit} onCancel={hideForm} />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Testimonials;

// import { useState } from "react";
// import {
//   Button,
//   Table,
//   Space,
//   Modal,
//   Popconfirm,
//   message,
//   Input,
//   Typography,
//   Dropdown,
// } from "antd";
// import {
//   EditOutlined,
//   DeleteOutlined,
//   ReloadOutlined,
//   PlusOutlined,
//   HomeFilled,
// } from "@ant-design/icons";

// const Testimonials = () => {
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [editingRecord, setEditingRecord] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   if (data.length === 0) {
//     for (let i = 0; i < 46; i++) {
//       data.push({
//         key: i,
//         id: `${i}`,
//         image: `images`,
//         name: `Edward King`,
//         created: `Date(01/01/2023)`,
//         flag: `languages`,
//       });
//     }
//   }

//   const start = () => {
//     setLoading(true);
//     //  AJAX request
//     setTimeout(() => {
//       setSelectedRowKeys([]);
//       setLoading(false);
//     }, 1000);
//   };

//   const showModal = (record) => {
//     setEditingRecord(record);
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const handleEdit = (record) => {
//     showModal(record);
//   };

//   const handleSave = () => {
//     const newData = data.map((item) =>
//       item.key === editingRecord.key ? editingRecord : item
//     );
//     setData(newData);

//     setIsModalVisible(false);
//     message.success("Changes saved successfully");
//   };

//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "id",
//     },
//     {
//       title: "IMAGE",
//       dataIndex: "image",
//     },
//     {
//       title: "NAME",
//       dataIndex: "name",
//       render: (text, record) => (
//         <span onClick={() => showModal(record)}>{text}</span>
//       ),
//     },

//     {
//       title: "CREATED AT",
//       dataIndex: "created",
//     },

//     {
//       title: "FLAG",
//       dataIndex: "flag",
//     },

//     {
//       title: "OPERATIONS",
//       dataIndex: "operations",
//       render: (_, record) => (
//         <Space>
//           <Button
//             style={{ backgroundColor: "#355E3B", color: "black" }}
//             icon={<EditOutlined />}
//             onClick={() => handleEdit(record)}
//           >
//             Edit
//           </Button>
//           <Popconfirm
//             title="Are you sure you want to delete this item?"
//             onConfirm={() => handleDelete(record.key)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button
//               icon={<DeleteOutlined />}
//               danger
//               style={{ backgroundColor: "#A52A2A", color: "black" }}
//             >
//               Delete
//             </Button>
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   const handleSearch = (value) => {
//     const filteredData = data.filter((item) =>
//       item.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setData(filteredData);
//   };

//   const onSelectChange = (selectedRowKeys) => {
//     setSelectedRowKeys(selectedRowKeys);
//   };

//   const handleDelete = (key) => {
//     const newData = data.filter((item) => item.key !== key);
//     setData(newData);
//     message.success(`Item with key ${key} has been deleted`);
//   };

//   const rowSelection = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//   };

//   const hasSelected = selectedRowKeys.length > 0;

//   return (
//     <div>
//       <Typography.Title level={4}>
//         <HomeFilled />
//         &nbsp; Dashboard /Testimonials
//       </Typography.Title>
//       <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
//         <Button
//           type="primary"
//           onClick={start}
//           disabled={!hasSelected}
//           loading={loading}
//           style={{ backgroundColor: "#4B9CD3", color: "blue" }}
//         >
//           <ReloadOutlined />
//           Reload
//         </Button>
//         <Space>
//           <Dropdown>
//             <Button style={{ backgroundColor: "#4B9CD3", color: "blue" }}>
//               <PlusOutlined />
//               Create
//             </Button>
//           </Dropdown>
//         </Space>
//         <span style={{ marginLeft: "auto" }}>
//           <Input.Search
//             style={{ width: "200px" }}
//             placeholder="Search Name"
//             onSearch={handleSearch}
//           />
//         </span>
//         <span style={{ marginLeft: 8 }}>
//           {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
//         </span>
//       </div>
//       <Table
//         rowSelection={rowSelection}
//         columns={columns}
//         dataSource={data}
//         pagination={true}
//       />

//       <Modal
//         title="Edit Record"
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={[
//           <Button key="cancel" onClick={handleCancel}>
//             Cancel
//           </Button>,
//           <Button key="save" type="primary" onClick={handleSave}>
//             Save
//           </Button>,
//         ]}
//       >
//         {editingRecord && (
//           <div>
//             <p>ID: {editingRecord.id}</p>
//             <Input
//               value={editingRecord.image}
//               onChange={(e) =>
//                 setEditingRecord({ ...editingRecord, image: e.target.value })
//               }
//             />
//             <Input
//               value={editingRecord.name}
//               onChange={(e) =>
//                 setEditingRecord({ ...editingRecord, name: e.target.value })
//               }
//             />

//             <Input
//               placeholder="created"
//               value={editingRecord.created}
//               onChange={(e) =>
//                 setEditingRecord({ ...editingRecord, created: e.target.value })
//               }
//             />

//             <Input
//               placeholder="flag"
//               value={editingRecord.flag}
//               onChange={(e) =>
//                 setEditingRecord({ ...editingRecord, flag: e.target.value })
//               }
//             />
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Testimonials;

// Add Bulk Action options...................................................
// import { useState } from "react";
// import {
//   Button,
//   Table,
//   Space,
//   Modal,
//   Popconfirm,
//   message,
//   Input,
//   Typography,
//   Dropdown,
//   Menu
// } from "antd";
// import {
//   EditOutlined,
//   DeleteOutlined,
//   ReloadOutlined,
//   DownloadOutlined,
//   FilterOutlined
// } from "@ant-design/icons";

// const Property = () => {
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [editingRecord, setEditingRecord] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   if (data.length === 0) {
//     for (let i = 0; i < 46; i++) {
//       data.push({
//         key: i,
//         id: `${i}`,
//         image: `images`,
//         name: `Edward King`,
//         hostname: `....`,
//         propertyType: `type of property`,
//         created: `Date(01/01/2023)`,
//         moderation: `Published`,
//         flag: `languages`
//       });
//     }
//   }

//   const start = () => {
//     setLoading(true);
//     //  AJAX request
//     setTimeout(() => {
//       setSelectedRowKeys([]);
//       setLoading(false);
//     }, 1000);
//   };

//   const showModal = (record) => {
//     setEditingRecord(record);
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const handleEdit = (record) => {
//     showModal(record);
//   };

//   const handleSave = () => {
//     const newData = data.map((item) =>
//       item.key === editingRecord.key ? editingRecord : item
//     );
//     setData(newData);

//     setIsModalVisible(false);
//     message.success("Changes saved successfully");
//   };

//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "id"
//     },
//     {
//       title: "IMAGE",
//       dataIndex: "image"
//     },
//     {
//       title: "NAME",
//       dataIndex: "name",
//       render: (text, record) => (
//         <span onClick={() => showModal(record)}>{text}</span>
//       )
//     },
//     {
//       title: "HOSTNAME",
//       dataIndex: "hostname"
//     },
//     {
//       title: "PROPERTY TYPE",
//       dataIndex: "propertyType"
//     },
//     {
//       title: "CREATED AT",
//       dataIndex: "created"
//     },
//     {
//       title: "MODERATION STATUS",
//       dataIndex: "moderation"
//     },
//     {
//       title: "FLAG",
//       dataIndex: "flag"
//     },

//     {
//       title: "OPERATIONS",
//       dataIndex: "operations",
//       render: (_, record) => (
//         <Space>
//           <Button
//             style={{ backgroundColor: "#355E3B", color: "black" }}
//             icon={<EditOutlined />}
//             onClick={() => handleEdit(record)}
//           >
//             Edit
//           </Button>
//           <Popconfirm
//             title="Are you sure you want to delete this item?"
//             onConfirm={() => handleDelete(record.key)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button
//               icon={<DeleteOutlined />}
//               danger
//               style={{ backgroundColor: "#A52A2A", color: "black" }}
//             >
//               Delete
//             </Button>
//           </Popconfirm>
//         </Space>
//       )
//     }
//   ];

//   const handleSearch = (value) => {
//     const filteredData = data.filter((item) =>
//       item.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setData(filteredData);
//   };

//   const onSelectChange = (selectedRowKeys) => {
//     setSelectedRowKeys(selectedRowKeys);
//   };

//   const handleDelete = (key) => {
//     const newData = data.filter((item) => item.key !== key);
//     setData(newData);
//     message.success(`Item with key ${key} has been deleted`);
//   };

//   const rowSelection = {
//     selectedRowKeys,
//     onChange: onSelectChange
//   };

//   const hasSelected = selectedRowKeys.length > 0;

//   const bulkActionsMenu = (
//     <Menu>
//       <Menu.Item key="name">NAME</Menu.Item>
//       <Menu.Item key="reject">Reject</Menu.Item>
//       {/* Add more bulk action options as needed */}
//     </Menu>
//   );
//   return (
//     <div>
//       <Typography.Title level={4}>
//         Dashboard /RealState-Properties
//       </Typography.Title>
//       <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
//         <Button
//           type="primary"
//           onClick={start}
//           disabled={!hasSelected}
//           loading={loading}
//           style={{ backgroundColor: "#4B9CD3", color: "blue" }}
//         >
//           <ReloadOutlined />
//           Reload
//         </Button>

//         <span style={{ marginLeft: "auto" }}>
//           <Input.Search
//             style={{ width: "200px" }}
//             placeholder="Search Name"
//             onSearch={handleSearch}
//           />

//           <Space>
//             <Dropdown overlay={bulkActionsMenu}>
//               <Button>Bulk Actions</Button>
//             </Dropdown>
//             <Button
//               style={{ backgroundColor: "#4B9CD3", color: "blue" }}
//               icon={<FilterOutlined />}
//             >
//               Filter
//             </Button>
//           </Space>
//         </span>
//         <span style={{ marginLeft: 8 }}>
//           {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
//         </span>
//       </div>
//       <Table
//         rowSelection={rowSelection}
//         columns={columns}
//         dataSource={data}
//         pagination={true}
//       />

//       <Modal
//         title="Edit Record"
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={[
//           <Button key="cancel" onClick={handleCancel}>
//             Cancel
//           </Button>,
//           <Button key="save" type="primary" onClick={handleSave}>
//             Save
//           </Button>
//         ]}
//       >
//         {editingRecord && (
//           <div>
//             <p>ID: {editingRecord.id}</p>
//             <Input
//               value={editingRecord.image}
//               onChange={(e) =>
//                 setEditingRecord({ ...editingRecord, image: e.target.value })
//               }
//             />
//             <Input
//               value={editingRecord.name}
//               onChange={(e) =>
//                 setEditingRecord({ ...editingRecord, name: e.target.value })
//               }
//             />
//             <Input
//               placeholder="HostName"
//               value={editingRecord.hostname}
//               onChange={(e) =>
//                 setEditingRecord({ ...editingRecord, hostname: e.target.value })
//               }
//             />
//             <Input
//               placeholder="Property-Type"
//               value={editingRecord.propertyType}
//               onChange={(e) =>
//                 setEditingRecord({
//                   ...editingRecord,
//                   propertyType: e.target.value
//                 })
//               }
//             />
//             <Input
//               placeholder="created"
//               value={editingRecord.created}
//               onChange={(e) =>
//                 setEditingRecord({ ...editingRecord, created: e.target.value })
//               }
//             />
//             <Input
//               placeholder="moderation"
//               value={editingRecord.moderation}
//               onChange={(e) =>
//                 setEditingRecord({
//                   ...editingRecord,
//                   moderation: e.target.value
//                 })
//               }
//             />
//             <Input
//               placeholder="flag"
//               value={editingRecord.flag}
//               onChange={(e) =>
//                 setEditingRecord({ ...editingRecord, flag: e.target.value })
//               }
//             />
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Property;
