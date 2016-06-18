import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import GetInvolvedForm from './GetInvolvedForm.jsx';


export default class GetInvolvedWrapper extends TrackerReact(React.Component){
  render() {
    return (
      <div>
        <GetInvolvedForm />
      </div>
    )
  }
}
