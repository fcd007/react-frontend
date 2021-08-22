import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListarFuncionarioComponent from './components/ListarFuncionarioComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponente';
import CriarFuncionarioComponent from './components/CriarFuncionarioComponent';
import VisualizarFuncionarioComponent from './components/VisualizarFuncionarioComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route
                path="/"
                exact
                component={ListarFuncionarioComponent}
              ></Route>
              <Route
                path="/funcionarios"
                component={ListarFuncionarioComponent}
              ></Route>
              <Route
                path="/criar-funcionarios/:id"
                component={CriarFuncionarioComponent}
              ></Route>
              <Route
                path="/visualizar-funcionarios/:id"
                component={VisualizarFuncionarioComponent}
              ></Route>
            </Switch>
          </div>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default App;
