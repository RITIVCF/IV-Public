import React, {Component} from 'react';

export default class Church extends Component {
  openEvent(event){
    event.preventDefault();
    // opens event in popup

  }

  getContacts(){
    return Contacts.find({_id:{$in: this.props.ch.contacts}}).fetch();
  }

  render() {
    return (
      <div className="ChurchBox">
        <div className="z-depth-1">
        <h2>{this.props.ch.name}</h2>
        <a href={"http://"+this.props.ch.url} >{this.props.ch.url}</a>
        {this.props.ch.times.map((time)=>{
          return <div key={time.day+time.time} ><p>{time.day} {time.time}</p></div>
        })}
        <p>Contacts:</p>
        {this.getContacts().map((contact)=>{
          return <div key={contact._id}><p>{contact.name}<br />{contact.email}</p></div>
        })}
        {console.log(this.props.ch)}
      </div>
      </div>
    )
  }
}
