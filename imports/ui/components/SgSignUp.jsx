import React, {Component} from 'react';

export default class SgSignUp extends Component {
  constructor(props){
    super(props);
    var sg = Groups.findOne(props.sgid);
    var ldr = Meteor.users.findOne(sg.leader);
    this.state ={
      defaultMessage: "Hi "+ldr.name+"! I would like to learn more about joining the "
      + sg.name +" small group. "
    };
  }

  componentDidMount(){
    Materialize.updateTextFields();
  }

  submit(event){
    event.preventDefault();
    console.log(this.refs);
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
            </form>
            <input type="submit" className="btn" value="Send" />
          </div>
        </div>
      </section>
    )
  }
}
