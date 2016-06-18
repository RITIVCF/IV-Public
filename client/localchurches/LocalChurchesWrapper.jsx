import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LocalChurchesSingle from './LocalChurchesSingle.jsx';


Churches = new Mongo.Collection('churches');

export default class LocalChurchesWrapper extends TrackerReact(React.Component){
  constructor() {
    super();

    this.state = {
      subscription: {
        Churches: Meteor.subscribe("activeChurches")
      }
    };
  }

  componentWillUnmount() {
    this.state.subscription.Churches.stop();
  }

  localchurches(){
    return Churches.find().fetch();
  }

  render(){

    return (
      <div>
        <header className="special containter">
          <span className="icon fa-globe"></span>
          <h2>We go to local churches on Sundays</h2>
        </header>
        <p>Feel free to check out the church website by clicking on the name or
         reaching out one of the contacts by clicking on their name or giving them a
        call!</p>
        <ul>
          {this.localchurches().map( (church)=>{
              return <LocalChurchesSingle key={church._id} church={church} />
          })}
        </ul>
      </div>
    )
  }
}
