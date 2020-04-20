import React from 'react';
import {
  List, Avatar, Button, Skeleton
} from 'antd';
import { PostCard } from '../Cards/PostCard';

const PostList = () => (
  <List className="demo-loadmore-list" itemLayout="horizontal">
    <PostCard />
  </List>
);
export { PostList };
