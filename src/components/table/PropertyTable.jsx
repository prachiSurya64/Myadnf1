// import React from "react";
// import { Table, Space, Button, Popconfirm, Input } from "antd";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// const columns = [
//   {
//     title: "ID",
//     dataIndex: "id",
//   },
//   {
//     title: "IMAGE",
//     dataIndex: "image",
//   },
//   {
//     title: "NAME",
//     dataIndex: "name",
//     render: (text, record) => (
//       <span onClick={() => showModal(record)}>{text}</span>
//     ),
//   },
//   {
//     title: "HOSTNAME",
//     dataIndex: "hostname",
//   },
//   {
//     title: "PROPERTY TYPE",
//     dataIndex: "propertyType",
//   },
//   {
//     title: "CREATED AT",
//     dataIndex: "created",
//   },
//   {
//     title: "MODERATION STATUS",
//     dataIndex: "moderation",
//   },
//   {
//     title: "FLAG",
//     dataIndex: "flag",
//   },
//   {
//     title: "OPERATIONS",
//     dataIndex: "operations",
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
//             style={{ backgroundColor: "#A52A2A", color: "black" }}
//           >
//             Delete
//           </Button>
//         </Popconfirm>
//       </Space>
//     ),
//   },
// ];

// const PropertyTable = ({
//   data,
//   selectedRowKeys,
//   onSelectChange,
//   handleEdit,
//   handleDelete,
//   ...props
// }) => {
//   const rowSelection = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//   };

//   return (
//     <Table
//       rowSelection={rowSelection}
//       columns={columns}
//       dataSource={data}
//       pagination={true}
//       {...props}
//     />
//   );
// };

// export default PropertyTable;
