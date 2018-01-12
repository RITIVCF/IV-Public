import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import PrayerForm from '../components/PrayerForm.jsx';
import PrayerInfo from '../components/PrayerInfo.jsx';
import PrayerPost from '../components/PrayerPost.jsx';
import LoaderCircle from './LoaderCircle';

export default class PrayerWall extends TrackerReact(React.Component) {

  constructor() {
    super();

    this.state ={
      subscription: {
        PrayerRequests: Meteor.subscribe("postedPrayers")
      }
    };

  }

  componentWillUmount(){
    this.state.subscription.PrayerRequests.stop();
  }

  getPrayerRequests() {
    return PrayerRequests.find({}, {sort: {createdAt: -1}}).fetch();
  }

  render() {
    let ready=this.state.subscription.PrayerRequests.ready();
    return (
      <div className="container row">
        <div className="col s12 m6 l6">
          <PrayerForm />
          <PrayerInfo />
        </div>
        <div className="col s12 m6 l6">
          {ready?this.getPrayerRequests().length!=0?this.getPrayerRequests().map((prayer)=>{
            return (
              <PrayerPost key={prayer._id} prayer={prayer} />
            )
          }):<p style={{textAlign: "center"}}>No posted prayer requests</p>:<LoaderCircle />}
        </div>
      </div>
    )
  }
}
