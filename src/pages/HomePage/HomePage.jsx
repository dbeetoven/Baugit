import React from 'react';
import { DashBoard } from 'components/Dashboard';
import { Row, Col, Divider } from 'antd';
import { PostList } from 'components/Lists/PostLists';

const HomePage = () => (
  <Row>
    <Col xs={24} sm={4} md={6} lg={8} xl={10}>
      <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
        Ultimos Post
      </Divider>
      <PostList />
      <PostList />
    </Col>
    <Col xs={24} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col xs={24} sm={4} md={6} lg={8} xl={10}>
      <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
        Recientes
      </Divider>
      <DashBoard />
    </Col>
  </Row>
);

export default HomePage;
