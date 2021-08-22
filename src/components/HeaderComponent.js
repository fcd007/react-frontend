import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="text-center navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="http://localhost:3000" className="navbar-brand">
                Gerenciador de Funcionários Web App
              </a>
            </div>
          </nav>
        </header>
        <br />
        <br />
      </div>
    );
  }
}

export default HeaderComponent;
