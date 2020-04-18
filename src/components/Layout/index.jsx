import React from 'react';
import { Layout, Menu } from 'antd';
import { Topbar } from './Topbar';

const { Header, Footer, Content } = Layout;

const LayoutPage = (props) => (
  <Layout className="layout">
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Topbar />
    </Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
);

export { LayoutPage };
