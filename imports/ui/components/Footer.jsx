import React from 'react';
//import { a } from 'react-router';

export default class Footer extends React.Component {
  render() {
    return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col s12 m4 l4">
            <p>This website was designed by students in InterVarsity Christian
            Fellowship at the Rochester Institute of Technology.</p>
          </div>
          <div className="col s6 m2 l2">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/events">Events</a></li>
            </ul>
          </div>
          <div className="col s6 m2 l2">
            <ul>
              <li><a href="/churches">Churches</a></li>
              <li><a href="/prayer">Prayer</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col s12 m4 l4">
            <ul>
              <li><a href="http://ivy.rit.edu/" target="_blank">Ivy System</a></li>
              <li><a href="http://ivcfnynj.org/" target="_blank">New York/New Jersey Region</a></li>
              <li><a href="http://intervarsity.org/" target="_blank">InterVarsity Organization</a></li>
            </ul>
          </div>
        </div>
        <div className="Copyright row">
          <ul className="icons">
            <li><a href="https://twitter.com/ritivcf" target="_blank">
              <i className="fa fa-twitter"></i>
            </a></li>
            <li><a href="https://www.facebook.com/ritivcf" target="_blank">
              <i className="fa fa-facebook-official"></i>
            </a></li>
    		    <li><a href="https://instagram.com/ritivcf" target="_blank">
              <i className="fa fa-instagram"></i>
            </a></li>
          </ul>
          <br />
          Made with love, InterVarsity Christian Fellowship at RIT © 2016
        </div>
      </div>
    </footer>
    );
  }
}
