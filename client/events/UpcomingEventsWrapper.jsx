import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import EventSingle from './EventSingle.jsx';
import moment from "moment";


//Events = new Mongo.Collection("events");
//var remote = new DDP.connect("http://localhost:3000/");
//Events = new Mongo.Collection("events", remote);

export default class UpcomingEventsWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        Events: Meteor.subscribe("publishedEvents")  // for only grabbing published events
        //  on the public site.
      }
    };
  }

  componentWillUnmount() {
    this.state.subscription.Events.stop();
  }

  events(){
    // pulls upcoming, published events

    return Events.find({
      end: {$gt: new Date(), $lt: new moment().add(2,"weeks")._d}
    },
    {
      sort: {start:1}// Sorts ascending chronologically by start
    }).fetch();
  }


	render() {

		return (
    <div className="upcoming">
      <h2>Upcoming Events</h2>
      <ul>
        {this.events().map( (ivevent)=>{
            return <EventSingle key={ivevent._id} ivevent={ivevent} />
        })}
    </ul>
    </div>
		)
	}
}
