import React, {Component} from 'react';

export default class EventSingle extends Component {
  openEvent(event){
    event.preventDefault();
    // opens event in popup

  }

  //  <div> className="wcol">
  //    <div className="EventBox z-depth-1"></div>
  //  </div>
  render() {

    return (
      <div className="EventBox z-depth-1">
        {this.props.ev.name}
      </div>
    )
  }
}
