import React from 'react';
// import { Link } from 'react-router';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import SG from './SG.jsx';
import LoaderCircle from './LoaderCircle.jsx';

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
    let ready= this.state.subscription.SmallGroups.ready()&&this.state.subscription.Contacts.ready();
    return (
      <section>
        <div className="wrow WeekHeader">
          <h2>Small Groups</h2>
        </div>
        <div id="SmallGroups" className="wrow WeekContent">
          {ready?this.getSGs().length>0?this.getSGs().map((sg)=>{
            return <SG key={sg._id} sg={sg} />
          }):<p style={{textAlign: "center"}}>No Small Groups</p>:<LoaderCircle />}
          {/*}<br/> <p>See calendar for next gathering.</p>*/}
        </div>
      </section>
    );
  }
}
