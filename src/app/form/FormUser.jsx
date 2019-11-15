import React, { PureComponent } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Divider from '@material-ui/core/Divider';

class FormUser extends PureComponent {
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

    this.state = this.state;
  }
  submitForm = () => {
    this.props.escutadorDeSubmit(this.state);
    this.setState(this.stateInicial);

  }
  render() {
    const { nome, usuario, senha, data_nasc, cpf, end, cidade, estado, cep, valor } = this.state;
    return (
      <div>
        <h2>Cadastro</h2><br />
        <Form>
          <Row>
            <Col xs={12} lg={4}>
              <FormGroup>
                <Label for="nome">Nome</Label>
                <Input type="text" name="nome" id="nome" placeholder="Nome completo" value={nome} />
              </FormGroup>
            </Col>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="usuario">Usuário</Label>
                <Input type="text" name="usuario" id="usuario" value={usuario} />
              </FormGroup>
            </Col>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="senha">Senha</Label>
                <Input type="text" name="senha" id="senha" value={senha} />
              </FormGroup>
            </Col>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="exampleDate">Data de Nascimento</Label>
                <Input
                  type="date"
                  name="data_nasc"
                  id="data_nasc"
                  placeholder="dd/mm/aaaa"
                  value={data_nasc}
                />
              </FormGroup>
            </Col>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="cpf">CPF</Label>
                <Input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" value={cpf} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={5}>
              <FormGroup>
                <Label for="end">Endereço</Label>
                <Input type="text" name="end" id="end" placeholder="Rua..." value={end} />
              </FormGroup>
            </Col>
            <Col xs={12} lg={3}>
              <FormGroup>
                <Label for="cidade">Cidade</Label>
                <Input type="text" name="cidade" id="cidade" value={cidade} />
              </FormGroup>
            </Col>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="estado">Estado</Label>
                <Input type="text" name="estado" id="estado" placeholder="UF" value={estado} />
              </FormGroup>
            </Col>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="cep">CEP</Label>
                <Input type="text" name="cep" id="cep" placeholder="20000-000" value={cep} />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Row>
              <Col xs={12} lg={2}>
                <FormGroup>
                  <Label for="valor">Valor Inicial (R$)</Label>
                  <Input type="text" placeholder="100.000,00" id="valor" name="valor" disabled value={valor} />
                </FormGroup>
              </Col>
            </Row>
            <Divider />
            <br />
            <Row>
              <Col xs={12} lg={1}>
                <Button color="danger">Cancelar</Button>
              </Col>
              <Col xs={12} lg={1}>
                <Button color="success" onClick={this.submitForm}>Salvar</Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default FormUser;