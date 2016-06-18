import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class PrayerRequest extends TrackerReact(React.Component){

  render() {
    return (
      <div id="card" className="card">
        <div className="front">
          <h1>Prayer Requests</h1>
          <h2>How can we pray for you?</h2>
          <form className="publicForm">
            <label for="name">Name</label>
            <input name="name" ref="name" type="text" />
            <label for="email">Email</label>
            <input name="email" ref="email" type="text" />
            <label for="request">Prayer Request</label>
            <textarea name="request" >Prayer request....</textarea>
          </form>
        </div>
      </div>
    )
  }
}
