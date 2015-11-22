var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/create-user',
  idAttribute: 'id',
  defaults: function (){
    return {
      image: "",
      username: "km",
      rating: "5 stars",
      location: "Charleston, SC"
    };
  },
  initialize: function () {
  }
});
