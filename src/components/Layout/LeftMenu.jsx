import React from 'react';
import { Menu } from 'antd';
import ROUTES from 'constants/routes';
import { Link } from 'react-router-dom';
import {
  CommentOutlined, CrownOutlined, HomeOutlined, UsergroupAddOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

const LeftMenu = () => (
  <Menu mode="horizontal">
    <Menu.Item key="Home">
      <Link to={ROUTES.HOME}>
        <HomeOutlined /> Home
      </Link>
    </Menu.Item>
    <Menu.Item key="Comunity">
      <Link to={ROUTES.COMUNITY}>
        {' '}
        <CommentOutlined /> Foro
      </Link>
    </Menu.Item>
    <SubMenu
      title={(
        <>
          <span>
            <UsergroupAddOutlined />
          </span>
          <span>Comunidad</span>
        </>
      )}
    >
      <MenuItemGroup title="Front End">
        <Menu.Item key="setting:1">Angular</Menu.Item>
        <Menu.Item key="setting:2">React</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Back End">
        <Menu.Item key="setting:3">Java </Menu.Item>
        <Menu.Item key="setting:4">Node</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
    <Menu.Item key="challenge">
      <Link to={ROUTES.CHALLENGE}>
        {' '}
        <CrownOutlined />Desafios
      </Link>
    </Menu.Item>
  </Menu>
);
export default LeftMenu;
