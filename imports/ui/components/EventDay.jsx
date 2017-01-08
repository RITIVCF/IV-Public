import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import EventSingle from './EventSingle.jsx';

export default class EventDay extends  TrackerReact(React.Component) {
  openEvent(event){
    event.preventDefault();
    // opens event in event workspace

  }

  getEvents(){
    return Events.find({$and: [{start: {$gt: new moment(this.props.day.toISOString()).hour(0).minute(0)._d}},
      {start: {$lt: new moment(this.props.day.toISOString()).hour(23).minute(59)._d}},{tags: {$ne: "Conference"}}]}).fetch();
  }

  //  <div> className="wcol">
  //    <div className="EventBox z-depth-1"></div>
  //  </div>
  render() {
    return (
      <div className="wcol">
        {this.getEvents().map( (event) => {
          return <EventSingle key={event._id} ev={event} />
        })}
      </div>
    )
  }
}
