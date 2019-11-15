import React, { PureComponent } from 'react';
import Chart from "react-apexcharts";
import { Grommet, Box } from "grommet";
import { Row } from 'reactstrap';
import Typography from "@material-ui/core/Typography";

const colorschart = ['#89e427', '#e4e026', '#550a58', '#2ae426'];

class DonutChart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      options: {
        labels: ['Teste', 'Teste'],
        colors: colorschart,
        legend: {
          position: 'bottom',
          fontSize: '14px'
        },
        chart: {
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true
            }
          }
        },
        plotOptions: {
          pie: {
            donut: {
              size: '55%'
            },
            customScale: 0.8 //tamanho do donut
            // size: 100
          },
        },
        tooltip: {
          style: {
            fontSize: '18px'
          },
        },
        dataLabels: {
          style: {
            fontSize: '15px',
            colors: ['#000']
          },
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 80,
              height: 200
            },
          }
        }],
        fill: {
          opacity: 1
        },
      }
    }
  }
  render() {
    return (
      <Grommet>
        <div id="chart" className="grommet__container">
          <Box pad="small" elevation="medium">
            <Row>
              <Typography variant="h6" className="title-chart">Teste </Typography>
            </Row>
            <Typography variant="subtitle1">Teste</Typography>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
            />
          </Box>
        </div>
      </Grommet>
    );
  }
}
export default DonutChart;