import React, {Component} from 'react';

export default class Conference extends Component {

  //  <div> className="wcol">
  //    <div className="EventBox z-depth-1"></div>
  //  </div>
  render() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let event = this.props.ev;
    //let start = new moment(this.props.ev.start.toISOString());
    return (
      <div className="card ivy-blue white-text">
        <div className="card-content">
          <span className="card-title" style={{lineHeight: "1"}}>{event.name}</span>
          <p style={{whiteSpace: "pre-wrap"}}>{event.description}</p>
          <p>{monthNames[event.start.getMonth()]} {event.start.getDate()} -
            {event.end.getMonth()!=event.start.getMonth()?monthNames[event.end.getMonth()]+" ":""} {event.end.getDate()}</p>
          <p>{event.location}</p>
        </div>
        {/*}<div className="EventBox z-depth-1">
          {this.props.ev.name}

        </div>
        <EventModal ref="modal" ev={this.props.ev} />*/}
      </div>
    )
  }
}
