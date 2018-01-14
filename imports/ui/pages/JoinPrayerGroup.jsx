import React from 'react';

function JoinPrayerGroup() {
  return (
    <div className="container row">
      <div className="col s12">
        <h1>Join the Prayer Group</h1>
        <p>To Join the prayer group, you will need to have a user account through Ivy, RIT IVCF's student-built system:</p>
        <ol>
          <li>Create an account <a href={process.env.IVY_ROOT_URL} target="_blank">here</a>, creating a new contact card if needed. If you already have an account, skip to step 2.</li>
          <li>Click the join button below, signing in to Ivy if needed.</li>
        </ol>
        <a className="waves-effect waves-light btn" href={process.env.IVY_ROOT_URL + "prayergroup/join"}>Join</a>
      </div>
    </div>
  );
}

export default JoinPrayerGroup;
