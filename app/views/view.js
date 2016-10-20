window.$ = window.JQuery = require('jquery');
var Backbone = require('backbone');
var $ = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');
var models = require('./models/contacts.js');
var items = require('../../templates/form.hbs');

var ContactHolderView = Backbone.View.extend({
  tagName: 'div',
  attributes: {
    id: 'contacts',
    'class': 'contacts-holder col-sm-3'
  }
});

var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  attributes: {
    id: 'contacts-list',
    'class': 'contact-list list-group'
  },
  render: function(){
    this.$el.text('Contacts: ');
    return this;
  }
});

var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'contact-items list-group',
  template: items,
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});



module.exports = {
  ContactHolderView: ContactHolderView,
  ContactListView: ContactListView,
  ContactItemView: ContactItemView
};
