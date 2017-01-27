import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { Link } from 'react-router';

export default class WhyWeDo extends React.Component {
  render() {
    return (
      <section className="WhyWeDo">
        <div className="band LargeGroup"><span></span></div>
        <section>
          <h2>Large Group</h2>
          <p>The whole chapter gathers for worship and to discuss topics relevant to our lives. If you want to check out our community, you should definitely come to Large Group. After the main event, we always have special after events which range from movie nights to rock climbing at the red barn. Come for a great night of fellowship!</p>
        </section>
        <div className="band SmallGroups"><span></span></div>
        <section>
          <h2>Small Groups</h2>
          <p>Small Groups at RIT create an opportunity for us to grow in our relationships with others, study the Bible, learn more about living like Jesus, and challenge each other to take next steps in response to what we learn together. Small Groups are a great place to jump in if you are new to InterVarsity! Most groups meet weekly and are a fantastic way to connect with a group of people who are all invested in growing together.</p>
        </section>
        <div className="band Prayer"><span></span></div>
        <section>
          <h2>Prayer</h2>
          <p>Do you like talking with your best friend? We do, too. That is why we have prayer meetings every Sunday evening. We have fun talking with God, experimenting with different ways to do so, and learning and growing from what He says in our conversations. Hang out with us and your best friend, and if God is not your best friend, come and get to know Him and us better together.</p>
        </section>
        <div className="band Conferences"><span></span></div>
        <section>
          <h2>Conferences</h2>
          <p>Conferences provide us with experiences we do not often have anywhere else. They are chances to be immersed in our study of God’s word and the loving people around us. No classes, no work, no distractions. Just love, learning, community, and fun. Some regular conferences we attend include Act in October, Urbana in St. Louis every three years, NYCUP (New York City Urban Project) over spring break, and Basileia in May. Each one will challenge you to grow in ways you would not expect. Each one will change you. No matter your background, or where you are in terms of faith, you are welcome to come and we invite you to join us.</p>
        </section>
        <div className="band SocialEvents"><span></span></div>
        <section>
          <h2>Social Events</h2>
          <p>We have been given the wonderful gift of each other, and for that, we like to celebrate!  Whether it be through serving the campus or just hanging out, spending time with each other is important. We create friendships that will last a lifetime, and we want you to be a part of it, too.</p>
        </section>
        <div className="band Churches"><span></span></div>
        <section>
          <h2>Churches</h2>
          <p>The Bible calls us to be in Christian communities and worship together, and church is a very important part of that. More than singing songs and listening to someone preach, church is a family of supportive, caring people who help each other grow in their walk with Christ and the rest of their daily lives. We believe it is of the utmost importance to provide students the opportunity to check out and join various churches off campus, so we provide rides. We have many members who attend different churches of different denominations in the area, and we offer carpooling rides to anyone who asks. <a href="/churches">Will you try one?</a></p>
        </section>
      </section>
    );
  }
}
