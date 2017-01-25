import React from 'react';
// import { Link } from 'react-router';

export default class Register extends React.Component {
  render() {
      return (
        <div className="row container">
        <h2 className="text-center">Become a Member!</h2>
          <form className="col offset-s3 s6">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };
