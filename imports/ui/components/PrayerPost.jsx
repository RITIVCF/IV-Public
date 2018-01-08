import React from 'react';
import PrayerUpdate from '../components/PrayerUpdate.jsx';

export default class PrayerPost extends React.Component {

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
          <a className="btn-floating btn-large waves-effect waves-light ivy-blue">
            <i className="icon-prayinghands"></i>
          </a>
          <a className="btn-floating waves-effect waves-light ivy-blue" style={{ verticalAlign: "bottom" }}>
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
