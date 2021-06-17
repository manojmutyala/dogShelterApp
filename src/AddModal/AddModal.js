import React, { useState, useRef, useEffect } from "react";
import { Modal, Form, Input, InputNumber, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addRecord, editRecord } from "../redux/reducers/dataTable";
const AddModal = (props) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const formRef = useRef();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    if (props.mode === "edit") {
      dispatch(
        editRecord({ ...formRef.current.getFieldsValue(), id: props.id })
      );
    } else {
      dispatch(addRecord(formRef.current.getFieldsValue()));
    }

    formRef.current.resetFields();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      {props.mode !== "edit" && (
        <Button type="primary" onClick={showModal} style={{ float: "right" }}>
          Add
        </Button>
      )}
      {props.mode === "edit" && (
        <Button type="link" onClick={showModal}>
          Edit
        </Button>
      )}
      <Modal
        title={props.mode !== "edit" ? "Add Panel" : "Edit Panel"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ htmlType: "submit" }}
      >
        <Form
          ref={formRef}
          {...layout}
          preserve={false}
          onFinish={onFinish}
          onSubmit={handleSubmit}
        >
          <Form.Item name="breed" label="Breed">
            <Input
              placeholder="Please enter dog breed"
              defaultValue={props.breed}
            />
          </Form.Item>
          <Form.Item
            name="available"
            label="Total Available"
            rules={[{ type: "number" }]}
          >
            <InputNumber
              placeholder="Please enter total avaialbe"
              defaultValue={props.available}
            />
          </Form.Item>
          <Form.Item name="details" label="Details">
            <Input.TextArea
              placeholder="Please enter details"
              defaultValue={props.details}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddModal;
