import React, { PureComponent } from "react";
import { Container, Row, Col } from "reactstrap";
import DonutChart from "../../components/charts/DonutChart";
import ColumnChart from "../../components/charts/ColumnChart";
import InfoChart from "../../components/charts/InfoChart";
import LineChart from "../../components/charts/LineChart";

class Dashboard extends PureComponent {
  render() {
    return (
      <Container className="layout__container">
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <InfoChart />
          </Col>
          <Col xs={12} sm={12} md={9} lg={9}>
            <DonutChart />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <ColumnChart />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <LineChart />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Dashboard;
