import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { Link } from 'react-router';

export default class WhyWeDo extends React.Component {
  render() {
    return (
      <section className="WhyWeDo">
        <div className="band"><span><img src="/images/largegroup_1.jpg" /></span></div>
        <section>
          <h2>Large Group</h2>
          The whole chapter gathers for worship and to discuss about topics relevant
          to our lives. If you want to check out our community, you should definitely
          come to large group. After the main event, we always have special after
          events which range from movie nights to rock climbing at the red barn. Come
          for a great night of fellowship!
        </section>
        <div className="band"><span>
          <img src="/images/basileiacrowd.jpg" />
        </span></div>
        <section>
          <h2>Small Groups</h2>
          Small groups at RIT create an opportunity for us to grow in our
          relationships with others, study the Bible, learn more about living
          like Jesus, and challenge each other to take next steps in response
          to what we learn together. Small groups are a great place to jump in
          if you are new to InterVarsity! Most groups meet weekly and are a
          fantastic way to connect with a group of people who are all invested
          in growing together.
        </section>
        <div className="band"><span>
          <img src="/images/basileiaworship.jpg"></img>
        </span></div>
        <section>
          <h2>Prayer</h2>
          Do you like talking with your best friend? We do, too. That's why we
          have prayer meetings every Sunday evening. We have fun talking with
          God, experimenting with different ways to do so, and learning and growing
          from what He says in our conversations. Hang out with us and your best
          friend, and if God isn't your best friend, come and get to know Him
          and us better together.
        </section>
        <div className="band Conferences"><span></span></div>
        <section>
          <h2>Conferences</h2>
          This is a bunch of text describing why we do what we do!
        </section>
        <div className="band SocialEvents"><span></span></div>
        <section>
          <h2>Social Events</h2>
          This is a bunch of text describing why we do what we do!
        </section>
        <div className="band Churches"><span></span></div>
        <section>
          <h2>Churches</h2>
          This is a bunch of text describing why we do what we do!
        </section>
      </section>
    );
  }
}
