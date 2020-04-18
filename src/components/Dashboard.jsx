import React from 'react';
import {
  AndroidOutlined,
  AppleOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Tabs } from 'antd';

const { TabPane } = Tabs;

const { Meta } = Card;

const DashBoard = () => (
  // <>
  <div className="row pt-5 mt-5">
    <div className="col-4">
      <Card
        style={{ width: 300 }}
        cover={(
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
            )}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    <div className="col-8">
      <Tabs defaultActiveKey="2">
        <TabPane
          tab={(
            <span>
              <AppleOutlined />
              Tab 1
            </span>
              )}
          key="1"
        >
          Tab 1
        </TabPane>
        <TabPane
          tab={(
            <span>
              <AndroidOutlined />
              Tab 2
            </span>
              )}
          key="2"
        >
          Tab 2
        </TabPane>
      </Tabs>
    </div>
  </div>
  // </>
);

export { DashBoard };
