import React, {Component} from 'react';

export default class ChurchContact extends Component {
  askRide(){
    FlowRouter.go("/churchsignup/"+this.props.chid+"/"+this.props.contact._id);
  }

  render() {
    let contact = this.props.contact;
    return (
      <p>
        {contact.name}<br/>
      <a href={"/churchsignup/"+this.props.chid+"/"+this.props.contact._id}
        >{contact.emails[0].address}</a>
      </p>
    )
  }
}
