import React from 'react';
// import { Link } from 'react-router';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import WeekView from './WeekView.jsx';
import EventDay from './EventDay.jsx';
import SmallGroups from './SmallGroups.jsx';
import Conferences from './Conferences.jsx';
import moment from "moment";


export default class Gatherings extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state ={
      subscription: {
        Events: Meteor.subscribe("publishedEvents")  // for only grabbing published events
        //  on the public site.
      }
    };

  }

  componentWillUmount(){
    this.state.subscription.Events.stop();
  }

  render() {
    let ready=this.state.subscription.Events.ready();
    return (
      <section>
        <WeekView ready={ready} />
        <SmallGroups />
        <Conferences ready={ready} />
      </section>
    );
  }
}
