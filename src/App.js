import React, { Component } from "react";
import Progress from "./Components/Steps";
import Infocard from "./Components/Infocard";
import { Row, Col, Space, Result } from "antd";
import Form from "./Components/Forms";
import Summary from "./Components/Summary";
import uniqid from "uniqid";
import { SmileOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: 0,
      name: "",
      email: "",
      phoneNumber: "",
      schoolName: "",
      studyTitle: "",
      studyDate: [],
      companyName: "",
      positionTitle: "",
      edit: false,
      workDuration: [],

      educationalExperiences: [],
      practicalExperiences: [],
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleStatus = () => {
    this.setState({
      status: this.state.status + 1,
    });
  };

  eduDateChangeHandler = (date, dateString) => {
    this.setState({
      studyDate: [...dateString],
    });
  };

  workDateChangeHandler = (date, dateString) => {
    this.setState({
      workDuration: [...dateString],
    });
  };

  addSchool = () => {
    this.setState({
      educationalExperiences: [
        ...this.state.educationalExperiences,
        {
          schoolName: this.state.schoolName,
          studyTitle: this.state.studyTitle,
          studyDate: this.state.studyDate,
          id: uniqid(),
        },
      ],

      schoolName: "",
      studyTitle: "",
    });
  };

  addJob = () => {
    this.setState({
      practicalExperiences: [
        ...this.state.practicalExperiences,
        {
          companyName: this.state.companyName,
          positionTitle: this.state.positionTitle,
          workDuration: this.state.workDuration,
          id: uniqid(),
        },
      ],

      companyName: "",
      positionTitle: "",
    });
  };

  updateItem = (event, sentId) => {
    const edit = !this.state.edit;
    this.setState({
      edit: edit,
    });

    let arrName;

    if (this.state.status === 1) {
      arrName = this.state.educationalExperiences;
      this.findAndEdit(sentId, arrName);
    } else if (this.state.status === 2) {
      arrName = this.state.practicalExperiences;
      this.findAndEdit(sentId, arrName);
      console.log(sentId);
    }
  };

  findAndEdit = (id, arrName) => {
    const arrIndex = arrName.findIndex((item) => item.id == id);

    const item = {
      ...arrName[arrIndex],
    };

    this.setState({
      updateIndex: arrIndex,
    });

    if (this.state.status === 1) {
      this.setState({
        schoolName: item.schoolName,
        studyTitle: item.studyTitle,
      });
    } else if (this.state.status === 2) {
      this.setState({
        companyName: item.companyName,
        positionTitle: item.positionTitle,
      });
    }
  };

  updateList = () => {
    const index = this.state.updateIndex;
    let arrName;
    let obj;
    if (this.state.status === 1) {
      arrName = this.state.educationalExperiences;
      obj = {
        schoolName: this.state.schoolName,
        studyTitle: this.state.studyTitle,
        studyDate: this.state.studyDate,
      };
      const newArr = [...arrName];
      newArr.splice(index, 1, obj);
      this.setState({
        educationalExperiences: newArr,
      });
    } else if (this.state.status === 2) {
      arrName = this.state.practicalExperiences;
      obj = {
        companyName: this.state.companyName,
        positionTitle: this.state.positionTitle,
        workDuration: this.state.workDuration,
      };
      const newArr = [...arrName];
      newArr.splice(index, 1, obj);
      this.setState({
        practicalExperiences: newArr,
      });
    }

    this.setState({
      edit: !this.state.edit,
      companyName: "",
      positionTitle: "",
      workDuration: [],
      schoolName: "",
      studyTitle: "",
      studyDate: [],
    });
  };

  deleteItem = (id) => {
    let arrName;
    let stateName;
    // console.log(id);

    if (this.state.status === 1) {
      arrName = this.state.educationalExperiences;
      stateName = "educationalExperiences";
      console.log(id);
    } else if (this.state.status === 2) {
      arrName = this.state.practicalExperiences;
      stateName = "practicalExperiences";

      // console.log(id);
    }
    const index = arrName.findIndex((item) => item.id === id);
    const newArr = [...arrName];
    newArr.splice(index, 1);
    console.log(newArr);

    this.setState({
      [stateName]: newArr,
    });
  };

  returnToComponentHandler = (num) => {
    let reverseNumber;
    if (num === 0) {
      reverseNumber = num;
    } else if (num === 1) {
      reverseNumber = num;
    } else if (num === 2) {
      reverseNumber = num;
    }

    this.setState({
      status: reverseNumber,
    });
  };

  render() {
    let infoCard = null;
    // this.returnToComponentHandler(1);

    if (
      this.state.status === 1 &&
      this.state.educationalExperiences.length > 0
    ) {
      infoCard = this.state.educationalExperiences.map((item) => {
        return (
          <Infocard
            titleLabel="School Name"
            purposeLabel="Course"
            duration="Duration"
            title="Educational Background"
            placeName={item.schoolName}
            placeOpt={item.studyTitle}
            date={item.studyDate.join(" - ")}
            id={item.id}
            update={this.updateItem.bind(this)}
            deleteItem={this.deleteItem.bind(this)}
          />
        );
      });
    } else if (
      this.state.status === 2 &&
      this.state.practicalExperiences.length > 0
    ) {
      infoCard = this.state.practicalExperiences.map((item) => {
        return (
          <Infocard
            titleLabel="Company Name"
            purposeLabel="Job role"
            duration="Start And End Date"
            title="Practical Background"
            placeName={item.companyName}
            placeOpt={item.positionTitle}
            date={item.workDuration.join(" - ")}
            id={item.id}
            update={this.updateItem.bind(this)}
            deleteItem={this.deleteItem.bind(this)}
          />
        );
      });
    }
    return (
      <div className="App">
        <Row>
          <Col span="12" offset="6">
            <Space direction="vertical" size="large">
              <Progress status={this.state.status} />
              {infoCard}
              {this.state.status === 3 ? (
                <Summary
                  data={this.state}
                  func={this.returnToComponentHandler.bind(this)}
                />
              ) : null}

              {this.state.status === 4 ? (
                <Result
                  icon={<SmileOutlined />}
                  title="Great, You are done with your CV!S"
                />
              ) : null}

              <Form
                appStatus={this.state.status}
                change={this.handleChange.bind(this)}
                data={this.state}
                updateState={this.handleStatus.bind(this)}
                updateEduDateState={this.eduDateChangeHandler.bind(this)}
                updateWorkDateState={this.workDateChangeHandler.bind(this)}
                addSchool={this.addSchool.bind(this)}
                addJob={this.addJob.bind(this)}
                updateList={this.updateList.bind(this)}
              />
            </Space>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
