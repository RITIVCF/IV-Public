import React from 'react';
import { Switch } from '/imports/ui/materialize';
import { Audiences as AUDIENCES } from '/imports/api/PrayerRequest';

export default class NewRequestForm extends React.Component {
  constructor(){
    super();

    this.defaultState = {
      status: 'closed',
      submitted: false,
      anonymous: false,
      name: '',
      email: '',
      content: '',
      audience: ''
    };

    this.state = {...this.defaultState};

    this.handleRequestFocus = this.handleRequestFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnonymousChange = this.handleAnonymousChange.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleAudienceChange = this.handleAudienceChange.bind(this);
  }

  componentDidUpdate(){
    Materialize.updateTextFields();
  }

  handleRequestFocus(){
    this.setState({status: 'open'});
  }

  handleSubmit( event ){
    event.preventDefault();
    Meteor.call("submitPrayerRequest", {...this.state}, (err) => {
      if (err) {
        Materialize.toast("Something went wrong. Please try again.",5000);
      } else {
        this.setState({status: 'submitted'});
      }
    });
    this.props.onSumbit&&this.props.onSubmit({...this.state});
  }

  handleAnonymousChange(){
    this.setState({anonymous: !this.state.anonymous});
  }

  handleTextInputChange( event ) {
    let update = {};
    update[event.target.name] = event.target.value;
    this.setState({...update});
  }

  handleAudienceChange( audienceKey ){
    this.setState({audience: audienceKey});
  }

  render() {
    const { anonymous, name, email, audience, status } = this.state;
    if (status == "submitted") {
      return <SuccessMessage />
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="requestBody"
              className="materialize-textarea"
              name="content"
              onFocus={this.handleRequestFocus}
              onChange={this.handleTextInputChange}
            ></textarea>
            <label htmlFor="requestBody">New Prayer Request</label>
          </div>
        </div>
        {status == "open"&&
          <div>
            <Row>
              <Switch
                checked={anonymous}
                labelOn="Anonymous"
                onChange={this.handleAnonymousChange}
              />
              {!anonymous&&
                <div className="input-field col s12">
                  <input id="name" type="text" name="name" value={name} onChange={this.handleTextInputChange} />
                  <label htmlFor="name">Name</label>
                </div>
              }
              <div className="input-field col s12">
                <input id="email" type="email" name="email" value={email} onChange={this.handleTextInputChange} />
                <label htmlFor="email">Email</label>
              </div>
              <div className="col s12">
                <div className="col s12 m6">Post to</div>
                <Audience selected={audience} onClick={this.handleAudienceChange} />
              </div>
            </Row>
            <Row>
              <div className="col s12">
                <button type="submit">Submit</button>
              </div>
            </Row>
          </div>
        }
      </form>
    );
  }
}

function SuccessMessage() {
  return (
    <span>
      Success! Please check your inbox to confirm your email address.
      We cannot post your request until your email is confirmed.
    </span>
  );
}

function Row({ children }) {
  return (<div className="row">{children}</div>)
}

function Audience({ selected, onClick }){
  return (
    <div className="col s12 m6">
      {Object.keys(AUDIENCES).map((key)=>{
        const isSelected = ( selected == key );
        let style = {};
        if (isSelected) {
          style = {...style, backgroundColor: 'blue'};
        }
        return (
          <button
            key={key}
            type="button"
            title={AUDIENCES[key]}
            style={style}
            onClick={()=>{onClick(key)}}
          >
            {key}
          </button>
        );
      })}
    </div>
  )
}
