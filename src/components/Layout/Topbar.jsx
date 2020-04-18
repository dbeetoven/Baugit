import React, { Fragment, useState } from 'react';
import {
  Drawer, Button, Menu, Layout, Avatar, Popover, Badge, List
} from 'antd';
import { Link } from 'react-router-dom';
import {
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
  LoginOutlined,
  CommentOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

import { MenuItem } from 'components/menus/MenuItem';
import RightMenu from './RightMenu';
import LeftMenu from './LeftMenu';

const { SubMenu } = Menu;

const Topbar = () => {
  const [state, setState] = useState({ current: 'mail', visible: false });

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };
  const onClose = () => {
    setState({
      visible: false,
    });
  };

  return (
    <nav className="menuBar">
      <div className="logo">
        <Link to="/">logo</Link>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn" />
        </Button>
        <Drawer
          title={<span>Baugit</span>}
          placement="right"
          closable={false}
          onClose={onClose}
          visible={state.visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};

export { Topbar };
