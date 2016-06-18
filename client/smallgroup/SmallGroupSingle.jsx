import React, {Component} from 'react';

export default class SmallGroupSingle extends Component {
    render() {
        return (
            <li>
              <div className="name">{this.props.smallgroup.name}</div>
              <div className="location">{this.props.smallgroup.location}</div>
            </li>
        )
    }

}
