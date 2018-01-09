import React, {Component} from 'react';
import PrayerForm from '../components/PrayerForm.jsx';
import PrayerInfo from '../components/PrayerInfo.jsx';
import PrayerPost from '../components/PrayerPost.jsx';

const prayers = [
  { id: 1, name: "Caleb Weeks", content: "So Alex wanted me to fill in something so we could get a better idea of what an actual prayer request might look like. So here it is.", type: "praise", createdAt: new Date("12/31/2017"), updates: [
    { id: 7, content: "Nice! I think it's working pretty well! What do you think?", type: "praise", createdAt: new Date("01/03/2018") },
    { id: 8, content: "I know, I know... I still need to add the buttons and stuff. I'll get on it.", type: "request", createdAt: new Date("01/05/2018") }
  ] },
  { id: 2, name: "Anonymous", content: "Prayer Request", type: "praise", createdAt: new Date() },
  { id: 3, name: "Anonymous", content: "Prayer Request", type: "praise", createdAt: new Date() },
  { id: 4, name: "Anonymous", content: "Prayer Request", type: "praise", createdAt: new Date() },
  { id: 5, name: "Anonymous", content: "Prayer Request", type: "praise", createdAt: new Date() },
  { id: 6, name: "Anonymous", content: "Prayer Request", type: "praise", createdAt: new Date() }
]

export default class PrayerWall extends Component {

  constructor() {
    super();

  }

  componentWillUmount(){
    this.state.subscription.Events.stop();
  }


  render() {
    return (
      <div className="container row">
        <div className="col s12 m6 l6">
          <PrayerForm />
          <PrayerInfo />
        </div>
        <div className="col s12 m6 l6">
          {prayers.map(function(prayer) {
            return (<PrayerPost key={prayer.id} prayer={prayer} />)
          })}
        </div>
      </div>
    )
  }
}
