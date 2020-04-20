import React from 'react';
import { Card, Avatar } from 'antd';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { DEFAULT_CONSTANT } from 'constants/constant';

const { Meta } = Card;

const PostCard = ({ title = 'Titulo Post', avatarUrl = DEFAULT_CONSTANT.AVATAR_SRC }) => (
  <Card
    bordered={false}
    title={title}
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src={avatarUrl} />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);

export { PostCard };