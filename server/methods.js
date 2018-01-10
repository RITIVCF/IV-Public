import { remote } from '/server/publish.js';

Meteor.methods({
  sgEmail(name, email, message, sgid){
    var sg = Groups.findOne(sgid);
    var leader = Meteor.users.findOne(sg.leader[0]);
    Email.send({
      to: [leader.emails[0].address,"drs8047@rit.edu"],
      from: "Ivy Information System <ivcf@rit.edu>",
      replyTo: email,
      subject: "New "+ sg.name + " Interest",
      html: "<p>"+message+"<p><br/><br/>"
      + "<p>You can reply directly to this email to respond to "+name+".</p>"
      + "<br/><br/><p>Thank you</p><p>Ivy Information System</p>"
    });
  },
  churchEmail(name, email, message, uid, chid){
    var contact = Meteor.users.findOne(uid);
    var church = Churches.findOne(chid);
    Email.send({
      to: contact.emails[0].address,
      from: "Ivy Information System <ivcf@rit.edu>",
      replyTo: email,
      subject: name+" Is Looking For A Ride To "+church.name,
      html: "<p>"+message+"</p><br/><br/>"
      + "<p>You can reply directly to this email to respond to "+name+".</p>"
      + "<br/><br/><p>Thank you</p><p>Ivy Information System</p>"
    });
  },
  contactEmail(name, email, subj, message){
    Email.send({
      to: "ivcf@rit.edu",
      from: "Ivy Information System <ivcf@rit.edu>",
      replyTo: email,
      subject: subj,
      html: "<p>"+message+"</p><br/><br/>"
      + "<p>You can reply directly to this email to respond to "+name+".</p>"
      + "<br/><br/><p>Thank you</p><p>Ivy Information System</p>"
    });
  },
  submitPrayerRequest({name=null, email, content, audience="Leaders"}){
    if (audience == "") {
      audience == "Leaders";
    }
    return remote.call("submitPrayerRequest",{name, email, content, audience});
  },
  publishPrayerRequest({ requestID }){
    return remote.call("publishPrayerRequest", { requestID });
  },
  submitPrayerRequestUpdate({ prayerRequestID, content, type }){
    return remote.call("submitPrayerRequestUpdate", { prayerRequestID, content, type });
  }
});
