import { Table } from "antd";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdminUsers } from "../../app/actions/user/userAction";



// const data = [
//   {
//     _id: "65d38b281603a4907774f532",
//     email: "Vishalsingh5t5t@gmail.com",
//     name: "gf",
//     role: "user",
//     createAt: "2024-02-19T17:08:52.526Z",
//   },
//   {
//     _id: "65d38b281603a4907774f533",
//     email: "john.doe@example.com",
//     name: "John Doe",
//     role: "admin",
//     createAt: "2024-02-19T17:15:00.123Z",
//   },
//   {
//     _id: "65d38b281603a4907774f534",
//     email: "alice.smith@example.com",
//     name: "Alice Smith",
//     role: "user",
//     createAt: "2024-02-19T17:22:30.987Z",
//   },
//   {
//     _id: "65d38b281603a4907774f535",
//     email: "bob.jones@example.com",
//     name: "Bob Jones",
//     role: "user",
//     createAt: "2024-02-19T17:30:45.654Z",
//   },
//   {
//     _id: "65d38b281603a4907774f536",
//     email: "emma.white@example.com",
//     name: "Emma White",
//     role: "admin",
//     createAt: "2024-02-19T17:38:12.789Z",
//   },
//   {
//     _id: "65d38b281603a4907774f537",
//     email: "david.brown@example.com",
//     name: "David Brown",
//     role: "user",
//     createAt: "2024-02-19T17:45:34.567Z",
//   },
//   {
//     _id: "65d38b281603a4907774f538",
//     email: "lisa.green@example.com",
//     name: "Lisa Green",
//     role: "admin",
//     createAt: "2024-02-19T17:52:11.432Z",
//   },
//   {
//     _id: "65d38b281603a4907774f539",
//     email: "michael.gray@example.com",
//     name: "Michael Gray",
//     role: "user",
//     createAt: "2024-02-19T18:00:22.345Z",
//   },
//   {
//     _id: "65d38b281603a4907774f540",
//     email: "susan.taylor@example.com",
//     name: "Susan Taylor",
//     role: "user",
//     createAt: "2024-02-19T18:08:33.456Z",
//   },
//   {
//     _id: "65d38b281603a4907774f541",
//     email: "peter.jackson@example.com",
//     name: "Peter Jackson",
//     role: "admin",
//     createAt: "2024-02-19T18:16:44.567Z",
//   },
//   {
//     _id: "65d38b281603a4907774f542",
//     email: "olivia.smith@example.com",
//     name: "Olivia Smith",
//     role: "user",
//     createAt: "2024-02-19T18:24:55.678Z",
//   },
//   {
//     _id: "65d38b281603a4907774f543",
//     email: "james.white@example.com",
//     name: "James White",
//     role: "user",
//     createAt: "2024-02-19T18:33:06.789Z",
//   },
//   {
//     _id: "65d38b281603a4907774f544",
//     email: "emily.jones@example.com",
//     name: "Emily Jones",
//     role: "admin",
//     createAt: "2024-02-19T18:41:17.890Z",
//   },
//   {
//     _id: "65d38b281603a4907774f545",
//     email: "ryan.brown@example.com",
//     name: "Ryan Brown",
//     role: "user",
//     createAt: "2024-02-19T18:49:28.901Z",
//   },
//   // Add more user objects as needed
// ];
const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdminUsers());
  }, [dispatch]);

  function formatDateString(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  }
  const columns = [
    {
      title: "_Id",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "role",
      dataIndex: "role",
    },
  
    {
      title: "CreateAt",
      dataIndex: "createAt",
      render: (createAt) => formatDateString(createAt),
      sorter: (a, b) => new Date(a.createAt) - new Date(b.createAt),
      sorted: true,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a>Delete</a>,
    },
  ];
  const { users, loading } = useSelector((state) => state.user);
  return (
    <Table
    loading={loading}
      columns={columns}
      dataSource={users}
      scroll={{
        x: 1300,
      }}
      style={{ marginRight: "auto", marginLeft: "auto" }}
      rowKey={(record) => record._id}
    />
  );
};
export default Users;
