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
      <a href="#" onClick={this.askRide.bind(this)}>{contact.emails[0].address}</a>
      </p>
    )
  }
}
