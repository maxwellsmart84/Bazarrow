var Backbone = require('backbone');
var UserModel = require('./userModel');
var NewUserModel = require('./newUserModel');

module.exports = Backbone.Collection.extend({
  url: '/users',
  model: UserModel
});
