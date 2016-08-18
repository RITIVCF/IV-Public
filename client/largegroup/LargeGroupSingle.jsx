import React, {Component} from 'react';

export default class LargeGroupSingle extends Component {
    render() {
        return (
            <li>
              <div className="name">{this.props.lgevent.name}</div>
              <div className="day">{moment(this.props.lgevent.start).format("ddd MMM DD")}</div>
              <div className="time">{moment(this.props.lgevent.start).format("h:mm a")}</div>
              <div className="description">{this.props.lgevent.description}</div>
              <div className="location">{this.props.lgevent.location}</div>
            </li>
        )
    }
}
