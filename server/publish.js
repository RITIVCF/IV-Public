import { Accounts } from 'meteor/accounts-base';

if(process.env.NODE_ENV=="development"){
  var remote = new DDP.connect("http://localhost:3000/");
}
else if(process.env.NODE_ENV=="ivystaging"){
  var remote = new DDP.connect("http://ivy.rit.edu:3010/");
}
else {
  var remote = new DDP.connect("http://ivy.rit.edu/");
}

export {
  remote
};

//Ethnicities = new Mongo.Collection("ethnicities");
Events = new Mongo.Collection("events", remote);
Contacts = new Mongo.Collection("contacts", remote);
Counters = new Mongo.Collection("counters", remote);
Tickets = new Mongo.Collection("tickets", remote);
Groups = new Mongo.Collection("groups",remote);
Churches = new Mongo.Collection('churches',remote);
Bios = new Mongo.Collection('bios');
Options = new Mongo.Collection('options', remote);
Accounts.connection = remote;
Meteor.users = new Mongo.Collection('users', remote);
PrayerRequests = new Mongo.Collection('prayerrequests', remote);

//remote.subscribe('churches');
var test = remote.subscribe("publicOptions", function(){
  return Options.find();
});

remote.subscribe('publishedEvents', function(){
  return Events.find();
});

remote.subscribe('activeChurches', function(){
  return Churches.find();
});

remote.subscribe("allCounters", function(){
  return Counters.find();
});

remote.subscribe("postedPrayers", function(){
  return PrayerRequests.find();
});

// remote.subscribe('allContacts', function(){
//   return Contacts.find();
// });

Meteor.publish('formOptions', function(){
  return Options.find({$or:[
    {_id: "gradterms"},
    {_id: "campusaffiliations"},
    {_id: "communitylife"},
    {_id: "ethnicities"}
  ]});
});

Meteor.publish("allContacts", function(){
  remote.subscribe('publicContacts', function(){
    return Meteor.users.find();
  });
  return Meteor.users.find();
});

Meteor.publish("thisContact", function(cid){
  return Contacts.find({_id : cid});
});

Meteor.publish("allEvents", function(){
  return Events.find();
});

Meteor.publish("largeGroups", function(){
  var weeksahead = Options.findOne({_id:"lgweeksahead"}).val;
  console.log(weeksahead);
  remote.subscribe("publishedEvents", function(){
    return Events.find();
  });
  const options = {
    fields: {
      name: 1,
      published: 1,
      start: 1,
      end: 1,
      description: 1,
      location: 1,
      tags: 1
     }
  }
  return Events.find({$and: [{tags: "Large Group"}, {published: true}, {end: {$gt: new Date()}},
    {start: {$lt: moment().add(weeksahead,"weeks")._d}}]}, options);
});



Meteor.publish("prayerEvents", function(){
  const options = {
    fields: {
      name: 1,
      published: 1,
      start: 1,
      end: 1,
      description: 1,
      location: 1,
      tags: 1
     }
  }
  return Events.find({$and: [{tags: "Prayer"}, {end: {$gt: new Date()}},
    {start: {$lt: moment().add(1,"weeks")._d}}]}, options);
});

Meteor.publish("postedPrayers", function() {
  return PrayerRequests.find();
});

Meteor.publish("publishedEvents", function(){

  return Events.find();
});

Meteor.publish("thisuser", function(){
  return Events.find({_id : this.userId});
});

Meteor.publish("SGs", function(){
  remote.subscribe('SGs', function(){
    return Groups.find();
  });
  return Groups.find();
});



Meteor.publish("activeChurches", function(){

  return Churches.find({active: true});
});

Meteor.publish("allChurches", function(){
  return Churches.find();
});

Meteor.publish("counters", function(){
  remote.subscribe("allCounters", function(){
    return Counters.find();
  });
  return Counters.find();

});


//********  BIOS   ******
Meteor.publish("allBios", function(){
  return Bios.find();
})
