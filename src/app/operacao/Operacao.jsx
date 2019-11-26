import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

class Cadastro extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      usuario: '',
      senha: '',
      data_nasc: '',
      cpf: '',
      end: '',
      cidade: '',
      estado: '',
      cep: '',
      valor: ''
    }
  }
  render() {
    const { handleSubmit, reset } = this.props;
    return (
      <Container className="layout__container">
        <h2>Cadastro</h2><br />
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} lg={2}>
            <legend>Seu saldo</legend>
              <TextField
                label="Valor em real"
                defaultValue="R$ 100.000,00"
                id="filled-adornment-amount"
                fullWidth
                margin="normal"
                disabled
                variant="filled"
              />
            </Col>
          </Row>
          <br />
          <Divider />
          <br />
          <legend>Câmbio Dólar</legend>
          <Row>
            <Col xs={12} lg={5}>
              <TextField
                label="Valor de compra"
                defaultValue="R$"
                id="filled-adornment-amount"
                fullWidth
                margin="normal"
              />
            </Col>
            <Col xs={12} lg={5}>
              <TextField
                label="Valor convertido"
                defaultValue="$"
                id="filled-adornment-amount"
                fullWidth
                margin="normal"
              />
            </Col>
            <Col xs={12} lg={2}>
              <Button type="submit" outline color="success" >Operar</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={5}>
              <TextField
                label="Valor de venda"
                defaultValue="$"
                id="filled-adornment-amount"
                fullWidth
                margin="normal"
              />
            </Col>
            <Col xs={12} lg={5}>
              <TextField
                label="Valor convertido"
                defaultValue="R$"
                id="filled-adornment-amount"
                fullWidth
                margin="normal"
              />
            </Col>
            <br />
            <Col xs={12} lg={2}>
              <Button type="submit" outline color="success">Operar</Button>
            </Col>
          </Row>
          <br />
          <Divider />
          <br />
          <legend>Câmbio Bitcoin</legend>
          <Row>
            <Col xs={12} lg={5}>
              <TextField
                label="Valor de compra"
                defaultValue="$"
                id="filled-adornment-amount"
                fullWidth
                margin="normal"
              />
            </Col>
            <Col xs={12} lg={5}>
              <TextField
                label="Valor convertido"
                defaultValue="₿"
                id="filled-adornment-amount"
                fullWidth
                margin="normal"
              />
            </Col>
            <Col xs={12} lg={2}>
              <Button type="submit" outline color="success">Operar</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={5}>
              <TextField
                label="Valor de venda"
                defaultValue="₿"
                id="filled-adornment-amount"
                fullWidth
                margin="normal"
              />
            </Col>
            <Col xs={12} lg={5}>
              <TextField
                label="Valor convertido"
                defaultValue="$"
                id="filled-adornment-amount"
                fullWidth
                margin="normal"
              />
            </Col>
            <Col xs={12} lg={2}>
              <Button type="submit" outline color="success">Operar</Button>
            </Col>
          </Row>
          <br />
          <Divider />
          <br />
          <Row>
            <Col xs={12} lg={2}>
              <Button onClick={reset} outline color="danger">Cancelar</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
export default reduxForm({
  form: 'cadastro',
})(Cadastro);
