import React from 'react';
import './Contato.css';

class Contato extends React.Component {
  render() {
    return (
      <div className="contato">
        <h2>Entre em contato conosco</h2>
        <p>Telefone: <a href="tel:111000504">(11) 1000-0504</a></p>
        <p>E-mail: <a href="mailto:teste@hotmail.com">teste@hotmail.com</a></p>
      </div>
    );
  }
}

export default Contato;
