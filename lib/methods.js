Meteor.methods({
  updateMember(cid, status){
    Contacts.update(cid, {$set: {"member": status}});
  },
  updateGender(cid, gender){
    Contacts.update(cid, {$set: {"gender": gender}});
  },
  updateGradTerm(cid, term){
    Contacts.update(cid, {$set: {"gradterm": term}});
  },
  updateCurrYear(cid, level){
    Contacts.update(cid, {$set: {"curryear": level}});
  },
  updateContactAffiliations(cid, tag,addremove){
    if(addremove){
      Contacts.update(cid,{$pull: {"affiliations":tag}});
    }
    else{
        Contacts.update(cid,{$addToSet: {"affiliations": tag}});
    }
  },
  updateCommunityLife(cid, tag, addremove){
    if(addremove){
      Contacts.update(cid,{$pull: {"communitylife":tag}});
    }
    else{
        Contacts.update(cid,{$addToSet: {"communitylife": tag}});
    }
  },
  updateEthnicity(cid, ethn){
    Contacts.update(cid, {$set: {"ethn": ethn}});
  },
  updateContactIntl(cid, intl){
    Contacts.update(cid, {$set: {"intl": intl}}); // Change intl status
  }
});
