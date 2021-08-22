import React, { Component } from 'react';
import FuncionarioService from '../services/FuncionarioService';

class VisualizarFuncionarioComponent extends Component {
  constructor(props) {
    super(props);

    this.cancelar = this.cancelar.bind(this);

    this.state = {
      id: this.props.match.params.id,
      funcionario: {},
    };
  }

  componentDidMount() {
    FuncionarioService.buscarFuncionarioById(this.state.id).then(response => {
      this.setState({ funcionario: response.data });
    });
  }

  cancelar() {
    this.props.history.push('/funcionarios');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Detalhes Funcionário</h2>
        <br />
        <br />
        <div className="row">
          <button className="btn btn-primary" onClick={this.cancelar}>
            Voltar
          </button>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead className="thead-default">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Email Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.funcionario.id}</td>
                <td>{this.state.funcionario.nome}</td>
                <td>{this.state.funcionario.sobrenome}</td>
                <td>{this.state.funcionario.emailId}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default VisualizarFuncionarioComponent;
