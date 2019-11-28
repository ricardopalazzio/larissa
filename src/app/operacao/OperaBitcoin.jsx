import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import $ from 'jquery';

// userEffect(() => {
//   fetchItems();
// }, []);
// const [items, setItens] = useState([]);
// const fetchItems = async () => {
//   const data = await fetch('https://www.mercadobitcoin.net/api/BTC/ticker/');
// }

// componentDidMount() {
//   axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/')
//     .then(({ data }) => {
//       this.setState({ data })
//     })
// }
class OperaBitcoin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      buy: '',
      sell: '',
    }
  }
  componentWillMount() {
    console.log("willMount");
    $.ajax({
      url: "https://www.mercadobitcoin.net/api/BTC/ticker/",
      dataType: 'json',
        type:'get',
        data: JSON.stringify({
          buy:this.state.buy, 
          sell:this.state.sell
        }),
      success: function (e) {
        console.log("chegou a resposta");
        this.setState({ data: e });
      }.bind(this)
    }
    );
  }
  render() {
    const { handleSubmit, reset } = this.props;
    //const { data } = this.state
    //onst { saldo, dolar, bitcoin } = this.state;
    return (
      <Container className="layout__container">
        <h2>Operações Bitcoin</h2><br />
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
                defaultValue={this.state.buy}
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
                defaultValue={this.state.sell}
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
  form: 'operacao-bitcoin',
})(OperaBitcoin);
