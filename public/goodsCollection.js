var Backbone = require('backbone');
var GoodsModel = require('./goodsModel');

module.exports = Backbone.Collection.extend({
  url: '/goods',
  model: GoodsModel
});
