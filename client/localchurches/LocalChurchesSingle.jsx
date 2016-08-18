import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class LocalChurchesSingle extends TrackerReact(React.Component) {
  getContactsInfo(){
    console.log(this.props.church.contacts);
    return Contacts.find({_id:{$in:this.props.church.contacts}}).fetch();
  }

    render() {
      // Eventually, let's do the "ask for a ride" page on the public site from here
      // maybe this will be a popup or something
        return (
            <li>
              <div className="Name">
              <a href={"http://"+ this.props.church.url} target="_blank">
                {this.props.church.name}
                </a>
              </div>
              {this.props.church.times.map( (time)=>{
                return <div key={time.day+time.time}>{time.day}, {time.time}</div>
              })}
              {this.getContactsInfo().map( (contact)=>{
                return <div key={contact._id}>{contact.name}<br />{contact.phone}</div>
              })}
            </li>
        )
    }

}
