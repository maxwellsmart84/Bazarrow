var Backbone = require('backbone');
var GoodsModel = require('./goodsModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/bazarrow',
  model: GoodsModel
});
