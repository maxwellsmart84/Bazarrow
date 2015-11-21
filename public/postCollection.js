var Backbone = require('backbone');
var PostModel = require('./postModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/bazarrow',
  model: PostModel
});
