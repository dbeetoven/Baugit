import React from 'react';
import { Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import ROUTES from 'constants/routes';

const { SubMenu } = Menu;
const RightMenu = ({ user }) => {
  const menuButton = () => {
    if (user) {
      return (
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
            <Link to={ROUTES.PROFILE}>
              <UserOutlined />
              Perfil
            </Link>
          </Menu.Item>
          <Menu.Item key="closeSession">
            <Link to={ROUTES.LOGIN}>
              <LogoutOutlined />
              Cerrar Sesión
            </Link>
          </Menu.Item>
        </SubMenu>
      );
    }
    return (
      <Menu.Item key="login">
        <Link to={ROUTES.LOGIN}>
          <LoginOutlined />
          Iniciar Sesión
        </Link>
      </Menu.Item>
    );
  };

  return <Menu mode="horizontal">{menuButton()}</Menu>;
};
export default RightMenu;
