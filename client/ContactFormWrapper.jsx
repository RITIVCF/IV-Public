import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ContactUsForm from './contactus/ContactUs.jsx';

export default class ContactFormWrapper extends TrackerReact(React.Component){
  render(){
    return (
      <div>
        <header className="special containter">
          <span className="icon fa-globe"></span>
          <h2>Contact Us</h2>
        </header>
        <section class="wrapper style4 container special 75%">
		        <div class="content">
			           <ContactUsForm />
		        </div>
	      </section>
      </div>
    )
  }
}
