import React, { Fragment } from 'react';
import {
  Menu, Layout, Avatar, Popover, Badge, List
} from 'antd';
import {
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
  LoginOutlined,
  CommentOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

import { MenuItem } from 'components/menus/MenuItem';

const { SubMenu } = Menu;

const Topbar = () => {
  const handleClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div>
      <Menu
        theme="dark"
        key="user"
        mode="horizontal"
        onClick={handleClick}
        className="logo"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="0" className="menu-item-logo">
          {' '}
          <img
            className="ant-menu-item"
            src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
            alt="Baugit"
          />
        </Menu.Item>
        <Menu.Item key="1">
          <HomeOutlined />
          Home
        </Menu.Item>

        <Menu.Item key="3">
          <UsergroupAddOutlined />
          Comunidad
        </Menu.Item>
        <Menu.Item key="2">
          <CommentOutlined />
          Foro
        </Menu.Item>
        {/* <Menu.Item key="4">
          <LoginOutlined />
          Login
        </Menu.Item> */}
        <SubMenu
          key="userLogged"
          title={(
            <>
              <span style={{ color: '#999', marginRight: 4 }}>Bienvenido,</span>
              <span>dbeetoven</span>
              <Avatar
                style={{ marginLeft: 8 }}
                src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
              />
            </>
            )}
        >
          <Menu.Item key="Profile">
            <UserOutlined />
            Perfil
          </Menu.Item>
          <Menu.Item key="SignOut">
            <LogoutOutlined />
            Cerrar Sesión
          </Menu.Item>
        </SubMenu>

      </Menu>
    </div>
  );
};

export { Topbar };
