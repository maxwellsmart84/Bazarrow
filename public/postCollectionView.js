var Backbone = require('backbone');
var Post = require('./postCollection');
var _ = require('underscore');
var $ = require('jquery');
var PostModelView = require('./postModelView');
Backbone.$ = $;


module.exports = Backbone.View.extend({
  el: '#page',
  initialize: function () {
    this.addAll();
  },
  addOne: function (postModel) {
    var postView = new PostModelView({model: goodsModel});
    this.$el.append(postView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  }
})
