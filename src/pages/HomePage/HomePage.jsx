import React from 'react';
import { DashBoard } from 'components/Dashboard';
import { Row, Col, Divider } from 'antd';

const HomePage = () => (
  <Row
    gutter={{
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32,
    }}
  >
    <Col
      span={{
        xs: 6,
        sm: 10,
        md: 16,
        lg: 24,
      }}
    >
      <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
        Ultimos Post
      </Divider>
      <DashBoard />
    </Col>
    <Col
      span={{
        xs: 2,
        sm: 6,
        md: 8,
        lg: 12,
      }}
    >
      <DashBoard />
    </Col>
  </Row>
);

export default HomePage;
