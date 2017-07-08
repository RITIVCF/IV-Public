import React, {Component} from 'react';

export default class SG extends Component {

  openModal(){
    this.refs.modal.open();
  }

  getLeader(){
    return Meteor.users.findOne(this.props.sg.leader[0]);
  }

  render() {
    var ldr = this.getLeader();
    return (
      <div className="col s12 m6 l3">
        <div className="card">
          <div className="card-content">
            <h3>{this.props.sg.name}</h3>
            <p><b>Leader: </b>{ldr.name}</p>
            <p>{/*Email: */}{ldr.emails[0].address}</p>
            <a href={"/sgsignup/"+this.props.sg._id} className="btn" >I'm interested!</a>
          {/*}  <p>Where: {this.props.sg.location}</p>
        <p>When: {this.props.sg.time}</p>*/}
          </div>
        </div>
      </div>
    )
  }
}
