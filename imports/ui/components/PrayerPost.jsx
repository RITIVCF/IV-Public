import React from 'react';
import PrayerUpdate from '../components/PrayerUpdate.jsx';

export default class PrayerPost extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      prayedFor: false,
      reported: false
    };

    this.prayedForThis = this.prayedForThis.bind(this);
    this.reportThis = this.reportThis.bind(this);
  }

  prayedForThis( event ){
    event.preventDefault();
    if (!this.state.prayedFor) {
      Meteor.call("prayForRequest", {requestID: this.props.prayer._id}, (err) => {
        if (err) {
          Materialize.toast("Something went wrong. Please try again.",5000);
        } else {
          Materialize.toast("Thanks for praying!",5000);
          this.state.prayedFor = true;
        }
      });
    }
  }

  reportThis( event ){
    event.preventDefault();
    if (!this.state.reported) {
      Meteor.call("reportPrayerRequest", {requestID: this.props.prayer._id}, (err) => {
        if (err) {
          Materialize.toast("Something went wrong. Please try again.",5000);
        } else {
          Materialize.toast("Your report has been submitted.",5000);
          this.state.reported = true;
        }
      });
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p>{this.props.prayer.content}</p>
          <span className="right" style={{ color: "#aaa" }}>
            <i>- {this.props.prayer.name}</i><br />
          </span>
          <div style={{ clear: "both"}}></div>
          <span className="right" style={{ fontSize: "12px", color: "#aaa" }}>
            <i>{moment(this.props.prayer.createdAt).format("MMM Do YYYY")}</i>
          </span>
          <a className="btn-floating btn-large waves-effect waves-light ivy-blue" onClick={this.prayedForThis}>
            <i className="icon-prayinghands"></i>
          </a>
          <a className="btn-floating waves-effect waves-light ivy-blue" style={{ verticalAlign: "bottom" }} onClick={this.reportThis}>
            <i className="icon-flag"></i>
          </a>
          <div style={{ clear: "both"}}></div>
          {!!this.props.prayer.updates && this.props.prayer.updates.map(function(update) {
            return (<PrayerUpdate key={update.id} update={update} />)
          })}
        </div>
      </div>
    );
  }
}
