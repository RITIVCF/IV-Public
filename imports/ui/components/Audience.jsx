import React from 'react';
// import { Link } from 'react-router';

export default class Audience extends React.Component {
  render() {
    return (
      <section id="Audience">
        <div className="container row">
          <h1>Become a Part</h1>
          <div id="Crowd" className="col s4 m4 l4">
            Are you looking for<br />
            <div className="rwords">
              <span>love?</span>
              <span>purpose?</span>
              <span>success?</span>
              <span>community?</span>
            </div>
          </div>
          <div className="col s4 m4 l4">
            <h4>Visitors</h4>
          </div>
          <div className="col s4 m4 l4">
            <h5>Members</h5>
          </div>
        </div>
        <div className="container row">
          <div className="col s4 m4 l4">
            <a className="waves-effect waves-light btn">
              Learn More
            </a>
          </div>
          <div className="col s4 m4 l4">
            <a className="waves-effect waves-light btn">
              Become a Member
            </a>
          </div>
          <div className="col s4 m4 l4">
            <a className="waves-effect waves-light btn">
              Get Involved
            </a>
          </div>
        </div>
      </section>
    );
  }
}
