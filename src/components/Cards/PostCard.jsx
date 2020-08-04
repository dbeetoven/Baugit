/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Avatar, Space } from 'antd';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { DEFAULT_CONSTANT } from 'constants/constant';
import { CardMeta } from './CardMeta';

const { Meta } = Card;

const PostCard = ({
  title = 'Titulo Post',
  avatarUrl = DEFAULT_CONSTANT.AVATAR_SRC,
  loading = false,
  bordered = false,
  hoverable,
  children,
}) => (
  <Space direction="vertical">
    <Card
      bordered={bordered}
      title={title}
      loading={loading}
      hoverable={hoverable}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      {children}
    </Card>
  </Space>
);

export { PostCard };
