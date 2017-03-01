import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Conference from './Conference.jsx';
import moment from "moment";
import LoaderCircle from './LoaderCircle';


export default class Conferences extends TrackerReact(React.Component) {
  constructor() {
    super();
  }

  getConferences(){
    //return Events.find({$and:[{tags: "Conference"}, {start: {$gt: new moment(new Date().toISOString())._d}}]}).fetch();
    return Events.find({tags: "Conference", start: {$gt: new moment(new Date().toISOString())._d}},{sort: {start: 1}}).fetch();
  }

  render() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    return (
      <section>
        <div className="wrow WeekHeader">
          <h2>Conferences</h2>
        </div>
        <div className="wrow WeekContent">
          <div className="container">
            <div className="container">
              {this.props.ready?this.getConferences().length!=0?this.getConferences().map( (event)=>{
                return <Conference key={event._id} ev={event} />
              }):<p style={{textAlign: "center"}}>No Upcoming Conferences</p>:<LoaderCircle />}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
