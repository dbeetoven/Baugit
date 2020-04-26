import React from 'react';
import { Card } from 'antd';

export const SimpleCard = ({
  children, style = {}, hoverable, loading = false
}) => (
  <Card style={style} hoverable loading={loading}>
    {children}
  </Card>
);
