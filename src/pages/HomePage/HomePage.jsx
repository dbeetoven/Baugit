import React from 'react';
import { DashBoard } from 'components/Dashboard';
import { Row, Col, Divider } from 'antd';
import { PostList } from 'components/Lists/PostLists';
import { SearchBar } from 'components/SearchBar';
import { ContentHeader } from 'components/ContentHeader';
import { Status } from 'components/Status';
import { SimpleCard } from 'components/Cards/SimpleCard';

const HomePage = () => (
  <Row>
    <header>
      <ContentHeader />
    </header>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Status />
    </Col>
    <hr />
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <SimpleCard>
        <SearchBar />
      </SimpleCard>
    </Col>
    <Col xs={24} sm={4} md={6} lg={8} xl={10}>
      <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
        Ultimos Post
      </Divider>

      <PostList />
    </Col>
    <Col xs={24} sm={16} md={12} lg={8} xl={4}>
      <Divider type="vertical" />
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
