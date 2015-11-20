var Backbone = require('backbone');
var PostModel = require('./postModel');

module.exports = Backbone.Collection.extend({
  url: '/items',
  model: PostModel
});
