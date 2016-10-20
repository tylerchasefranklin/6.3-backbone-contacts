window.$ = window.JQuery = require('jquery');
var Backbone = require('backbone');
var $ = require('jquery');
var contacts = require('./models/contacts.js');
var views = require('./views/view.js');
var models = require('./models/contacts.js');

var contactCollection = new models.ContactCollection();


$(function(){

var contactHolder = new views.ContactHolderView({collection: contactCollection});

var contactList = new views.ContactListView({collection: contactCollection});

var contactItem = new views.ContactItemView({collection: contactCollection});

$('.btn').on('click', function(event){
  event.preventDefault();

  $('.label').html('Loading...').prop('disabled', true);
  heroList.fetch().then(function(){
  $('.btn').html("Submit").prop('disabled', false);
  });
});
contactCollection.fetch();

contactCollection.add ([
  {'name': 'Chase Franklin', 'e-mail': 'tylerchasefranklin@gmail.com', 'phone-number': '704-692-0134', 'instagram': 'tylerinthechase', 'linkedin': 'Chase Franklin'}
]);


});
