Template.category.helpers({
  isCheckingOut:function(){
    return Session.equals('isCheckingOut',true);
  }
});
