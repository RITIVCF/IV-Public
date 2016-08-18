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

    var dayofweek = new moment(this.state.day.toISOString()).isoWeekday();

    this.state = {
      subscription: {
        Events: Meteor.subscribe("publishedEvents")  // for only grabbing published events
        //  on the public site.
      },
      start: new moment(this.state.day.toISOString()).subtract(dayofweek-1,"days")
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

  conferences(){
    return Events.find({
      end: {$gt: new Date()},
      tags: "Conferences"
    },
    {
      sort: {start:1}// Sorts ascending chronologically by start
    }).fetch();
  }

  getDays(){
    for(i=0;i<7;i++){
      days.push(this.state.start.add(i,"days"));
    }

    return days;

  }

  next(){
    this.state.start = new moment(this.state.start.toISOString()).add(1, "week");
  }

  prev(){
    this.state.start = new moment(this.state.start.toISOString()).subtract(1, "week");
  }


	render() {

		return (
    <div className="upcoming">

        {this.getDays().map( (day)=>{
            return <EventDay key={day} day={day} />
        })}

    </div>
		)
	}
}
