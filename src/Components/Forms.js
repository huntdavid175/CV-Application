import React from "react";
import { Card, Input, Button, DatePicker } from "antd";
import "antd/dist/antd.css";

const { RangePicker } = DatePicker;

const Form = (props) => {
  const {
    name,
    email,
    phoneNumber,
    schoolName,
    studyTitle,
    studyDate,
    companyName,
    positionTitle,
    workDuration,
    edit,
  } = props.data;
  let form = null;

  const { appStatus } = props;

  const change = (date, dateString) => {
    console.log([...dateString]);
  };

  const basicForm = (
    <div>
      <Card title="Basic Info" bordered={false}>
        <Input
          placeholder="Name"
          name="name"
          onChange={props.change}
          value={name}
        />
        <br />
        <br />
        <Input
          placeholder="Email"
          name="email"
          onChange={props.change}
          onChange={props.change}
          value={email}
        />
        <br />
        <br />
        <Input
          placeholder="Number"
          name="phoneNumber"
          onChange={props.change}
          value={phoneNumber}
        />
        <br />
        <br />
      </Card>
    </div>
  );

  const educationalForm = (
    <div>
      <Card title="Educational Info" bordered={false}>
        <Input
          placeholder="School Name"
          name="schoolName"
          onChange={props.change}
          value={schoolName}
        />
        <br />
        <br />
        <Input
          placeholder="Title of Study"
          name="studyTitle"
          onChange={props.change}
          value={studyTitle}
        />
        <br />
        <br />
        <RangePicker
          name="studyDate"
          onChange={props.updateEduDateState}
          // value={studyDate.join("")}
        />
        <br />
        <br />
        <Button
          type="primary"
          onClick={edit ? props.updateList : props.addSchool}
          // onClick={() => console.log(edit)}
        >
          {edit ? "Update" : "Add School"}
        </Button>
      </Card>
    </div>
  );

  const practicalForm = (
    <div>
      <Card title="Practical Info" bordered={false}>
        <Input
          placeholder="Company Name"
          name="companyName"
          onChange={props.change}
          value={companyName}
        />
        <br />
        <br />
        <Input
          placeholder="Position Title"
          name="positionTitle"
          onChange={props.change}
          value={positionTitle}
        />
        <br />
        <br />
        <RangePicker name="workDuration" onChange={props.updateWorkDateState} />
        <br />
        <br />
        <Button type="primary" onClick={edit ? props.updateList : props.addJob}>
          {edit ? "Update" : "Add Job"}
        </Button>
        {/* <Button type="primary">Next</Button> */}
      </Card>
    </div>
  );

  if (appStatus === 0) {
    form = basicForm;
  } else if (appStatus === 1) {
    form = educationalForm;
  } else if (appStatus === 2) {
    form = practicalForm;
  }

  return (
    <div>
      {form}
      <Button
        type="primary"
        onClick={appStatus <= 3 ? props.updateState : null}
      >
        Next
      </Button>
    </div>
  );
};

export default Form;
