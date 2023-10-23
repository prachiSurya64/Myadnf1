import { useState } from "react";
import { Modal, Button, Input, Select, DatePicker } from "antd";
import PropTypes from "prop-types";

const { Option } = Select;

const TestimonialFilterForm = ({ visible, onCancel, onFilter }) => {
  const [fields, setFields] = useState([
    { id: 1, fieldName: "Name", isEquals: "equals", value: "" },
  ]);
  const [resetVisible, setResetVisible] = useState(false);

  const handleFieldChange = (id, fieldName) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, fieldName, value: "" } : field
    );
    setFields(updatedFields);
    setResetVisible(true);
  };

  const handleIsEqualsChange = (id, isEquals) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, isEquals } : field
    );
    setFields(updatedFields);
    setResetVisible(true);
  };

  const handleValueChange = (id, value) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFields(updatedFields);
    setResetVisible(true);
  };

  const handleFilter = () => {
    const filterValues = fields.map((field) => ({
      fieldName: field.fieldName,
      isEquals: field.isEquals,
      value: field.value,
    }));
    onFilter(filterValues);
    setResetVisible(true);
  };

  const handleReset = () => {
    setFields([{ id: 1, fieldName: "Name", isEquals: "equals", value: "" }]);
    setResetVisible(false);
    onFilter([]);
  };

  const handleAddFilter = () => {
    const newId = fields.length + 1;
    setFields([
      ...fields,
      { id: newId, fieldName: "Name", isEquals: "equals", value: "" },
    ]);
    setResetVisible(true);
  };

  return (
    <Modal
      title="Filter Testimonials"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="filter" type="primary" onClick={handleFilter}>
          Apply
        </Button>,
      ]}
    >
      {fields.map((field) => (
        <div key={field.id} style={{ marginBottom: 10 }}>
          <Select
            value={field.fieldName}
            onChange={(value) => handleFieldChange(field.id, value)}
            style={{ width: 150, marginRight: 10 }}
          >
            <Option value="SelectField">
              <b>SelectField</b>
            </Option>
            <Option value="Name">Name</Option>
            <Option value="CreateAt">Create At</Option>
          </Select>
          <Select
            value={field.isEquals}
            onChange={(value) => handleIsEqualsChange(field.id, value)}
            style={{ width: 100, marginRight: 10 }}
          >
            <Option value="equals">Is Equals to</Option>
            <Option value="contains">Contains</Option>
            <Option value="not-equals">Greater Then</Option>
            <Option value="not-contains">Less Then</Option>
          </Select>
          {field.fieldName === "CreateAt" ? (
            <DatePicker
              style={{ width: 150, marginRight: 10 }}
              value={field.value}
              onChange={(date) => handleValueChange(field.id, date)}
            />
          ) : (
            <Input
              placeholder="Value"
              value={field.value}
              onChange={(e) => handleValueChange(field.id, e.target.value)}
              style={{ width: 150, marginRight: 10 }}
            />
          )}
        </div>
      ))}
      <Button onClick={handleAddFilter}>Add another filter</Button>
      {resetVisible && (
        <Button onClick={handleReset} style={{ marginLeft: 10 }}>
          Reset
        </Button>
      )}
    </Modal>
  );
};

TestimonialFilterForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default TestimonialFilterForm;
