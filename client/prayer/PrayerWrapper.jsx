import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import PrayerSingle from './PrayerSingle.jsx';

export default class PrayerWrapper extends TrackerReact(React.Component){
  prayermeetings(){
    weeksahead = 2;
    return Events.find({$and: [{tags: "Prayer"}, {published: true}, {end: {$gt: new Date()}},
      {start: {$lt: moment().add(weeksahead,"weeks")._d}}]}).fetch();
  }

  render(){
    return (
      <div>
        <header className="special containter">
          <span className="icon fa-globe"></span>
          <h2>We connect with God through Prayer</h2>
        </header>
        <p>Do you like talking with your best friend? We do, too. That''s
          why we have prayer meetings every Sunday evening. We have fun
          talking with God, experimenting with different ways to do so,
          and learning and growing from what He says in our conversations.
          Hang out with us and your best friend, and if God isn't your best
          friend, come and get to know Him and us better together.<br/><br/>
        Open to Everyone!</p>
      <ul className="prayer">
        {this.prayermeetings().map( (prayerevent)=>{
            return <PrayerSingle key={prayerevent._id} prayerevent={prayerevent} />
        })}
      </ul>
      </div>
    )
  }
}
