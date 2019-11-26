import React, { PureComponent } from 'react';

class Conversor extends PureComponent {
  super(props) {
    this.super(props);
    this.state = {
      moedaReal = 0,
      moedaDolar = 0,
      MoedaBitcoin = 0,
    }
    this.state = this.state;
  }

  converter() {
    let converte = `${this.props.moedaReal}_${this.props.moedaDolar}`;
    let url = `https://www.mercadobitcoin.net/api/BTC/ticker/=${converte}`
    
    fetch(url)
    .then(res=>{
      return res.json()
    }).then(json=>{
      let cotacao = json[converter].val;
      let moedaDolar = (parseFloat(this.state.MoedaReal) * cotacao).toFixed(2);
    })
  }

  render() {
    return (
      <Container className="layout__container">
        <h2>Operação</h2><br />
        <Form>
          <Row>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label>Valor aplicado</Label>
                <Input type="text" placeholder="100,00" id="valor-inicial" name="valor-inicial" />
              </FormGroup>
            </Col>
            <Col xs={12} lg={2}>
              <Label for="exampleSelect">Cambio</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Selecione...</option>
                <option id="bitcoin">Bitcoin</option>
                <option id="dolar">Dólar</option>
              </Input>
            </Col>
            <Col xs={12} lg={2}>
              <FormGroup>
                <Label for="exampleCustomInput">Valor comprado</Label>
              </FormGroup>
            </Col>
          </Row>
        </Form>
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
      </Container>
    );
  }
} export default Conversor;