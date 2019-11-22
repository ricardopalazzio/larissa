import React, { PureComponent } from 'react';
import Chart from "react-apexcharts";
import { Grommet, Box } from "grommet";
import { Row } from 'reactstrap';
import Typography from "@material-ui/core/Typography";

const colorschart = ['#abeb65', '#a565ea', '#e9e765'];

class ColumnChart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: colorschart,
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
        },
        xaxis: {
          categories: [''],
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val
            }
          }
        }
      },
      series: [{
        name: 'Dólar',
        data: [44]
      }, {
        name: 'Bitcoin',
        data: [76]
      }, {
        name: 'Euro',
        data: [35]
      }],
    }
  }
  render() {
    return (
      <Grommet>
        <div id="chart" className="grommet__container">
          <Box pad="small" elevation="medium">
            <Row>
              <Typography variant="h6" className="title-chart">Seus Investimentos</Typography>
            </Row>
            <Typography variant="subtitle1">Em valor de moeda</Typography>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="325"
            />
          </Box>
        </div>
      </Grommet>
    );
  }
}
export default ColumnChart;