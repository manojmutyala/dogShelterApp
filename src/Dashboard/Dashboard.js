import React from "react";
import { Table, Button } from "antd";
import AddModal from "../AddModal";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDetailsPageData } from "../redux/reducers/detailsReducer"

const Dashboard = () => {
  const { tableData } = useSelector((state) => state.dataTable);
  const dispatch = useDispatch();
  const handleDetailspage = (record) => {
    dispatch(setDetailsPageData(record))
  }
  const columns = [
    {
      title: "Breed",
      dataIndex: "breed",
      width: "20%",
    },
    {
      title: "Details",
      dataIndex: "details",
      width: "30%",
    },
    {
      title: "Total available",
      dataIndex: "available",
      width: "20%",
      render: (text, record) => (
        <Button type="link" onClick={() => handleDetailspage(record)}>
          <Link to="/details">{text}</Link>
        </Button>
      ),
    },
    {
      title: "Edit",
      width: "20%",
      render: (flag, record) => (
        <AddModal
          mode="edit"
          breed={record.breed}
          details={record.details}
          available={record.available}
          id={record.id}
        />
      ),
    },
  ];

  return (
    <>
      <AddModal mode="add"/>
      <Table
        // style={{width: "50%"}}
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={tableData}
      />
    </>
  );
};

export default Dashboard;
