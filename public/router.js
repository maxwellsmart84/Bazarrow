// var Backbone = require('backbone');
// var $ = require('jquery');
// var _ = require('underscore');
// var UserCollectionView = require('./userCollectionView');
// var GoodsCollectionView = require('./goodsCollectionView');
// var PostCollectionView = require('./postCollectionView');
// var UserCollection = require('./userCollection');
// var GoodsCollection = require('./goodsCollection');
// var PostCollection = require('./postCollection');
//
// module.exports = Backbone.Router.extend({
//   routes: {
//     '': 'homePage',
//     'user': 'userPage',
//     'post': 'postPage'
//   },
//   initialize: function (options) {
//     // if(!this.layout) {
//     //   this.layout = options.layout;
//     // }
//   },
//   postPage: function () {
//     var postCollection = new PostCollection();
//     postCollection.fetch().then(function () {
//       var postCollectionView = new PostCollectionView({collection: postCollection});
//       // self.$el.find('section').html()
//       self.$el.find('header').html(headerHTML.render().el);
//       self.$el.find('.submit-section').html(formHTML.render().el);
//     });
//   },
//   homePage: function () {
//     console.log("you've made it to home!!");
//   },
//   userPage: function () {
//     var userCollection = new UserCollection();
//     userCollection.fetch().then(function () {
//       var userCollectionView = new UserCollectionView({collection: userCollection});
//       // self.$el.find('section').html()
//
//       self.$el.find('.submit-section').html(formHTML.render().el);
//     });
//     var goodsCollection = new GoodsCollection();
//     goodsCollection.fetch().then(function () {
//       var goodsCollectionView = new GoodsCollectionView({collection: goodsCollection});
//       // self.$el.find('section').html()
//
//       self.$el.find('.submit-section').html(formHTML.render().el);
//     });
//   }
//
// })
