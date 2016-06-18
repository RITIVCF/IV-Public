var remote = new DDP.connect("http://localhost:3000/");
//var remote = new DDP.connect("http://localhost:3030/");
Resolutions = new Mongo.Collection("resolutions");
Ethnicities = new Mongo.Collection("ethnicities");
Events = new Mongo.Collection("events", remote);
Tickets = new Mongo.Collection("tickets");
Groups = new Mongo.Collection("groups",remote);
Churches = new Mongo.Collection('churches',remote);
Bios = new Mongo.Collection('bios');
/*
Meteor.publish("allResolutions", function(){
  return Resolutions.find();
});

*/

//remote.subscribe('churches');



Meteor.publish("allEvents", function(){
  return Events.find();
});

Meteor.publish("publishedEvents", function(){
  remote.subscribe('publishedEvents', function(){
    return Events.find();
  });
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
  remote.subscribe('activeChurches', function(){
    return Churches.find();
  });
  return Churches.find({active: true});
});

Meteor.publish("allChurches", function(){
  return Churches.find();
});


//********  BIOS   ******
Meteor.publish("allBios", function(){
  return Bios.find();
})
