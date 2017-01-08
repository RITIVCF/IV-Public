import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
          <img src="/images/InterVarsity-RIT-ablogo-color.png" />
          </Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/churches">Churches</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/churches">Churches</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
