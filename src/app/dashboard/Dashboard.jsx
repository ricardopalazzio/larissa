import React, { PureComponent } from "react";
import { Row, Col } from "reactstrap";
import DonutChart from "../../components/charts/DonutChart";
import ColumnChart from "../../components/charts/ColumnChart";
import InfoChart from "../../components/charts/InfoChart";

class Dashboard extends PureComponent {
  render() {
    return (
        <Row>
        <Col xs={12} sm={12} md={4} lg={4}>
            <InfoChart />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <DonutChart />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <ColumnChart />
          </Col>
        </Row>
    );
  }
}
export default Dashboard;
