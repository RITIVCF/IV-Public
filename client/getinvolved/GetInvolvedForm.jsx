import React, {Component} from 'react';

import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class MemberForm extends TrackerReact(React.Component) {
  submitInterestForm(event){
    event.preventDefault();
    console.log(this);
    // render another page.
  }

    render() {
      return (
        <div>
        <h1>Learn More/GetInvolved</h1>
        <form className="publicForm" onSubmit={this.submitInterestForm.bind(this)}>
          <input type="text" ref="name" placeholder="Name" autoComplete="stop" required />
          <input type="text" ref="email" placeholder="Email" autoComplete="stop" required />
          <h2>What would you like to learn more about?<br />
            Please check all that apply...</h2>

          <label for="welcome">Welcome Team</label>
          <input ref="welcome" type="checkbox" id="welcome"></input>

          <label for="mc">Being an MC</label>
          <input ref="mc" type="checkbox" id="mc"></input>

          <label for="sg">Small Groups</label>
          <input ref="sg" type="checkbox" id="sg"></input>

          <label for="sgl">Small Group Leader</label>
          <input ref="sgl" type="checkbox" id="sgl"></input>

          <label for="sndt">Sound Team</label>
          <input ref="sndt" type="checkbox" id="sndt"></input>

          <label for="wshpt">Worship Team</label>
          <input ref="wshpt" type="checkbox" id="wshpt"></input>

          <label for="st">Strategy Team</label>
          <input ref="st" type="checkbox" id="st"></input>

          <label for="fund">IV Fundraising</label>
          <input ref="fund" type="checkbox" id="fund"></input>

          <label for="evplan">IV Event Planning</label>
          <input ref="evplan" type="checkbox" id="evplan"></input>

          <label for="rest">Resource Team</label>
          <input ref="rest" type="checkbox" id="rest"></input>

          <label for="proxe">Proxe Stations</label>
          <input ref="proxe" type="checkbox" id="proxe"></input>

          <label for="cso">Community Service Opportunities</label>
          <input ref="cso" type="checkbox" id="cso"></input>

          <label for="advt">Advertising Team</label>
          <input ref="advt" type="checkbox" id="advt"></input>

          <input type="submit"></input>
        </form>
        <a href="/about"><button>Cancel</button></a>
      </div>
      )
    }
  }
