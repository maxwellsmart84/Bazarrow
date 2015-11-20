var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bazarrow',
  idAttribute: '_id',
  defaults: function (){
    return {
      userImage: "http://www.fulton58.org/pages/uploaded_images/Nike-Vapor-Elite-Airlock-Size-9-Football-FT0210_201_A.jpg",
      title: "Football",
    };
  },
  initialize: function () {
    console.log("hello");
  }
});
