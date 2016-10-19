var Backbone = require('backbone');

var Contact = Backbone.Model.extend({

});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/contacts'
});





module.exports = {
  Contact: Contact,
  ContactCollection: ContactCollection
};
