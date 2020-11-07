import React from "react";
import { Steps } from "antd";
import "antd/dist/antd.css";

const Progress = (props) => {
  const { Step } = Steps;
  return (
    <div>
      <Steps current={props.status}>
        <Step title="Basic Info" description="Your basic Info" />
        <Step title="Educational" description="Your educational background" />
        <Step title="Practical" description="Your practical background" />
        <Step title="Done" description="View your CV" />
      </Steps>
    </div>
  );
};

export default Progress;
