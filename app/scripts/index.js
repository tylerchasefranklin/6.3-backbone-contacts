window.$ = window.JQuery = require('jquery');
var Backbone = require('backbone');
var $ = require('jquery');
var contacts = require('./models/contacts.js');
var views = require('./views/view.js');

$(function(){

var contactCollection = new models.ContactCollection();

var contactHolder = new views.ContactHolderView({collection: contactCollection});

var contactList = new views.ContactListView({collection: contactCollection});

var contactItem = new views.ContactItemView({collection: contactCollection});


contactCollection.fetch();

contactCollection.add ([
  {'name': 'Chase Franklin', 'e-mail': 'tylerchasefranklin@gmail.com', 'phone-number': '704-692-0134', 'instagram': 'tylerinthechase', 'linkedin': 'Chase Franklin'}
]);


});
