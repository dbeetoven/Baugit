import React from 'react';
import { Layout, Menu } from 'antd';
import { Topbar } from './Topbar';

const { Header, Footer, Content } = Layout;

const LayoutPage = ({ children, user }) => (
  <Layout style={{ height: '100vh', minHeight: '100vh' }}>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Topbar user={user} />
    </Header>
    <Content>
      <div className="container pt-5 mt-5">
        {children}
      </div>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

export { LayoutPage };
