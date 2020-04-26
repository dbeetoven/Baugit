import React from 'react';
import { Menu } from 'antd';

const MenuItem = ({
  key, title, disabled = false, children, itemClassName = '', handleClick
}) => (
  <>
    <Menu.Item
      className={itemClassName}
      key={key}
      title={title}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </Menu.Item>
  </>
);

export { MenuItem };
