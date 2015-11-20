var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var UserModel = require('./userModel');

module.exports = Backbone.View.extend({
  className: 'addLogin',
  model: null, // just here as placeholder, but need a model up on instantiation
  events: {
    'submit form': 'submitForm'
  },
  initialize: function () {
    if(!this.model) {
      this.model = new UserModel();
    }
  },
  submitForm: function (event) {
    event.preventDefault();
    var newUser = {
      image: this.$el.find('input[name="user_image"]').val(),
      username: this.$el.find('input[name="username"]').val(),
      rating: this.$el.find('input[name="rating"]').val(),
      location: this.$el.find('input[name="location"]').val(),
    };
    this.model.set(newUser);
    this.model.save();
    this.$el.find('input').val('');
  },
  template: _.template(tmpl.form),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // in order to call .el off of render we need to return this
    // bookViewInstance.render().el - yields all markup and data from model
    return this;
  }
});
