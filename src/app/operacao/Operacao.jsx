import React, { PureComponent } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Divider from '@material-ui/core/Divider';

class Operacao extends PureComponent {
  submitOperacao = () => {
    this.props.escutadorDeSubmit(this.state);
    this.setState(this.stateInicial);

  }
  render() {
    return (
      <Container className="layout__container">
        <h2>Operação</h2><br />
        <Form>
          <Row>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="exampleCustomInput">Seu Saldo</Label>
                <Input type="text" placeholder="100.000,00" id="valor-inicial" name="valor-inicial" disabled />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="exampleCustomInput">Valor aplicado</Label>
                <Input type="text" placeholder="100,00" id="valor-inicial" name="valor-inicial" />
              </FormGroup>
            </Col>
            <Col xs={12} lg={2}>
              <Label for="exampleSelect">Cambio</Label>
              <Input type="select" name="select" id="exampleSelect">
              <option>Selecione...</option>
                <option>Bitcoin</option>
                <option>Dólar</option>
                <option>Euro</option>
              </Input>
            </Col>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="exampleCustomInput">Valor comprado</Label>
                <Input type="text" placeholder="100,00" id="valor-inicial" name="valor-inicial" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="exampleCustomInput">Valor de venda</Label>
                <Input type="text" placeholder="100,00" id="valor-inicial" name="valor-inicial" />
              </FormGroup>
            </Col>
            <Col xs={12} lg={2}>
              <Label for="exampleSelect">Cambio</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Selecione...</option>
                <option>Bitcoin</option>
                <option>Dólar</option>
                <option>Euro</option>
              </Input>
            </Col>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="exampleCustomInput">Ganho</Label>
                <Input type="text" placeholder="100,00" id="valor-inicial" name="valor-inicial" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Divider />
            <br />
            <Row>
              <Col xs={12} lg={1}>
                <Button color="danger">Cancelar</Button>
              </Col>
              <Col xs={12} lg={1}>
                <Button color="success" onClick={this.submitOperacao}>Salvar</Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
export default Operacao;