import React, {Component} from 'react';

export default class LargeGroupSingle extends Component {
    render() {
        return (
            <li>
              <div className="name">{this.props.lgevent.name}</div>
              <div className="description">{this.props.lgevent.description}</div>
              <div className="datetime">{this.props.lgevent.start.toDateString()}</div>
              <div className="location">{this.props.lgevent.location}</div>
            </li>
        )
    }
}
