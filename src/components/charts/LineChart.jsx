import React, { PureComponent } from 'react';
import Chart from "react-apexcharts";
import { Grommet, Box } from "grommet";
import { Row } from 'reactstrap';
import Typography from "@material-ui/core/Typography";

const colorschart = ['#abeb65', '#a565ea', '#e9e765'];

class LineChart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Dolar', 'Bitcoin', 'Euro'],
        colors: colorschart,
        chart: {
          shadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: true,
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: [], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          
          size: 6
        },
        xaxis: {
          categories: ['Jan', 'Fev', 'Mar', 'Abr'],
          title: {
            text: 'Meses'
          }
        },
        yaxis: {
          title: {
            text: 'Temperature'
          },
          min: 5,
          max: 40
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
      series: [
        {
          name: "Dólar",
          data: [28, 29, 33, 36]
        },
        {
          name: "Bitcoin",
          data: [12, 11, 14, 18]
        },
        {
          name: "Euro",
          data: [23, 13, 21, 11]
        }
      ],
    }
  }
  render() {
    return (
      <Grommet>
        <div id="chart" className="grommet__container">
          <Box pad="small" elevation="medium">
            <Row>
              <Typography variant="h6" className="title-chart">Variações</Typography>
            </Row>
            <Typography variant="subtitle1">Comportamento no mercado</Typography>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height="300"
            />
          </Box>
        </div>
      </Grommet>
    );
  }
}
export default LineChart;