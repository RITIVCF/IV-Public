import React, {Component} from 'react';

export default class ContactUsForm extends Component {

    sendEmail(event) {
        event.preventDefault();
        console.log(this);

        //var name = this.refs.name.value.trim();
        //var email = this.refs.email.value.trim();
        //var message = this.refs.message.value.trim();

    }

    render () {
        return (
            <form className="form-contactus" onSubmit={this.sendEmail.bind(this)}>
      			  <div className="row 50%">
      					<div className="6u 12u(mobile)">
      						<input style={{width: "100%"}} type="text" ref="name" placeholder="Name" required />
      					</div>
      					<div className="6u 12u(mobile)">
      						<input style={{width: "100%"}} type="text" ref="email" placeholder="Email" required />
      					</div>
      				</div>
      				<div className="row 50%">
      					<div className="12u">
      						<textarea ref="message" placeholder="Message" rows="7" required ></textarea>
      					</div>
      				</div>
      				<div className="row">
      					<div className="12u">
      						<ul className="buttons">
      							<li>
      								<input className="button sgroup" type="submit" ref="send" value="Send Message" />
      							</li>
      						</ul>
      					</div>
      				</div>
      			</form>
            )
    }

}
