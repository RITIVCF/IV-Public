import React from 'react';
import { Link } from 'react-router';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Church from './Church.jsx';

export default class ChurchList extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription:  {
        Churches: Meteor.subscribe("activeChurches"),
        Contacts: Meteor.subscribe("allContacts")
      }
    };


  }

  getChurches(){
    return Churches.find().fetch();
  }

  render() {
    if(!(this.state.subscription.Churches.ready()&&this.state.subscription.Contacts.ready())){
      return <div></div>
    }
    return (
      <section id="Churches">
        {this.getChurches().map((church)=>{
          return <Church key={church._id} ch={church} />
        })}
      </section>
    );
  }
}
