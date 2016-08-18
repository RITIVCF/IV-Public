import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import MemberForm from './MemberForm.jsx';

//Contacts = new Mongo.Collection('contacts');

export default class MemberWrapper extends TrackerReact(React.Component){
  constructor(props){
    super(props);
    this.state={
      subscription: {
        options: Meteor.subscribe("formOptions"),
        contact: Meteor.subscribe("thisContact", props.cid)
      }
    };
  }

  getContact(){
    return Contacts.findOne(this.props.cid);
  }

  render() {
    var contact = this.getContact();
    return (
      <div id="card" className="card">
        <div className="front">
          {contact ? contact.member ? <p>You're already a member. If you want to change your membership settings,
            sign in to <a href={"http://ivy.rit.edu"}>Ivy</a>.</p>:
          <MemberForm cid={this.props.cid} subscriptions={this.state.subscription} />:<div>Oops! Something went wrong.
            Please try again. If you continue to see this message, please contact us at ivcf@rit.edu.</div>}
        </div>
      </div>
    )
  }
}
