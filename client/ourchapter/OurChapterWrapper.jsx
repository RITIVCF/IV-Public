import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import BioSingle from './BioSingle.jsx';

//Bios = new Mongo.Collection('bios');

export default class OurChapterWrapper extends TrackerReact(React.Component){
  constructor() {
    super();

    this.state = {
      subscription: {
        Bios: Meteor.subscribe("allBios")
      }
    };
  }

  componentWillUnmount() {
    this.state.subscription.Bios.stop();
  }

  bios(){
    return Bios.find().fetch();
  }

  render(){
    return (
      <div>
        <header className="special container">
          <span className="icon fa-map-maker"></span>
          <h2>Our RIT <strong>Chapter</strong></h2>
        </header>

        <p>
          RIT InterVarsity is a group that strives to bring Jesus to the
          students of RIT. We are a group of diverse students who are
          welcoming, inviting, driven, and eager to meet new people.
          We exist to see students and faculty transformed, campuses
          renewed, and world changers developed. We strive to address
          current, relative issues in the lives of RIT students, in
          particular the isolation that is so often felt on campus, and
          the incredible importance that we place on academic success
          and job placement as an assurance of future security.	Our goal,
          in response to God's love, grace, and truth, is to be and
          advance a witnessing community of students and faculty at RIT
          who follow Jesus as Savior and Lord. We desire to grow in love
          for God, God's Word, God's people of every ethnicity and culture,
          and God's purposes in the world.
        </p>
        <div style={{clear: 'both'}}></div>
        <div className="content">
          <section>
            <h2 style={{marginTop: 1+"em"}}>Meet our <strong>Servant Team</strong></h2>
            {/*<img alt="IVCF Servant Team" width="100%" />*/}
          </section>
          <section>
            <p>
              Servant team is a group of InterVarsity's members who are
              committed to the vision of InterVarsity and who work towards
              bringing that vision to life on campus. Servant team is made
              up of multiple members who use their particular skills to help
              lead the necessary functions in InterVarsity such as large group
              coordinating, small groups leadering, outreach planning, resource
              management, and so on. Though the team is still a group of flawed
              people who are not perfect, they are committed to seeing God's
              will be brought to campus, helping the campus experience Jesus,
              and helping InterVarsity to grow.
            </p>
          </section>
          {this.bios().map( (bio)=>{
              return <BioSingle key={bio._id} bio={bio} />
          })}
        </div>
      </div>
    )
  }
}
