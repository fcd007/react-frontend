import React, { Component } from 'react';
import FuncionarioService from '../services/FuncionarioService';

class CriarFuncionarioComponent extends Component {
  constructor(props) {
    super(props);

    this.changeUpdateFuncionario = this.changeUpdateFuncionario.bind(this);
    this.salvarOrUpdateFuncionario = this.salvarOrUpdateFuncionario.bind(this);
    this.cancelar = this.cancelar.bind(this);

    this.state = {
      id: this.props.match.params.id,
      funcionario: {
        nome: '',
        sobrenome: '',
        emailId: '',
      },
    };
  }

  componentDidMount() {
    if (this.state.id === '_add') {
      return;
    } else {
      FuncionarioService.buscarFuncionarioById(this.state.id).then(response => {
        this.setState({ funcionario: response.data });
      });
    }
  }

  salvarOrUpdateFuncionario = event => {
    event.preventDefault();
    let funcionario = {
      nome: this.state.funcionario.nome,
      sobrenome: this.state.funcionario.sobrenome,
      emailId: this.state.funcionario.emailId,
    };

    if (this.state.id === '_add') {
      FuncionarioService.criarFuncionario(funcionario).then(response => {
        this.props.history.push('/funcionarios');
      });
    } else {
      FuncionarioService.updateFuncionario(funcionario, this.state.id).then(
        response => {
          this.props.history.push('/funcionarios');
        },
      );
    }
  };

  changeUpdateFuncionario = event => {
    const funcionario = Object.assign({}, this.state.funcionario);
    funcionario[event.target.id] = event.target.value;
    this.setState({ funcionario });
  };

  cancelar() {
    this.props.history.push('/funcionarios');
  }

  getTitutlo() {
    if (this.state.id === '_add') {
      return <h3 className="text-center">Novo Funcionário</h3>;
    } else {
      return <h3 className="text-center">Atualizar Funcionário</h3>;
    }
  }

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className-="row">
            {this.getTitutlo()}
            <br />
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Nome:</label>
                    <input
                      id="nome"
                      name="nome"
                      placeholder="Nome"
                      className="form-control"
                      value={this.state.funcionario.nome}
                      onChange={event => this.changeUpdateFuncionario(event)}
                    />
                    <br />
                    <label>Sobrenome:</label>
                    <input
                      id="sobrenome"
                      name="sobrenome"
                      placeholder="Restante do nome"
                      className="form-control"
                      value={this.state.funcionario.sobrenome}
                      onChange={this.changeUpdateFuncionario}
                    />
                    <br />
                    <label>Email:</label>
                    <input
                      id="emailId"
                      name="emailId"
                      placeholder="Restante do nome"
                      className="form-control"
                      value={this.state.funcionario.emailId}
                      onChange={this.changeUpdateFuncionario}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.salvarOrUpdateFuncionario}
                  >
                    Salvar
                  </button>
                  <button
                    style={{ marginLeft: '10px' }}
                    className="btn btn-danger"
                    onClick={this.cancelar}
                  >
                    Cancelar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CriarFuncionarioComponent;
