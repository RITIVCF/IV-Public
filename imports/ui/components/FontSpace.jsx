import React from 'react';
// import { Link } from 'react-router';

export default class FontSpace extends React.Component {
  render() {
    return (
      <section className="container" id="FontSpace">
        <ul>
          <li className="Montserrat">Montserrat</li>
          <li className="Gotham">Gotham</li>
          <li className="Futura">Futura</li>
          <li className="Homestead">Homestead</li>
          <li className="Lobster">Lobster</li>
          <li className="Ostrich">Ostrich</li>
        </ul>
      </section>
    );
  }
}
