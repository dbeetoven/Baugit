/* eslint-disable react/prop-types */
import { React } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export function CardMeta({
  title = 'Meta title',
  avatar,
  className,
  description,
  style,
}) {
  return (
    <Meta
      avatar={avatar}
      className={className}
      description={description}
      style={style}
      title={title}
    />
  );
}
