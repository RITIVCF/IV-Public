import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Row, Column, TextArea } from '/imports/ui/materialize';
import { Types as TYPES } from '/imports/api/PrayerRequest';

export default class RequestUpdateForm extends React.Component {
  constructor(){
    super();

    this.state = {
      submitted: false,
      content: '',
      type: 'request'
    }

    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTypesClick = this.handleTypesClick.bind(this)

  }

  // componentDidUpdate(){
  //   Materialize.updateTextFields();
  // }

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
        } else {
          this.setState({submitted: true});
        }
      }
    );
    this.props.onSubmit&&this.props.onSubmit({...this.state});
  }

  render() {
    const { content, type, submitted } = this.state;
    if ( submitted ) {
      return (<span>Success!</span>);
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <TextArea
            value={content}
            onChange={this.handleContentChange}
            name="content"
            label="New Request Update"
          />
        </Row>
        <Row>
          <Types
            selected={type}
            onClick={this.handleTypesClick}
          />
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
  requestID: PropTypes.string,
  onSubmit: PropTypes.func,
};


function Types({ selected, onClick }){
  return (
    <Column size="s12 m6">
      {Object.keys(TYPES).map((key)=>{
        const isSelected = ( selected == key );
        let style = {};
        if (isSelected) {
          style = {...style, backgroundColor: 'blue'};
        }
        return (
          <button
            key={key}
            type="button"
            title={TYPES[key]}
            style={style}
            onClick={()=>{onClick(key)}}
          >
            {key}
          </button>
        );
      })}
    </Column>
  )
}

Types.propTypes = {
  selected: PropTypes.string,
  onClick: PropTypes.func
};
