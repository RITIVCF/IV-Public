import React from 'react';
// import { Link } from 'react-router';

export default class NewsCTA extends React.Component {
  render() {
    return (
      <section id="NewsCTA">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <a href="/about" className="waves-effect waves-light btn">
                Learn More About Us
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <a href="/gatherings" className="waves-effect waves-light btn">
                See Upcoming Gatherings
              </a>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
