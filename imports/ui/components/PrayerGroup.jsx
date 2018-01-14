import React from 'react';

export default class PrayerGroup extends React.Component {

  render() {
    return (
      <div style={styles.container}>
        <div style={{flex: 3}}>
          <p>
            At InterVarsity we believe that God wants to be a part of our lives.
            He has given us the powerful tool of prayer to be able to communicate
            with Him and invite Him into the different areas of our lives. The
            purpose of the prayer group is to establish a community committed to
            praying for the needs of others and keeping God actively involved in
            what we are doing.
            {/* The prayer group keeps everyone in the group
            updated on the prayer requests of the chapter. When prayer requests
            are posted on the wall or shared to the group, the rest of the group
            is alerted so that these prayer requests are being lifted to the one
            and only God who has power over all things. The members of the group
            can then indicate that they have prayed for these requests. All are
            welcome and encouraged to join! */}
          </p>
        </div>
        <div style={styles.box}>
          <a className="waves-effect waves-light btn" href="http://ivy.rit.edu/prayergroup/join">Join the prayer group</a>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row"
  },
  box: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
