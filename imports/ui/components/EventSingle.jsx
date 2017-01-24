import React, {Component} from 'react';
import EventModal from './EventModal.jsx';

export default class EventSingle extends Component {
  openEvent(event){
    event.preventDefault();
    // opens event in popup
    this.refs.modal.open();
  }

  //  <div> className="wcol">
  //    <div className="EventBox z-depth-1"></div>
  //  </div>
  render() {
    let start = new moment(this.props.ev.start.toISOString());
    return (
      <div className="card" onClick={this.openEvent.bind(this)}>
        <div className="card-content">
          <span className="card-title" style={{lineHeight: "1"}}>{this.props.ev.name}</span>

          <p>{start.format("DD MMM YYYY")} @ {start.format("h:mm A")}</p>
          <p>{this.props.ev.location}</p>
        </div>
        {/*}<div className="EventBox z-depth-1">
          {this.props.ev.name}

        </div>
        <EventModal ref="modal" ev={this.props.ev} />*/}
      </div>
    )
  }
}
