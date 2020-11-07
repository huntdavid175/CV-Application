import React from "react";
import { Card, Descriptions } from "antd";
import { EditTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import uniqid from "uniqid";

const Summary = (props) => {
  const {
    name,
    email,
    phoneNumber,
    educationalExperiences,
    practicalExperiences,
  } = props.data;

  return (
    <div>
      <Card
        title="Basic Info"
        extra={
          <div>
            <EditTwoTone onClick={() => props.func(0)} />
          </div>
        }
      >
        <Descriptions>
          <Descriptions.Item label="Full name">{name}</Descriptions.Item>
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
          <Descriptions.Item label="Phone number">
            {phoneNumber}
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card
        title="Educational Background"
        extra={
          <div>
            <EditTwoTone onClick={() => props.func(1)} />
          </div>
        }
      >
        {educationalExperiences.map((item, index) => {
          return (
            <div>
              <Descriptions key={uniqid()} id={index}>
                <Descriptions.Item label="School name">
                  {item.schoolName}
                </Descriptions.Item>
                <Descriptions.Item label="Course title">
                  {item.studyTitle}
                </Descriptions.Item>
                <Descriptions.Item label="Duration">
                  {item.studyDate}
                </Descriptions.Item>
              </Descriptions>
            </div>
          );
        })}
      </Card>

      <Card
        title="Practical Background"
        extra={
          <div>
            <EditTwoTone onClick={() => props.func(2)} />
          </div>
        }
      >
        {practicalExperiences.map((item, index) => {
          return (
            <div>
              <Descriptions key={uniqid()} id={index}>
                <Descriptions.Item label="Company">
                  {item.companyName}
                </Descriptions.Item>
                <Descriptions.Item label="Job role">
                  {item.positionTitle}
                </Descriptions.Item>
                <Descriptions.Item label="Duration">
                  {item.workDuration}
                </Descriptions.Item>
              </Descriptions>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default Summary;
