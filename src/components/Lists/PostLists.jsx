import React from 'react';
import { Col, Row } from 'antd';
import { PostCard } from '../Cards/PostCard';

const PostList = () => (
  <div className="site-card-wrapper">
    <Row gutter={24}>
      <Col span={8}>
        <PostCard key={1} />
      </Col>
      <Col span={8}>
        <PostCard key={2} />
      </Col>
      <Col span={8}>
        <PostCard key={3} />
      </Col>
    </Row>
  </div>
);
export { PostList };
