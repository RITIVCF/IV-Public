import React from 'react';
// import { Link } from 'react-router';

export default class ContactForm extends React.Component {
  constructor(){
    super();
      this.state = {
        submitted: false
      }
  }

  componentDidMount(){
    Materialize.updateTextFields();
  }

  submit(event){
    event.preventDefault();
    let refs = this.refs;
    var thiz = this;
    Meteor.call("contactEmail",
      refs.name.value.trim(),
      refs.email.value.trim(),
      refs.subj.value.trim(),
      refs.message.value.trim(),
        function(error){
        if(error){
          Materialize.toast("Sorry, something went wrong. Please try again.",4000);
          console.log(error);
        }
        else{
          Materialize.toast("Success!", 4000);
          thiz.setState({submitted: true});
        }
    });
    Materialize.toast("Thanks letting us know. Please wait while we confirm your submission.", 4000);
  }

  render() {
    if(this.state.submitted){
      return (
        <section id="ContactForm" className="container row">
          <h2>Thanks! We'll get back to you soon!</h2>
        </section>
      )
    }
    return (
      <section id="ContactForm" className="container row">
        <form onSubmit={this.submit.bind(this)}>
          <div className="input-field col s12">
            <input type="text" ref="name" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s12">
            <input type="email" ref="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12">
            <input type="text" ref="subj" id="subj" required />
            <label htmlFor="subj">Subject</label>
          </div>
          <div className="input-field col s12">
            <textarea className="materialize-textarea" ref="message" id="message" placeholder="Hi I'm..." />
            <label htmlFor="message">Message</label>
          </div>
          <input type="submit" className="btn" name="sendcontact" value="Send" />
        </form>
      </section>
    );
  }
}
