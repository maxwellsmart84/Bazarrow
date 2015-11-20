var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bazarrow',
  idAttribute: '_id',
  defaults: function (){
    return {
      image: "",
      username: "km",
      rating: "5 stars",
      location: "Charleston, SC"
    };
  },
  initialize: function () {
    console.log("hello");
  }
});
