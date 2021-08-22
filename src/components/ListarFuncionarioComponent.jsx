import React, { Component } from 'react';
import FuncionarioService from '../services/FuncionarioService';

class ListaFuncionarioComponente extends Component {
  constructor(props) {
    super(props);

    this.criarFuncionario = this.criarFuncionario.bind(this);
    this.editarFuncionario = this.editarFuncionario.bind(this);
    this.deleteFuncionario = this.deleteFuncionario.bind(this);
    this.visualizarFuncionario = this.visualizarFuncionario.bind(this);

    this.state = {
      funcionarios: [],
    };
  }

  componentDidMount() {
    FuncionarioService.listarFuncionarios().then(response => {
      this.setState({ funcionarios: response.data });
    });
  }

  //deletar funcionario
  deleteFuncionario(id) {
    FuncionarioService.deleteFuncionario(id).then(response => {
      this.setState({
        funcionarios: this.state.funcionarios.filter(
          funcionario => funcionario.id !== id,
        ),
      });
    });
  }
  //criar novo funcionário
  criarFuncionario() {
    this.props.history.push(`/criar-funcionarios/_add`);
  }
  // editar funcionario
  editarFuncionario(id) {
    this.props.history.push(`criar-funcionarios/${id}`);
  }
  //visualizar detalhes
  visualizarFuncionario(id) {
    this.props.history.push(`/visualizar-funcionarios/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Lista de Funcionários</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.criarFuncionario}>
            Adicionar Funcionário
          </button>
        </div>
        <br />

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Email Id</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.funcionarios.map(funcionario => (
                <tr key={funcionario.id}>
                  <td>{funcionario.nome}</td>
                  <td>{funcionario.sobrenome}</td>
                  <td>{funcionario.emailId}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.visualizarFuncionario(funcionario.id)}
                    >
                      Visualizar
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      className="btn btn-info"
                      onClick={() => this.editarFuncionario(funcionario.id)}
                    >
                      Editar
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      className="btn btn-danger"
                      onClick={() => this.deleteFuncionario(funcionario.id)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListaFuncionarioComponente;
