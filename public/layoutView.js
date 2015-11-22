var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var LoginFormView = require('./loginFormView');
var FormView = require('./formView');
var UserView = require('./userView');
var GoodsView = require('./goodsView');
var PostView = require('./postView');
var UserCollectionView = require('./userCollectionView');
var GoodsCollectionView = require('./goodsCollectionView');
var PostCollectionView = require('./postCollectionView');
var UserCollection = require('./userCollection');
var GoodsCollection = require('./goodsCollection');
var PostCollection = require('./postCollection');


module.exports = Backbone.View.extend({
 el: '#layoutView',
 initialize: function () {
   var self = this;
   var loginFormHTML = new LoginFormView();
   var userHTML = new UserView();
   var formHTML = new FormView();
   var goodsHTML = new GoodsView();
   var postHTML = new PostView();


// lines 33-52 need to be updated with the content that we need on our page

   var goodsCollection = new GoodsCollection();
   goodsCollection.fetch().then(function () {
     var goodsCollectionView = new GoodsCollectionView({collection: goodsCollection});
     // self.$el.find('section').html()
     self.$el.find('.addItemMenu').html(formHTML.render().el);
     self.$el.find('.itemsList').html(goodsHTML.render().el);
   });

   var userCollection = new UserCollection();
   userCollection.fetch().then(function () {
     var userCollectionView = new UserCollectionView({collection: userCollection});
     // self.$el.find('section').html()
     self.$el.find('.myItems').html(formHTML.render().el);
     self.$el.find('.profileInfo').html(userHTML.render().el);
   });

   var postCollection = new PostCollection();
   postCollection.fetch().then(function () {
     var postCollectionView = new PostCollectionView({collection: postCollection});
     // self.$el.find('section').html()
     self.$el.find('.marketList').html(postHTML.render().el);
     self.$el.find('.addItemMenu').html(headerHTML.render().el);

   });
 }
});
