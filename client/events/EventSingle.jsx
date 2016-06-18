import React, {Component} from 'react';

export default class EventSingle extends Component {
  openEvent(event){
    event.preventDefault();
    // opens event in event workspace

  }
  render() {

    return (
      <li>
        {this.props.ivevent.name}
      </li>
    )
  }
}
