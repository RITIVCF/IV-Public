import React, {Component} from 'react';
import EventSingle from './EventSingle.jsx';

export default class EventDay extends Component {
  openEvent(event){
    event.preventDefault();
    // opens event in event workspace

  }

  getEvents(){
    return Events.find({$and: [{start: {$gt: new moment(this.props.date.toISOString()).hour(0).minute(0)._d}},
      {start: {$lt: new moment(this.props.date.toISOString()).hour(23).minute(59)._d}}]});
  }

  //  <div> className="wcol">
  //    <div className="EventBox z-depth-1"></div>
  //  </div>
  render() {

    return (
      <div className="wcol">
        {this.getEvents().map( (event) =>{
          return <EventSingle key={event._id} ev={ev} />
        })}
      </div>
    )
  }
}
