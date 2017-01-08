import React from 'react';
import { Link } from 'react-router';

export default class PrayerInfo extends React.Component {

  render() {
    return (
      <section id="PrayerInfo" className="container row">
        <h1>We Connect to God through Prayer</h1>
        <div className="col s12 m6 l6">
          <h2>Fight Club</h2>
          <p>Men's Prayer</p>

        </div>
        <div className="col s12 m6 l6">
          <h2>Combined Prayer</h2>
          <p>Men and Women</p>

        </div>
        <p>We are looking for a woman to lead our women's prayer group.</p>
      </section>
    );
  }
}
