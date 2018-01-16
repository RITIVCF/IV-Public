import React from 'react';
import { Switch, LoaderCircle } from '/imports/ui/materialize';
import { Audiences as AUDIENCES } from '/imports/api/PrayerRequest';

export default class PrayerForm extends React.Component {
  constructor(){
    super();

    this.defaultState = {
      status: 'closed',
      anonymous: false,
      name: '',
      email: '',
      content: '',
      audience: 'Wall'
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
        this.setState({status: 'open'});
      } else {
        this.setState({status: 'success'});
      }
    });
    this.props.onSumbit&&this.props.onSubmit({...this.state});
    this.setState({status: 'pending'});
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
    if (status == "success") {
      return <SuccessMessage />
    }
    if ( status == "pending" ) {
      return <LoaderCircle />;
    }
    let cardclass = "card prayerform " + status
    return (
      <div className={cardclass}>
        <div className="card-content">
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
            <div>
              <Row>
                <Switch
                  checked={anonymous}
                  labelOn="Anonymous"
                  onChange={this.handleAnonymousChange}
                />
                <div className="input-field col s12">
                  <input id="name" type="text" name="name" value={name} onChange={this.handleTextInputChange} disabled={anonymous} />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s12">
                  <input id="email" type="email" name="email" value={email} onChange={this.handleTextInputChange} />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="col s12">
                  <div className="">Post to</div>
                  <Audience selected={audience} onClick={this.handleAudienceChange} />
                </div>
              </Row>
              <Row>
                <div className="col s12">
                  <button className="btn waves-effect waves-light" type="submit">Submit</button>
                </div>
              </Row>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const styles = {
  open: {
    maxHeight: "none"
  },
  closed: {
    maxHeight: "150px",
    overflow: "hidden"
  },
  audience: {
    buttongroup: {
      marginBottom: "5px"
    }
  }
}

function SuccessMessage() {
  return (
    <div className="card">
      <div className="card-content">
        <span>
          Success! We care about your request. Please help us keep spammers
          from submitting to the wall by confirming your email address in
          the email we just sent you. Your post will not show on the Wall
          until your email is confirmed.
        </span>
      </div>
    </div>
  );
}

function Row({ children }) {
  return (<div className="row">{children}</div>)
}

function Audience({ selected, onClick }){
  return (
    <div>
      <div className="btn-group" style={styles.audience.buttongroup}>
        {Object.keys(AUDIENCES).map((key)=>{
          const isSelected = ( selected == key );
          let style = {...style, backgroundColor: "#1A3D6D"};
          if (isSelected) {
            style = {...style, backgroundColor: "#FCB816"};
          }
          return (
            <a className="waves-effect waves-light btn inline"
              key={key}
              type="button"
              style={style}
              onClick={()=>{onClick(key)}}>{key}</a>
            );
          })}
        </div>
      <p>{AUDIENCES[selected]}</p>
    </div>
  )
}
