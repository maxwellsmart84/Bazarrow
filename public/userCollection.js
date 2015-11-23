var Backbone = require('backbone');
var UserModel = require('./userModel');


module.exports = Backbone.Collection.extend({
  url: '/users',
  model: UserModel
});
