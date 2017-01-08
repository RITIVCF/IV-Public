import React from 'react';
import { Link } from 'react-router';

export default class PrayerForm extends React.Component {

  render() {
    return (
      <section id="PrayerForm" className="container row">
        <h1>Do you have a prayer request?</h1>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email (optional)" />
          <textarea placeholder="How can we pray for you?"></textarea>
          <input type="submit" name="sendprayer" value="Submit" />
        </form>
      </section>
    );
  }
}
