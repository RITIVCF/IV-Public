import React from 'react';
import { Random } from 'meteor/random';
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

  componentDidMount(){

  }

  prayedForThis( event ){
    event.preventDefault();
    if (!this.state.prayedFor) {
      Meteor.call("prayForRequest", {requestID: this.props.prayer._id}, (err) => {
        if (err) {
          Materialize.toast("Something went wrong. Please try again.",5000);
        } else {
          Materialize.toast("Thanks for praying! We will let this person know that someone is praying for them.", 5000);
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
          <PrayForThisButton onClick={this.prayedForThis} />
          <ReportThisButton onClick={this.reportThis} />
          <div style={{ clear: "both"}}></div>
          {!!this.props.prayer.updates && this.props.prayer.updates.map(function(update, i) {
            return (<PrayerUpdate key={i} update={update} />)
          })}
        </div>
      </div>
    );
  }
}


class PrayForThisButton extends React.Component {
  constructor() {
    super();

    this.state = {
      tooltipID: Random.id(5)
    };
  }

  componentDidMount(){
    this.initializeTooltip();
  }

  initializeTooltip(){
		$('#'+this.state.tooltipID).tooltip({
      delay: 50,
			position: "BOTTOM",
      tooltip: "I am praying for this"
    });
	}

  render() {
    const { onClick } = this.props;
    const { tooltipID } = this.state;
    return (
      <a
        id={tooltipID}
        className="btn-floating btn-large waves-effect waves-light ivy-blue"
        onClick={onClick}
      >
        <i className="icon-prayinghands"></i>
      </a>
    )
  }
}

class ReportThisButton extends React.Component {
  constructor() {
    super();

    this.state = {
      tooltipID: Random.id(5)
    };
  }

  componentDidMount(){
    this.initializeTooltip();
  }

  initializeTooltip(){
		$('#'+this.state.tooltipID).tooltip({
      delay: 50,
			position: "BOTTOM",
      tooltip: "Report this post"
    });
	}

  render() {
    const { onClick } = this.props;
    const { tooltipID } = this.state;
    return (
      <a
        id={tooltipID}
        className="btn-floating waves-effect waves-light ivy-blue"
        style={{ verticalAlign: "bottom" }}
        onClick={onClick}
      >
        <i className="icon-flag"></i>
      </a>
    )
  }
}
