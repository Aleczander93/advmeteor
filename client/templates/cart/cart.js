Template.cart.helpers({
    cartitems:function(){
        return Cart.find({});
    }
});
Template.cart.events({
    'click .checkOutBtn':function(evt,tmpl){
        Session.set('isCheckingOut',true);
    },
    'click #delFromCart':function(evt,tmpl){
        console.log(this._id);
        Meteor.call('Cart.remove',this._id);
    }
});
