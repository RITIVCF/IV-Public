import React from 'react';
// import { Link } from 'react-router';

export default class PrayerForm extends React.Component {
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
    let refs= this.refs;
    let thiz = this;
    Meteor.call("submitPrayerRequest",
      refs.name.value.trim(),
      refs.email.value.trim(),
      refs.message.value.trim(),
      function(error){
        if(error){
          Materialize.toast("Sorry, something went wrong. Please try again.",4000);
          console.log(error);
        }
        else{
          thiz.setState({submitted: true});
        }
      }
    );
  }

  render() {
    if(this.state.submitted){
      return(
        <section id="PrayerForm" className="container row">
          <h1>{"Do you have a prayer request?"}</h1>
          <h2>We will be praying for you!</h2>

        </section>
      )
    }
    return (
      <section id="PrayerForm" className="container row">
        <h1>{"Do you have a prayer request?"}</h1>
        <form onSubmit={this.submit.bind(this)}>
          <div className="input-field col s12">
            <input type="text" ref="name" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s12">
            <input type="email" ref="email" id="email" />
            <label htmlFor="email">Email (optional)</label>
          </div>
          <div className="input-field col s12">
            <textarea className="materialize-textarea" ref="message" id="message" placeholder="How can we pray for you?" />
            <label htmlFor="message">Message</label>
          </div>
          <input type="submit" className="btn" ref="sendprayer" value="Send" />
        </form>
      </section>
    );
  }
}
