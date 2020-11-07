import React from "react";
import { Descriptions, Space } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditTwoTone } from "@ant-design/icons";

const InfoCard = (props) => {
  return (
    <div>
      <Descriptions title={props.title} id={props.id}>
        <Descriptions.Item label={props.titleLabel}>
          {props.placeName}
        </Descriptions.Item>
        <Descriptions.Item label={props.purposeLabel}>
          {props.placeOpt}
        </Descriptions.Item>
        <Descriptions.Item label={props.duration}>
          {props.date}
        </Descriptions.Item>
      </Descriptions>
      <Space>
        <DeleteOutlined
          style={{ color: "#e60000" }}
          onClick={() => props.deleteItem(props.id)}
        />
        <EditTwoTone
          onClick={(e) => props.update(e, props.id)}
          id={props.id}
          name="James"
        />
      </Space>
    </div>
  );
};

export default InfoCard;
