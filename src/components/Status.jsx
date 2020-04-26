import React from 'react';
import {
  Card, Col, Row, Avatar, Typography
} from 'antd';
import CountUp from 'react-countup';

const { Title } = Typography;
const { Meta } = Card;
export const Status = () => (
  <Row gutter={16}>
    <Col xs={24} sm={12} md={6} lg={6}>
      <Card bordered hoverable>
        <Meta
          style={{ textAlign: 'center' }}
          title={<Title level={4}>Ofertas Nuevas</Title>}
          description={<Title level={3}><CountUp end={834} duration={4} /></Title>}
        />
      </Card>
    </Col>
    <Col xs={24} sm={12} md={6} lg={6}>
      <Card bordered hoverable>
        <Meta
          style={{ textAlign: 'center' }}
          title={<Title level={4}>Proyectos Nuevos</Title>}
          description={<Title level={3}><CountUp end={142} duration={4} /></Title>}
        />
      </Card>
    </Col>
    <Col xs={24} sm={12} md={6} lg={6}>
      <Card bordered hoverable>
        <Meta
          style={{ textAlign: 'center' }}
          title={<Title level={4}>Profesionales Activos</Title>}
          description={<Title level={3}><CountUp end={1893} duration={4} /></Title>}
        />
      </Card>
    </Col>
    <Col xs={24} sm={12} md={6} lg={6}>
      <Card bordered hoverable>
        <Meta
          style={{ textAlign: 'center' }}
          title={<Title level={4}>Profesionales Disponibles</Title>}
          description={<Title level={3}><CountUp end={3456} duration={4} /></Title>}
        />
      </Card>
    </Col>
  </Row>
);
