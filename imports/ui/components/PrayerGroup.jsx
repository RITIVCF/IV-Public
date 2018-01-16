import React from 'react';

export default class PrayerGroup extends React.Component {

  render() {
    return (
      <div style={styles.container}>
        <div style={{flex: 3}}>
          <p>
            At InterVarsity we believe that God has given us the powerful
            tool of prayer to grow closer to Him and bring our needs before
            Him. The purpose of the prayer group is to establish a community
            committed to praying for the needs of others and keeping God
            actively involved in what we are doing. The prayer group keeps
            everyone in the group updated on the prayer requests posted by
            others and allows them to indicate they are praying for this
            request. All are welcome to join!
          </p>
        </div>
        <div style={styles.box}>
          <a className="waves-effect waves-light btn" href="/prayer/join">Join the prayer group</a>
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
