import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import EventCalendar from './EventCalendar.jsx';
import Loading from 'react-loading';


//Events = new Mongo.Collection("events");

export default class EventCalendarWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        Events: Meteor.subscribe("publishedEvents")
      }
    };
  }

  componentWillUnmount() {
    this.state.subscription.Events.stop();
  }

  fetchScheduled(start, end, timezone, callback) {
    // FullCalendar calls this function with a start time, end time, timezone
    //   and callback function. Provide callback with an array of events.
    if (start._isAMomentObject) {
      start = start._d;
    }
    if (end._isAMomentObject) {
      end = end._d;
    }
    e = Events.find({$or:
                      [{start: {$gte: start, $lt: end}},
                        {end: {$gte: start, $lt: end}},
                        {$and:
                          [{start: {$lte: start}},
                            {end: {$gt: end}}]}
                      ]}).fetch();
    e = e.map((event) => {
      // Add a "start" key for now
      //event.start = event.start;
      //event.end = event.end;
      // Copy name to title for FullCalendar
      event.title = event.name;
      return event;
    });
    callback(e);
  }

	render() {
    if(!this.state.subscription.Events.ready()){
      return(<div><header className="special container">
        <span className="icon fa-map-maker"></span>
        <h2>Events <strong>Calendar</strong></h2>
      </header><Loading type="spin" color="FFF" /></div>)
    }
		return (
    <div>
      <header className="special container">
        <span className="icon fa-map-maker"></span>
        <h2>Events <strong>Calendar</strong></h2>
      </header>
        <div className="calendar">
          <EventCalendar events={this.fetchScheduled} ref="calendar"/>
        </div>

		</div>
		)
	}
}
