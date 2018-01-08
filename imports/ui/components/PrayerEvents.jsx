import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import moment from "moment";
import LoaderCircle from './LoaderCircle';

export default class PrayerEvents extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state ={
      subscription: {
        Events: Meteor.subscribe("prayerEvents")
      }
    };

  }

  componentWillUmount(){
    this.state.subscription.Events.stop();
  }

  getPrayerEvents() {
    return Events.find({tags: "Prayer", start: {$gt: new moment(new Date().toISOString())._d}},{sort: {start: 1}}).fetch();
  }

  render() {
    let ready=this.state.subscription.Events.ready();
    if (!ready) {
      return <LoaderCircle />
    }
    return (
      <div>
        {this.getPrayerEvents().length!=0?this.getPrayerEvents().map((event)=>{
          let start = new moment(event.start.toISOString());
          return (
            <div style={{ paddingTop: "1em" }}>
              <span style={{ fontSize: "1.5em" }}>{event.name}</span>
              <p>{start.format("DD MMM YYYY")} @ {start.format("h:mm A")}</p>
              <p>{event.location}</p>
            </div>
          )
        }):<p style={{textAlign: "center"}}>No upcoming prayer events</p>}
      </div>
    );
  }
}
