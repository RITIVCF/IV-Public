import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Row, Column, TextArea, LoaderCircle } from '/imports/ui/materialize';
import { Types as TYPES } from '/imports/api/PrayerRequest';

export default class RequestUpdateForm extends React.Component {
  constructor(){
    super();

    this.state = {
      success: false,
      submitted: false,
      content: '',
      type: 'praise'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTypesClick = this.handleTypesClick.bind(this)
  }

  handleSubmit( event ){
    event.preventDefault();
    Meteor.call(
      "submitPrayerRequestUpdate",
      {
        prayerRequestID: this.props.requestID,
        content: this.state.content,
        type: this.state.type
      },
      (err) => {
        if (err) {
          Materialize.toast("Something went wrong. Please try again.",5000);
          this.setState({submitted: false});
        } else {
          this.setState({success: true});
        }
      }
    );
    this.props.onSubmit&&this.props.onSubmit({...this.state});
    this.setState({submitted: true});
  }

  render() {
    const { content, type, submitted, success } = this.state;
    if ( success ) {
      return (<span>Success!</span>);
    }
    if ( submitted ) {
      return <LoaderCircle />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Have an update to this request?</h4>
        <Row>
          <TextArea
            value={content}
            onChange={this.handleContentChange}
            name="content"
            placeholder="Enter update here..."
          />
        </Row>
        <Row>
          <Types
            selected={type}
            onClick={this.handleTypesClick}
          />
        </Row>
        <Row>
          <Column>
            <button className="btn waves-effect waves-light" type="submit">
              Submit
            </button>
          </Column>
        </Row>
      </form>
    );
  }

  handleContentChange( value ) {
    this.setState({content: value});
  }

  handleTypesClick( type ) {
    this.setState({type: type});
  }
}

RequestUpdateForm.propTypes = {
  requestID: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};


function Types({ selected, onClick }){
  return (
    <Column size="s12 m6">
      <div className="btn-group">
        {Object.keys(TYPES).map((key)=>{
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
              onClick={()=>{onClick(key)}}
              >
                {key}
              </a>
            );
          })}
      </div>
    </Column>
  )
}

Types.propTypes = {
  selected: PropTypes.string,
  onClick: PropTypes.func
};
