var Backbone = require('backbone');
var Goods = require('./goodsCollection');
var _ = require('underscore');
var $ = require('jquery');
var GoodsModelView = require('./goodsModelView');
Backbone.$ = $;


module.exports = Backbone.View.extend({
  el: '.itemsList',
  initialize: function () {
    this.addAll();
  },
  addOne: function (goodsModel) {
    var goodsView = new GoodsModelView({model: goodsModel});
    this.$el.append(goodsView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  }
});
