/* eslint-disable react/prop-types */
import React from 'react';
import { Alert } from 'antd';

export function AlertMessage({
  message,
  type,
  icon = true,
  banner = true,
  closable = true,
  handleClose,
}) {
  return (
    <Alert
      message={message}
      type={type}
      showIcon={icon}
      banner={banner}
      afterClose={handleClose}
      closable={closable}
    />
  );
}
