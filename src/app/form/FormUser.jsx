import React, { PureComponent } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FormUser extends PureComponent {
  render() {
    return (
      <Container>
        <h2>Cadastro de Usuário</h2><br />
        <Form>
          <Row>
            <Col xs={12} lg={6}>
              <FormGroup>
                <Label for="name">Nome</Label>
                <Input type="text" name="name" id="name" placeholder="Nome completo" />
              </FormGroup>
            </Col>
            <Col xs={12} lg={3}>
              <FormGroup>
                <Label for="exampleDate">Data de Nascimento</Label>
                <Input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="dd/mm/aaaa"
                />
              </FormGroup>
            </Col>
            <Col xs={12} lg={3}>
              <FormGroup>
                <Label for="cpf">CPF</Label>
                <Input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={5}>
              <FormGroup>
                <Label for="address">Endereço</Label>
                <Input type="text" name="address" id="address" placeholder="Rua..." />
              </FormGroup>
            </Col>
            <Col xs={12} lg={3}>
              <FormGroup>
                <Label for="city">Cidade</Label>
                <Input type="text" name="city" id="city" />
              </FormGroup>
            </Col>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="state">Estado</Label>
                <Input type="text" name="state" id="state" placeholder="UF" />
              </FormGroup>
            </Col>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="zip">CEP</Label>
                <Input type="text" name="zip" id="zip" placeholder="20000-000" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Row>
              <Col xs={12} lg={2}>
                <FormGroup>
                  <Label for="exampleCustomInput">Valor Inicial (R$)</Label>
                  <Input type="text" placeholder="100.000,00" id="valor-inicial" name="valor-inicial" disabled   />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={2}>
                <Button>Salvar</Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
export default FormUser;