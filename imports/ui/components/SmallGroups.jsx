import React from 'react';
// import { Link } from 'react-router';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import SG from './SG.jsx';

export default class SmallGroups extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription:  {
        SmallGroups: Meteor.subscribe("SGs"),
        Contacts: Meteor.subscribe("allContacts")
      }
    };


  }

  componentWillUmount(){
    this.state.subscription.SmallGroups.stop();
    this.state.subscription.Contacts.stop();
  }

  getSGs(){
    return Groups.find({type:"Small Group"}).fetch();
  }

  render() {
    if(!(this.state.subscription.SmallGroups.ready()&&this.state.subscription.Contacts.ready())){
      return false;
    }
    return (
      <div id="SmallGroups" className="wrow WeekContent">
        {this.getSGs().map((sg)=>{
          return <SG key={sg._id} sg={sg} />
        })}
        {/*}<br/> <p>See calendar for next gathering.</p>*/}
      </div>
    );
  }
}
