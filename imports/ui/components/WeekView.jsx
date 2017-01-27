import React from 'react';
// import { Link } from 'react-router';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import EventDay from './EventDay.jsx';
import moment from "moment";
import LoaderCircle from './LoaderCircle';


export default class WeekView extends TrackerReact(React.Component) {
  constructor() {
    super();

    var dayofweek = new moment(new Date().toISOString()).isoWeekday();

    this.state = {
      start: new moment(new Date().toISOString()).subtract(dayofweek-1,"days")._d
    };


  }

  eventsLength(){
    let end = new moment(this.state.start.toISOString()).add(6,"days")._d;
    return Events.find({start: {$gte: this.state.start, $lte: end}},{_id: 1}).fetch();
  }

  getDays(){
    var days = [];
    //days.push(this.state.start._d);
    for(i=0;i<7;i++){
      days.push(new moment(this.state.start).add(i,"days")._d);
    }
    return days;

  }

  next(){
    this.setState({start: new moment(this.state.start.toISOString()).add(1, "week")._d});
  }

  prev(){
    //this.state.start = new moment(this.state.start.toISOString()).subtract(1, "week");
    this.setState({start: new moment(this.state.start.toISOString()).subtract(1, "week")._d});
  }

  render() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var end = new moment(this.state.start.toISOString()).add(6,"days")._d;
    return (
      <section id="WeekView">
        <div className="wrow WeekHeader">
          <div className="wdate container s12">
            <a onClick={this.prev.bind(this)} className="btn-floating btn-small waves-effect waves-light gold left"><i className="material-icons">keyboard_arrow_left</i></a>
            <h2>{monthNames[this.state.start.getMonth()]} {this.state.start.getDate()} -
              {end.getMonth()!=this.state.start.getMonth()?monthNames[end.getMonth()]+" ":""}{end.getDate()}</h2>
            <a onClick={this.next.bind(this)} className="btn-floating btn-small waves-effect waves-light gold right"><i className="material-icons">keyboard_arrow_right</i></a>
            <div className="clearfix"></div>
          </div>
          <div className="wcol">Monday</div>
          <div className="wcol">Tuesday</div>
          <div className="wcol">Wednesday</div>
          <div className="wcol">Thursday</div>
          <div className="wcol">Friday</div>
          <div className="wcol">Saturday</div>
          <div className="wcol">Sunday</div>
        </div>
        <div className="wrow WeekContent">
          {this.props.ready?this.eventsLength().length>0?this.getDays().map( (day)=>{
            return <EventDay key={day.getDate()} day={day} />
          }):<p style={{textAlign: "center"}}>No Events This Week</p>:<LoaderCircle />}
        </div>
      </section>
    );
  }
}
