//var remote = new DDP.connect("http://localhost:80/");
var remote = new DDP.connect("http://ritivcf.student.rit.edu:3000/");
//Ethnicities = new Mongo.Collection("ethnicities");
Events = new Mongo.Collection("events", remote);
Contacts = new Mongo.Collection("contacts", remote);
//Tickets = new Mongo.Collection("tickets");
Groups = new Mongo.Collection("groups",remote);
Churches = new Mongo.Collection('churches',remote);
Bios = new Mongo.Collection('bios');
Options = new Mongo.Collection('options', remote);

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

remote.subscribe('allContacts', function(){
  return Contacts.find();
});

Meteor.publish('formOptions', function(){
  return Options.find({$or:[
    {_id: "gradterms"},
    {_id: "campusaffiliations"},
    {_id: "communitylife"},
    {_id: "ethnicities"}
  ]});
});

Meteor.publish("allContacts", function(){
  return Contacts.find();
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
  var weeksahead = Options.findOne({_id:"prayerweeksahead"}).val;
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
  return Events.find({$and: [{tags: "Prayer"}, {published: true}, {end: {$gt: new Date()}},
    {start: {$lt: moment().add(weeksahead,"weeks")._d}}]}, options);
})

Meteor.publish("publishedEvents", function(){

  return Events.find({published: true});
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


//********  BIOS   ******
Meteor.publish("allBios", function(){
  return Bios.find();
})
