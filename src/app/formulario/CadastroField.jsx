import React, { PureComponent } from 'react';
import { Field } from 'redux-form';

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
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <Field
              name="nome"
              component="input"
              type="text"
              placeholder="Nome"
            />
          </div>
        </div>
        <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
      </form>
    );
  }
}
export default Cadastro;