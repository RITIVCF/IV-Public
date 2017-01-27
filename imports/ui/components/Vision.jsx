import React from 'react';

export default class Vision extends React.Component {
  render() {
    return (
      <section id="Vision">
        <div className="container row">
          <h1>Our Vision</h1>
          <div className="col s12 l4 center-align">
            <i className="fa feature fa-users"></i>
            <h3>Students and Faculty Transformed</h3>
          </div>
          <div className="col s12 l4 center-align">
            <i className="fa feature fa-building-o"></i>
            <h3>Campuses Renewed</h3>
          </div>
          <div className="col s12 l4 center-align">
            <i className="fa feature fa-globe"></i>
            <h3>World Changers Developed</h3>
          </div>
        </div>
      </section>
  );
  }
}
