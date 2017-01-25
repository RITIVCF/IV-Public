import React, {Component} from 'react';

export default class ChurchSignUp extends Component {
  constructor(props){
    super(props);
    var ch = Churches.findOne(props.chid);
    var user = Meteor.users.findOne(props.uid);
    this.state ={
      defaultMessage: "Hi "+user.name+"! I would like to receive a ride to " + ch.name+"."
    };
  }

  componentDidMount(){
    Materialize.updateTextFields();
  }

  submit(event){
    event.preventDefault();
    //console.log(this.refs.email.value, this.refs.name.value, this.refs.message.value);
    var refs = this.refs;
    Meteor.call("churchEmail",refs.name.value.trim(),refs.email.value.trim(),refs.message.value.trim(), this.props.uid, this.props.chid, function(error){
      if(error){
        Materialize.toast("Sorry, something went wrong. Please try again.",4000);
        console.log(error);
      }
      else{
        Materialize.toast("Success!", 4000);
        setTimeout(function(){
          FlowRouter.go("/churches");
        },1000);
      }
    });
    Materialize.toast("Thanks letting us know. Please wait while we confirm your submission.", 4000);
  }

  render() {
    let group = this.props.group;

    return (
      <section id="ContactForm" className="container row">
        <div className="row">
          <div className="col s12">
            <form onSubmit={this.submit.bind(this)}>
              <div className="input-field">
                <input type="text" ref="name" id="signupname" className="validate" required />
                <label htmlFor="signupname">Name</label>
              </div>
              <div className="input-field">
                <input type="email" ref="email" id="signupemail" className="validate" required />
                <label htmlFor="signupemail">Email</label>
              </div>
              <div className="input-field">
                <textarea ref="message" id="sgmessage" className="materialize-textarea" defaultValue={this.state.defaultMessage} />
                <label id="sgmessage">Message</label>
              </div>
              <input type="submit" className="btn" value="Send" />
            </form>
          </div>
        </div>
      </section>
    )
  }
}
