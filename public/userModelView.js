var Backbone = require('backbone');
var UserModel = require('./userModel');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'profileInfo',
  template: _.template(tmpl.user),
  events: {

  },
  initialize: function () {

  },

  render: function () {
    console.log(this.model);
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
});
