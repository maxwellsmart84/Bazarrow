var Backbone = require('backbone');
var User = require('./userCollection');
var _ = require('underscore');
var $ = require('jquery');
var UserModelView = require('./userModelView');
Backbone.$ = $;


module.exports = Backbone.View.extend({
  el: '.container profile',
  initialize: function () {
    this.addAll();
  },
  addOne: function (userModel) {
    var userView = new UserModelView({model: userModel});
    this.$el.append(userView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  }
});
