import React from 'react';
import PrayerGroup from '../components/PrayerGroup.jsx';
import PrayerEvents from '../components/PrayerEvents.jsx';

export default class PrayerInfo extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <PrayerGroup /> */}
          <PrayerEvents />
        </div>
      </div>
    );
  }
}
