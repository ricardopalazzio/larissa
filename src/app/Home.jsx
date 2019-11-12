import React from "react";
import { Col, Row, Form, FormGroup, Label, Input, Button } from "reactstrap";

class Home extends React.Component {
  render() {
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Nome</Label>
              <Input type="text" name="name" placeholder="Nome completo" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">CPF</Label>
              <Input type="number" name="cpf" placeholder="Apelas numeros" />
            </FormGroup>
          </Col>
        </Row>
        <Button>Salvar</Button>
      </Form>
    );
  }
}
export default Home;
