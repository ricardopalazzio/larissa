import React, { PureComponent } from "react";
import { Row, Col } from "reactstrap";
import DonutChart from "../../components/charts/DonutChart";
import ColumnChart from "../../components/charts/ColumnChart";
import InfoChart from "../../components/charts/InfoChart";
import LineChart from "../../components/charts/LineChart";

class Dashboard extends PureComponent {
  render() {
    return (
        <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
            <InfoChart />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <DonutChart />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <ColumnChart />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <LineChart />
          </Col>
        </Row>
    );
  }
}
export default Dashboard;
