var $ = require('jquery');
var Backbone = require('backbone');
var models = require('../models/contacts');
// require('bootstrap-sass/assets/javascripts/bootstrap');


var ContactFormView = Backbone.View.extend({
  events: {
    'submit': 'makeContact'
  },
  makeContact: function(e){
    e.preventDefault();
    var self = this;

    $('.label').html('Loading...');

    var makeName = $('.name').val();
    var makeEmail = $('.email').val();
    var makePhone = $('.phone').val();
    var makeInstagram = $('.instagram').val();
    var makeLinkedIn = $('.linkedin').val();
    var newContact = {
      name: makeName,
      email: makeEmail,
      phonenumber: makePhone,
      instagram: makeInstagram,
      linkedin: makeLinkedIn
    };
    this.collection.create(newContact);

    var resetForm = function(){
      $(':input').val('');
      $('.label').html('Submit');
    };

    setTimeout(resetForm, 500);
  }

});


module.exports = {
  ContactFormView: ContactFormView
};
