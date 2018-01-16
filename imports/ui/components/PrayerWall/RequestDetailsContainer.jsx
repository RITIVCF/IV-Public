import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import RequestDetails from './RequestDetails';

export default withTracker(({ requestID }) => {
  const sub = Meteor.subscribe( 'PrayerRequest.single', requestID );
  const isLoading = !sub.ready();
  const request = getRequest({ requestID });
  return {
    request: request,
    loading: isLoading
  }
})(RequestDetails);

function getRequest({ requestID }){
  return PrayerRequests.findOne( requestID );
}
