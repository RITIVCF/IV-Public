import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LargeGroupSingle from './LargeGroupSingle.jsx';


//Events = new Mongo.Collection("events");

export default class LargeGroupWrapper extends TrackerReact(React.Component){
  constructor() {
    super();

    this.state = {
      subscription: {
        Events: Meteor.subscribe("largeGroups")
      }
    };
  }

  componentWillUnmount() {
    this.state.subscription.Events.stop();
  }

  largegroups() {
    return Events.find({tags:"Large Group"}).fetch();


    //{tags: "Large Group"}
  }

  render(){
    return (
      <div>
        <header className="special containter">
          <span className="icon fa-globe"></span>
          <h2>We Fellowship at Large Group</h2>
        </header>
        <p>The whole chapter gathers for worship and to discuss about
          topics relevant to our lives. If you want to check out our
          community, you should definitely come to large group. After
          the main event, we always have special after events which
          range from movie nights to rock climbing at the red barn.
          Come for a great night of fellowship! <br/><br/>Open to
          Everyone!</p>
        <ul className="largegroups">
          {this.largegroups().map( (lgevent)=>{
              return <LargeGroupSingle key={lgevent._id} lgevent={lgevent} />
          })}
        </ul>

      </div>
    )
  }
}
