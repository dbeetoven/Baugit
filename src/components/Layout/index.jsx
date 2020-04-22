import React from 'react';
import { Layout, Menu } from 'antd';
import { Topbar } from './Topbar';

const { Header, Footer, Content } = Layout;

const LayoutPage = ({ children, user }) => (
  <Layout className="layout">
    <Header style={{
      position: 'fixed', top: '0', zIndex: 1, width: '100%'
    }}
    >
      <Topbar user={user} />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ height: 'calc(100vh - 64px)' }}>
        {children}
      </div>
    </Content>
    <Footer style={{
      position: 'sticky', bottom: '0', textAlign: 'center', backgroundColor: '#f3f3f5'
    }}
    >Baugit Design ©{new Date().getFullYear()} Created by @dbeetoven
    </Footer>
  </Layout>
);

export { LayoutPage };
// style={{ padding: '0 50px', marginTop: 64 }}
