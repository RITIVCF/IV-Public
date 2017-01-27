import React from 'react';

export default class Member extends React.Component {
  render() {
    return (
      <section id="Member">
        <div className="container row">
          <div className="col s12">
            <h1>Become a Member</h1>
            <p>Becoming a member is easy:</p>
            <ol>
              <li>Create an account in <a href="http://ivy.rit.edu" target="_blank">Ivy</a>. If you already have an account, skip to step 2.</li>
              <li>Go to <a href="http://ivy.rit.edu/profile" target="_blank">My Profile</a>.</li>
              <li>Click on "Become a Member" and follow the instructions.</li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}
