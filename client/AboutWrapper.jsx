import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class AboutWrapper extends TrackerReact(React.Component){
  render(){
    return (
      <article id="main">
        <header className="special containter">
          <span className="icon fa-globe"></span>
          <h2>About <strong>IVCF</strong></h2>
        </header>
        <section id="missionvision" class="wrapper style3 container special">
          <div className="content">
            <section>
              <header>
                <h2><b>Our Vision</b></h2>
              </header>
              <div className="row">
                <div className="4u">
                  <section>
                    <a>
                      <span className="icon feature fa-users"></span>
                      <header align="center">
                        <h3>Students and Faculty<br /><strong>Transformed</strong></h3>
                      </header>
                    </a>
                  </section>
                </div>
                <div className="4u">
                  <section>
                    <a>
                      <span className="icon feature fa-building-o"></span>
                      <header align="center">
                        <h3>Campuses<br /><strong>Renewed</strong></h3>
                      </header>
                    </a>
                  </section>
                </div>
                <div className="4u">
                  <section>
                    <a>
                      <span className="icon feature fa-globe"></span>
                      <header align="center">
                        <h3>World Changers<br /><strong>Developed</strong></h3>
                      </header>
                    </a>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="wrapper style3 container special">
          <section>
            <header align="center">
              <h2><b>Our Mission</b></h2>
            </header>
            <p>
              In response to God's love, grace, and truth: The Purpose of
              InterVarsity Christian Fellowship/USA is to establish and
              advance at colleges and universities witnessing communities of
              students and faculty who follow Jesus as Savior and Lord: growing
              in love for God, God's Word, God's people of every ethnicity and
              culture and God's purposes in the world.
            </p>
          </section>
        </section>
        <section className="wrapper style3 container special">
          <section>
            <header align="center">
              <h2><b>Our History</b></h2>
            </header>
            <p>
              The roots of our movement are with students at the University of
              Cambridge, England in 1877. There, a group of Christian students
              began to meet together, in spite of the disapproval of some
              University officials, to pray, to study the Bible and to witness
              to fellow students. Soon, similar groups sprang up on other campuses.
              Eventually, they formed the British Inter-Varsity. (Hence our name,
              inter – meaning between, varsity – the British term for college
              level students.) From the very beginning they had a strong concern
              to take the gospel to those all over the world who had never heard
              it – a concern that continues in InterVarsity today. Evangelism and
              discipleship are hallmarks of InterVarsity's campus ministry.
            </p>
            <p>
              Click below to learn more about InterVarsity:
            </p>
            <a href="https://intervarsity.org/about/our/ministry-overview" target="_blank">IV National</a>
          </section>
        </section>
      </article>
    )
  }
}
