import React from 'react';
import { Layout, Menu } from 'antd';
import { Topbar } from './Topbar';

const { Header, Footer, Content } = Layout;

const LayoutPage = ({ children, user }) => (
  <Layout>
    <Header className="header">
      <Topbar user={user} />
    </Header>
    <Content>{children}</Content>
    <Footer
      style={{
        position: 'sticky',
        bottom: '0',
        textAlign: 'center'
      }}
    >
      Baugit Design ©{new Date().getFullYear()} Created by @dbeetoven
    </Footer>
  </Layout>
);

export { LayoutPage };
// style={{ padding: '0 50px', marginTop: 64 }}
