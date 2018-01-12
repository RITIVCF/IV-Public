import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column, Card } from '/imports/ui/materialize';
import PrayerUpdate from '/imports/ui/components/PrayerUpdate';
import RequestUpdateForm from '/imports/ui/components/PrayerWall/RequestUpdateForm';

export default function RequestDetails({ requestID, request, loading }){
  if (loading) {
    return <div>Loading...</div>
  }
  const { content, name, createdAt, prayedForCount, updates } = request;
  return (
    <div>
      <Card>
        <p>{content}</p>
        <span className="right" style={{ color: "#aaa" }}>
          <i>- {name}</i><br />
        </span>
        <div style={{ clear: "both"}}></div>
        <span className="right" style={{ fontSize: "12px", color: "#aaa" }}>
          <i>{moment(createdAt).format("MMM Do YYYY")}</i>
        </span>
        {!!prayedForCount&&
          <span style={{ fontSize: "12px", color: "#aaa" }}>
            {getPrayedForText({ prayedForCount })}
          </span>
        }
        <div style={{ clear: "both"}}></div>
        {!!updates.length && updates.map( ( update, i) => {
          return (<PrayerUpdate key={i} update={update} />)
        })}
      </Card>
      <RequestUpdateForm requestID={requestID} />
    </div>
  )
}

RequestDetails.propTypes = {
  requestID: PropTypes.string,
  request: PropTypes.object,
  loading: PropTypes.bool
};


function getPrayedForText({ prayedForCount }){
  let text;

  switch ( prayedForCount ) {
    case 1:
      text = "Someone is praying for you"
      break;
    default:
      text = `${prayedForCount} people are praying for you`;
  }

  return text;
}
