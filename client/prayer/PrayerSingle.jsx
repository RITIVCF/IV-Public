import React, {Component} from 'react';

export default class PrayerSingle extends Component {
    render() {
        return (
            <li>
              <div className="name">{this.props.prayerevent.name}</div>
              <div className="time">{moment(this.props.prayerevent.start).format("h:mm a")}</div>
              <div className="day">{moment(this.props.prayerevent.start).format("DD")}</div>
              <div className="location">{this.props.prayerevent.location}</div>
            </li>
        )
    }

}
