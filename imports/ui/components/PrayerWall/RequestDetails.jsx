import React from 'react';
import { Random } from 'meteor/random';
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
        <DeleteButton requestID={requestID} />
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


class DeleteButton extends React.Component {
  constructor(){
    super();

    this.state = {
      id: Random.id(5)
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    const options = {
      tooltip: "Delete Request",
      delay: 50,
      position: "BOTTOM"
    }
    $('#'+this.state.id).tooltip(options);
  }

  handleDelete(){
    const confirmText = "Are you sure? This cannot be undone.";
    if ( window.confirm( confirmText ) ) {
      Meteor.call(
        "deletePrayerRequest",
        {
          requestID: this.props.requestID,
        },
        (err) => {
          if (err) {
            Materialize.toast("Something went wrong. Please try again.",5000);
          } else {
            FlowRouter.go("/prayer");
          }
        }
      );
    }

  }

  render(){
    return (
      <i
        id={this.state.id}
        className="material-icons right"
        onClick={this.handleDelete}
        style={{cursor: 'pointer'}}
      >
        delete
      </i>
    )
  }
}

DeleteButton.propTypes = {
  requestID: PropTypes.string.isRequired
};
