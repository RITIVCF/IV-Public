import React from 'react';
// import { a } from 'react-router';

export default class Navigation extends React.Component {

  componentDidMount(){
    $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
    $("#mobilenav").appendTo('body');

  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
          <img src="/images/InterVarsity-RIT-ablogo-color.png" />
          </a>
          <a href="#" data-activates="mobilenav" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/about">About</a></li>
            <li><a href="/gatherings">Gatherings</a></li>
            {/*}<li><a href="/sg">Small Groups</a></li>*/}
            <li><a href="/churches">Churches</a></li>
            <li><a href="/prayer">Prayer</a></li>
          </ul>
          <ul className="side-nav" id="mobilenav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gatherings">Gatherings</a></li>
            {/*}<li><a href="/sg">Small Groups</a></li>*/}
            <li><a href="/churches">Churches</a></li>
            <li><a href="/prayer">Prayer</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
