import React, { PureComponent } from 'react';
import { Grid } from "@material-ui/core";
import { Grommet, Box } from "grommet";
import { Row, Col } from 'reactstrap';
import Typography from "@material-ui/core/Typography";

class DonutChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      saldo: 100,
    };
  }
  render() {
   // const { saldo } = this.state;
    return (
      <Grommet>
        <Box pad="small" elevation="medium">
          <Row>
            <Col lg="12">
              <Typography
                variant="h5"
                align="center"
                component="p"
                style={{ color: '#550a58', fontWeight: 'bold' }}
              >
                CARTEIRAL VIRTUAL
              </Typography>
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography
                variant="h6"
                align="center"
                component="p"
                style={{ color: '#550a58', fontWeight: 'bold' }}
              >
                Informações
              </Typography>
            </Col>
          </Row>
          <br />
          <Grid item align="center">
          </Grid>
          <Grid item align="center">
            <Typography variant="h6" style={{ color: '#550a58' }}>R$ {this.state.saldo}</Typography>
            <Typography
              variant="subtitle1"
              style={{ color: '#550a58' }}
              component="p"
            >
              Seu saldo atual
            </Typography>
          </Grid>
          <br />
          <Grid item align="center">
            <Typography variant="h6" style={{ color: '#550a58' }}>$ 4,12</Typography>
            <Typography
              variant="subtitle1"
              style={{ color: '#550a58' }}
              component="p"
            >
              Cotação Dolar
            </Typography>
          </Grid>
          <br />
          <Grid item align="center">
            <Typography variant="h6" style={{ color: '#550a58' }} >$ 9.000,00</Typography>
            <Typography
              variant="subtitle1"
              style={{ color: '#550a58' }}
              component="p"
            >
              Cotação Bitcoin
            </Typography>
          </Grid>
        </Box>
      </Grommet >
    );
  }
}
export default DonutChart;