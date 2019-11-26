import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { TextField } from '@material-ui/core';

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
            <Col xs={12} lg={4}>
              <TextField
                id="standard-full-width"
                label="Nome"
                name="nome"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </Col>
            <Col xs={12} lg={3}>
              <TextField
                id="date"
                label="Data de Nasc"
                name="data_nasc"
                type="date"
                margin="normal"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Col>
            <Col xs={12} lg={3}>
              <TextField
                label="CPF"
                name="cpf"
                id="formatted-numberformat-input"
                margin="normal"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Col>
            <Col xs={12} lg={2}>
              <TextField
                label="Telefone"
                name="telefone"
                id="formatted-numberformat-input"
                margin="normal"
                fullWidth
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={5}>
              <TextField
                id="standard-full-width"
                label="Endereço"
                name="endereco"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </Col>
            <Col xs={12} lg={4}>
              <TextField
                id="standard-full-width"
                label="Cidade"
                name="cidade"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </Col>
            <Col xs={12} lg={1}>
              <TextField
                id="standard-full-width"
                label="UF"
                name="uf"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </Col>
            <Col xs={12} lg={2}>
              <TextField
                label="Valor Inicial"
                defaultValue="R$ 100.000,00"
                id="filled-adornment-amount"
                fullWidth
                margin="normal"
                disabled
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12} lg={2}>
              <Button onClick={reset} outline color="danger">Cancelar</Button>
            </Col>
            <Col xs={12} lg={2}>
              <Button type="submit" outline color="success">Salvar</Button>
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
