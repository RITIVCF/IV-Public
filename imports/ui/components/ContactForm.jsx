import React from 'react';
import { Link } from 'react-router';

export default class ContactForm extends React.Component {

  render() {
    return (
      <section id="ContactForm" className="container row">
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea placeholder="What's up?"></textarea>
          <input type="submit" name="sendcontact" value="Submit" />
        </form>
      </section>
    );
  }
}
