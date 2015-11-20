var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'homePage',
    'user': 'userPage',
    'post': 'postPage'
  },
  initialize: function (options) {
    // if(!this.layout) {
    //   this.layout = options.layout;
    // }
  },
  postPage: function () {
    console.log("some shits");
  },
  homePage: function () {
    console.log("you've made it to home!!");
  },
  postPage: function () {
    console.log("you've made it to the about page");
  }




})
