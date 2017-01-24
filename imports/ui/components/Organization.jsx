import React from 'react';
// import { Link } from 'react-router';


export default class Organization extends React.Component {

  render() {
    return (
      <section id="Organization" className="container row">
        <h1>Our Organization</h1>
        <div id="Mission" className="col s12 m6 l6">
          <h2>Our Mission</h2>
          In response to God's love, grace, and truth:
          The Purpose of InterVarsity Christian Fellowship/USA
          is to establish and advance
          at colleges and universities
          witnessing communities of students and faculty
          who follow Jesus as Savior and Lord:
          growing in love for God,
          God's Word,
          God's people of every ethnicity and culture
          and God's purposes in the world.
        </div>
        <div id="Vision" className="col s12 m6 l6">
          <h2>Our Vision</h2>
          To see students and faculty transformed,
          campuses renewed, and world changers developed.
        </div>
      </section>
    );
  }
}
