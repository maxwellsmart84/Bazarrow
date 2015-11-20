var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/create-item',
  idAttribute: '_id',
  defaults: function (){
    return {
      image: "http://www.fulton58.org/pages/uploaded_images/Nike-Vapor-Elite-Airlock-Size-9-Football-FT0210_201_A.jpg",
      title: "Football",
      description: "Brown Pig-skin Football",
      available: "Yes",
    };
  },
  initialize: function () {
    console.log("hello");
  }
});
