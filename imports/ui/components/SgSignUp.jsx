import React, {Component} from 'react';

export default class SgSignUp extends Component {
  constructor(props){
    super(props);
    var sg = Groups.findOne(props.sgid);
    var ldr = Meteor.users.findOne(sg.leader);
    this.state ={
      smallGroup: sg,
      defaultMessage: "Hi "+ldr.name+"! I would like to learn more about joining the "
      + sg.name +" small group. "
    };
  }

  componentDidMount(){
    Materialize.updateTextFields();
  }

  submit(event){
    event.preventDefault();
    //console.log(this.refs.email.value, this.refs.name.value, this.refs.message.value);
    var refs = this.refs;
    Meteor.call("sgEmail",refs.name.value.trim(),refs.email.value.trim(),refs.message.value.trim(), this.props.sgid, function(error){
      if(error){
        Materialize.toast("Sorry, something went wrong. Please try again.",4000);
      }
      else{
        Materialize.toast("Success!", 4000);
        setTimeout(function(){
          FlowRouter.go("/gatherings");
        },1000);
      }
    });
    Materialize.toast("Thanks for your interest. Please wait while we confirm your submission.",4000);
  }

  render() {
    let group = this.props.group;

    return (
      <section id="ContactForm" className="container row">
        <div className="row">
          <div className="col s12">
            <form onSubmit={this.submit.bind(this)}>
              <div className="input-field col s12">
                <input type="text" ref="name" id="signupname" className="validate" required />
                <label htmlFor="signupname">Name</label>
              </div>
              <div className="input-field col s12">
                <input type="email" ref="email" id="signupemail" className="validate" required />
                <label htmlFor="signupemail">Email</label>
              </div>
              <div className="input-field col s12">
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
