import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { TextField } from '@material-ui/core';

class Cadastro extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    let usuario = {};

    // insere as propriedades do formulado no ususario
    Array.from(data.keys()).forEach(element => {
      usuario[element] = data.get(element)
    });


    //verifica se nao exite usuario com o mesmo nome
    const meuStorage = localStorage;
    let temUsuario = localStorage.getItem(data.get('nome'));

    if (temUsuario) {
      alert('usuario ja existe');
    } else {

      // cria o array com saldo de cada moeda
      usuario.brita = [{saldoAnterior: 0, valorOperacao: 0, saldoAtual: 0}]
      usuario.btc = [{saldoAnterior: 0, valorOperacao: 0, saldoAtual: 0}]

      usuario.valor = 100000.00; // ap[lica o saldo inicial

      //salva no local storage do navegado;
      meuStorage.setItem(data.get('nome'), JSON.stringify(usuario));
      alert('usuario inserido');
    }
  }


   //
   // const BTCValue  = 0;
   //  fetch('https://www.mercadobitcoin.net/api/BTC/ticker/' , {mode:"cors"})
   //  .then(data => data.json() )
   //  .then(element =>{
   //
   //    console.log (100 / element.ticker.sell)
   //
   //
   //   let usuario  = new Usuario.fromJson(localStorage.getItem(data.get('nome')));
   //   if(usuario.bitcoin  || usuario.bitcoin.length ===0 )
   //        usuario.bitcoin.push(new BitCoin(0, 0, 0  ));
   //
   //   let ultimaTrasacaoDeBitCoin  =  Array.from(usuario.bitcoin)[usuario.bitcoin.lenght -1];
   //
   //   let saldoAtual =   ultimaTrasacaoDeBitCoin.saldo - (100 / element.ticker.sell);
   //
   //    usuario.bitcoin.push(new BitCoin(ultimaTrasacaoDeBitCoin.saldoAnterior , 100 , saldoAtual  ))  ;
   //    meuStorage.setItem(data.get('nome'), JSON.stringify(usuario));


    // });

  // }

  render() {
     const { reset } = this.props;
    return (
      <Container className="layout__container">
        <h2>Cadastro</h2><br />
        <Form onSubmit={this.handleSubmit}>
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
