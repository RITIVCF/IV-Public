import React, {Component} from 'react';
import FontSpace from '../components/FontSpace.jsx';
import ChurchSignUp from '../components/ChurchSignUp.jsx';


export default class ChurchSignUpPage extends Component {

  render(){
    return(
      <ChurchSignUp chid={this.props.chid} uid={this.props.uid} />
    )
  }
}
