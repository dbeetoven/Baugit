import {
  Card, Col, Row, Tabs
} from 'antd';
import React from 'react';


const { TabPane } = Tabs;

const { Meta } = Card;

const DashBoard = (props) => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);

export { DashBoard };
