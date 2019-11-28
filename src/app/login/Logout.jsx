import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Button } from 'reactstrap';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LocalAtm from '@material-ui/icons/LocalAtm';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function SignIn() {

  return (
    <Container className="layout__container" component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Grid className="layout__login">
          <Avatar>
            <LocalAtm />
          </Avatar>
        </Grid>
        <form noValidate>
          <TextField
             fullWidth
             margin="normal"
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            
          />
          <TextField
            fullWidth
            margin="normal"
            name="senha"
            label="Senha"
            type="senha"
            id="senha"
            autoComplete="current-password"
          />
          <br/>
          <Grid className="button__login">
          <Button type="submit" outline color="success" variant="contained">Entrar</Button>
        </Grid>
        </form>
      </div>
    </Container>
  );
}