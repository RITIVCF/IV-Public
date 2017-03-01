import React, {Component} from 'react';
import ChurchContact from './ChurchContact';

export default class Church extends Component {
  getContacts(){
    return Meteor.users.find({_id:{$in: this.props.ch.contacts}}).fetch();
  }

  render() {
    // className="ChurchBox"
    // <div className="z-depth-1">
    //   </div>
    return (
      <div className="col s12 m4 l3">
        <div className="card">
          <div className="card-content">
            <h2>{this.props.ch.name}</h2>
            <a href={"http://"+this.props.ch.url} >{this.props.ch.url}</a><br/>
            {this.props.ch.times.map((time)=>{
              return <div key={time.day+time.time} ><p>{time.day} {time.time}</p></div>
            })}
            <br/><p>Contacts:</p>
            {this.getContacts().map((contact)=>{
              return <ChurchContact key={contact._id} contact={contact} chid={this.props.ch._id} />
            })}
            {console.log(this.props.ch)}
          </div>
        </div>
      </div>
    )
  }
}
