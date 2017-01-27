import React from 'react';
// import { Link } from 'react-router';

export default class Audience extends React.Component {
  render() {
    return (
      <section id="Audience">
        <div className="container row">
          <h1>Become a Part</h1>
          <div id="Crowd" className="col s12 m12 l4">
            <h3>Looking for
            <div className="rwords">
              <span><i>Love?</i></span>
              <span><i>Purpose?</i></span>
              <span><i>Success?</i></span>
              <span><i>Community?</i></span>
            </div></h3>
            Then you have found the right place! A relationship with Jesus Christ offers all of these, and many more. And the best part is, it’s based on love, with no fine print or catches, and is all for free. If you are looking for any of these things or more in life, scroll down to check out what we at InterVarsity Christian Fellowship do and how you can participate or learn more.
          </div>
          <div className="col s12 m12 l4">
            <h3>Become a Member</h3>
            Growth is most effective when rooted in community. We would love you to take part in ours! Click <a href="/becomeamember">here</a> to learn how to become a member.
          </div>
          <div className="col s12 m12 l4">
            <h3>Get Involved</h3>
            As a witnessing community, we strive to bring Jesus to the students of RIT. We rely on the passion, gifts, and talents of each of our members in order to thrive. <a href="contact">Discover</a> what your role is in making our vision a reality!
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
