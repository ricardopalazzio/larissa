import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

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
      usuario: {},
      compra: 0,
      venda: 0,
      compraConvertido: 0,
      vendaConvertido: 0,
      compraCotacao: 0,
      vendaCotacao: 0,
    }
  }

  // consulta o valor de compra e venda
  componentWillMount() {
    console.log("willMount");

    // aqui voce tem que fazer o nome chegar pelo login ....
    this.setState( {usuario: JSON.parse(localStorage.getItem('luana'))} );


    // pega o valor da cotacao e coloca no state.
    fetch('https://www.mercadobitcoin.net/api/BTC/ticker/', {mode: "cors"})
        .then(data => data.json())
        .then(element => {
          this.setState( {compraCotacao: element.ticker.buy} );
          this.setState( {vendaCotacao: element.ticker.sell} );
          console.log(this.state);
        });
  }


  operaCompra() {

    // recupera as trasacoes do usuario e calcula o novo saldo.
    const usuario  = this.state.usuario;


    // se o valor e maior que o saldo do usuario nao deixa;
    if(this.state.compra > usuario.valor){
      alert("saldo insuficiente");
      return;
    }

    console.log(usuario);

    // pega o ultimo elemento da lista do usuario e faz  o calculo de saldo  total em reais e de bitcoins;
    let ultimaTrasacaoBTC  =  usuario.btc[usuario.btc.length -1];

    // cria  o novo registro
    let novaTrasacao = {saldoAnterior:  ultimaTrasacaoBTC.saldoAtual
      , valorOperacao: this.state.compraConvertido,
      saldoAtual: this.state.compraConvertido + ultimaTrasacaoBTC.saldoAtual}

    //manipula o valor do usuario;
    usuario.valor  = usuario.valor  - this.state.compra;

    usuario.btc.push(novaTrasacao);

    localStorage.setItem(usuario.nome , JSON.stringify(usuario));

    alert("transacao realizada!")

  }

  calculaValorCompra (event) {
    let value  = event.target.value;
    this.setState({compra : value});

    let valorCompraConvertido  = 0 ;

     valorCompraConvertido  =  (value / this.state.compraCotacao);

     this.setState({compraConvertido: valorCompraConvertido})

     console.log(this.state);

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
                defaultValue={this.state.compra}
                onChange={this.calculaValorCompra.bind(this)}
                type="text"
                id="iCompra"
                fullWidth
                margin="normal"
              />
            </Col>
            <Col xs={12} lg={5}>
              <TextField
                label="Valor convertido"
                defaultValue={this.state.compraConvertido}
                value={this.state.compraConvertido}
                id="filled-adornment-amount"
                fullWidth
                margin="normal"
              />
            </Col>
            <Col xs={12} lg={2}>
              <Button type="submit" outline color="success" onClick={this.operaCompra.bind(this)}>Operar</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={5}>
              <TextField
                name="iVenda"
                label="Valor de venda"
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
