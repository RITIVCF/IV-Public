import React from 'react';
// import { a } from 'react-router';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
          <img src="/images/InterVarsity-RIT-ablogo-color.png" />
          </a>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/about">About</a></li>
            <li><a href="/gatherings">Gatherings</a></li>
            <li><a href="/sg">Small Groups</a></li>
            <li><a href="/churches">Churches</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="/about">About</a></li>
            <li><a href="/gatherings">Gatherings</a></li>
            <li><a href="/sg">Small Groups</a></li>
            <li><a href="/churches">Churches</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
