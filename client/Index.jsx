import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import UpcomingEventsWrapper from './events/UpcomingEventsWrapper.jsx';


export default class IndexWrapper extends TrackerReact(React.Component){
  render(){
    return (
      <div>
        <section id="banner">
          <div className="inner">
            <header></header>
            <br />
            <p>Intervarsity Christian Fellowship<br/>
    		      at Rochester Institute of Technology<br/><br/>
    	     </p>
          </div>
        </section>
        <article id="main">

          <header id="mission" class="special container">
      		<span className="icon fa-book"></span>
      		<h2>
      			<strong>We are </strong> a vibrant campus ministry that establishes and <br />advances witnessing communities of students and faculty.</h2>
      			<p>We minister to students and faculty through small group Bible studies, large gatherings on campus, leadership training, thoughtful discipleship and life-changing conferences and events.</p>
      		</header>


      		<section class="wrapper style1 container special">
      			<h2><b>Our Vision</b></h2>
      			<div className="row">
      				<div className="4u">
      					<a href="/about">
      						<section>
      							<span className="icon feature fa-users"></span>
      							<header>
      								<h3>Students and Faculty <br/><strong>Transformed</strong></h3>
      							</header>
      						</section>
      					</a>
      				</div>
      				<div className="4u">
      					<section>
      						<a href="/about">
      							<span className="icon feature fa-building-o"></span>
      							<header>
      								<h3>Campuses<br/><strong> Renewed</strong></h3>
      							</header>
      						</a>
      					</section>
      				</div>
      				<div className="4u">
      					<section>
      						<a href="/about">
      							<span className="icon feature fa-globe"></span>
      							<header>
      								<h3>World Changers <br/><strong>Developed</strong></h3>
      							</header>
      						</a>
      						<br />
      					</section>
      				</div>
      			</div>
      		</section>

          <section id="upcoming events">
            <UpcomingEventsWrapper />
          </section>

      		<section id="basileia" className="wrapper style2 container special-alt">
      			<h2 align="center">
      				Basileia
      			</h2>
      			<p>
      				Basileia is Greek for “kingdom” — the kingdom of God! We’ve named our summer training “Basileia” because we want to deepen our knowledge of Jesus Christ as King and to improve our capacity to be his ambassadors. Basileia is a week-long, multi-track conference designed so that your whole campus fellowship can attend and benefit. Some tracks emphasize leadership training, and others discipleship. For all, Basileia is a time for worshiping God, studying Scripture, deepening your vision, and strengthening your faith.
      				<br /><br />
      				This year we will be going from May 21st to May 26th (Week 2).  Further, if you wish to
      				have get a discount you can sign up for work crew the week following (May 27th -
      				June 1st, Week 3).
      				<br /><br />
      				We hope to see you there! To find out more click below:
      			</p>
      		  <footer>
      		    <ul className="buttons" align="center">
                <li><a href="http://ivcfnynj.org/events/basileia/" className="button"><i className="fa fa-signpost-o"></i>More Info</a></li>
      			    <li><a href="http://tinyurl.com/regbas16/" className="button"><i className="fa fa-signpost-o"></i>Register</a></li>
      		    </ul>
            </footer>
      	  </section>
        </article>
      </div>
    )
  }
}
