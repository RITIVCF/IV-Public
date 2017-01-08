import React from 'react';
import { Link } from 'react-router';

export default class NewsCTA extends React.Component {
  render() {
    return (
      <section id="NewsCTA">
        <div className="container row">
          <a className="waves-effect waves-light btn">
            Sign up for the newsletter
          </a>
        </div>
      </section>
    );
  }
}
