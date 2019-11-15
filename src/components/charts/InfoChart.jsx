import React, { PureComponent } from 'react';
import { Grid } from "@material-ui/core";
import { Grommet, Box } from "grommet";
import Typography from "@material-ui/core/Typography";

class DonutChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
    };
  }
  render() {
    return (
      <Grommet>
        <Box pad="small" elevation="medium">
          <Typography
            variant="h6"
            align="center"
            component="p"
          >
            Informações
          </Typography>
          <br />
          <Grid item align="center">
          </Grid>
          <Grid item align="center">
            <Typography variant="h6" style={{ color: '#34a98c' }}>R$ 100.000,00</Typography>
            <Typography
              variant="subtitle1"
              style={{ color: '#34a98c' }}
              component="p"
            >
              Saldo atual
            </Typography>
          </Grid>
          <br />
          <Grid item align="center">
            <Typography variant="h6" style={{ color: '#34a98c' }}>$ 4,12</Typography>
            <Typography
              variant="subtitle1"
              style={{ color: '#34a98c' }}
              component="p"
            >
              Cotação Dolar
            </Typography>
          </Grid>
          <br />
          <Grid item align="center">
            <Typography variant="h6" style={{ color: '#34a98c' }} >$ 9.000,00</Typography>
            <Typography
              variant="subtitle1"
              style={{ color: '#34a98c' }}
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