window.$ = window.JQuery = require('jquery');
var Backbone = require('backbone');
var $ = require('jquery');
var views = require('./views/view');
var models = require('./models/contacts');


$(function(){

  // $('.btn').on('click', function(event){
  //   event.preventDefault();
  //   $('.label').html('Loading...').prop('disabled', true);
  //   contactCollection.fetch().then(function(){
  //     $('.btn').html('Submit').prop('disabled', false);
  //   });
  // });

  var contactCollection = new models.ContactCollection();

  var formView = new views.ContactFormView({collection: contactCollection});
  formView.setElement($('.submit')[0]);

  contactCollection.fetch().then(function(){
    console.log(contactCollection);
  });





});
