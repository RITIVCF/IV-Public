import React from 'react';
// import { Link } from 'react-router';

export default class Audience extends React.Component {
  render() {
    return (
      <section id="Audience">
        <div className="container row">
          <h1>Become a Part</h1>
          <h3><div id="Crowd" className="col s4 m4 l4">
            Are you looking for<br />
            <div className="rwords">
              <span>love?</span>
              <span>purpose?</span>
              <span>success?</span>
              <span>community?</span>
            </div>
          </div></h3>
          <div className="col s4 m4 l4">
            <h3>Become a Member</h3>
            Growth is most effective when rooted in community.
          </div>
          <div className="col s4 m4 l4">
            <h3>Get Involved</h3>
            As a witnessing community, we strive to bring Jesus to the students of RIT. We rely on the passion, gifts, and talents of each of our members in order to thrive. <a href="contact">Find out</a> what your role is in making our vision a reality!
          </div>
        </div>
        {/*<div className="container row">
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
        </div>*/}
      </section>
    );
  }
}
