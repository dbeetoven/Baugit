import {
  Button,
  PageHeader,
  Row,
  Tabs,
  Tag,
  Typography,
  Avatar,
  Statistic,
  Descriptions,
} from 'antd';
import React from 'react';
import avatarProf from '../assets/images/proyect.png';
import avatarUser from '../assets/images/prof.png';

const { Paragraph, Title } = Typography;
const { TabPane } = Tabs;

const renderContent = (column = 1) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item>
      Buscador de Profesional ideal para tu proyecto, en Baugit encontraras tu Profesional ideal.
    </Descriptions.Item>
    <Descriptions.Item>
      Publique su proyecto y obtenga propuestas en minutos, Mantenga tu portafolio actualizado.
    </Descriptions.Item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: 'flex',
      width: 'max-content',
      justifyContent: 'flex-end',
    }}
  >
    <Statistic
      title={<Tag color="#108ee9">Proyectos Nuevos</Tag>}
      prefix={<Avatar src={avatarProf} />}
      value="100"
      style={{
        marginRight: 32,
      }}
    />
    <Statistic
      title={<Tag color="#87d068">Profesionales Disponibles</Tag>}
      prefix={<Avatar src={avatarUser} />}
      value="256"
    />
  </div>
);

const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);

export const ContentHeader = () => (
  <div>
    <PageHeader
      backIcon="false"
      className="site-page-header-responsive"
      title={(
        <Title level={3} underline="true" type="secondary">
          Bienvenido a Baugit
        </Title>
      )}
      extra={[
        <Button key="1" type="primary">
          Empieza Hoy
        </Button>,
      ]}
    >
      <Content extra={extraContent}>{renderContent()}</Content>
    </PageHeader>
  </div>
);
