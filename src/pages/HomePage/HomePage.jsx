import React from 'react';
import { DashBoard } from 'components/Dashboard';
import { Row, Col, Divider } from 'antd';
import { PostList } from 'components/Lists/PostLists';

const HomePage = () => (
  <Row
    gutter={{ xs: 8, sm: 16, md: 24 }}
  >
    <Col
      span={18}
      xs={8}
      sm={12}
      md={18}
    >
      <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
        Ultimos Post
      </Divider>
      <PostList />
    </Col>
    <Col
      span={6}
    >
      <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
        Recientes
      </Divider>
      <DashBoard />
    </Col>
  </Row>
);

export default HomePage;
