import React, { PureComponent } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FormUser extends PureComponent {
  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="name">Nome</Label>
                <Input type="text" name="name" id="name" placeholder="Nome completo" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="text" name="email" id="email" placeholder="exemplo@email.com" />
              </FormGroup>
            </Col>
            <Col>
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
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="cpf">CPF</Label>
                <Input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="text" name="email" id="email" placeholder="exemplo@email.com" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="address">Endereço</Label>
                <Input type="text" name="address" id="address" placeholder="Rua..." />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="city">Cidade</Label>
                <Input type="text" name="city" id="city" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state">Estado</Label>
                <Input type="text" name="state" id="state" placeholder="UF"/>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="zip">CEP</Label>
                <Input type="text" name="zip" id="zip" placeholder="20000-000"/>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Salvar</Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
export default FormUser;