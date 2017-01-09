import React, {Component} from 'react';
import FontSpace from '../components/FontSpace.jsx';
import SgSignUp from '../components/SgSignUp.jsx';


export default class SGSignUpPage extends Component {

  render(){
    return(
      <SgSignUp sgid={this.props.sgid} />
    )
  }
}
