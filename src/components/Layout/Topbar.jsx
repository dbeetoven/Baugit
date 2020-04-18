import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import logo from '../../assets/images/logito1.png';

const Topbar = ({ user }) => {
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
        <Link to="/">
          <img src={logo} alt="Baugit" />
        </Link>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="rightMenu">
          <RightMenu user={user} />
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
          <RightMenu user={user} />
        </Drawer>
      </div>
    </nav>
  );
};

export { Topbar };
