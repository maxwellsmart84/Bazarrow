module.exports = {
  header: [
    "<h1>hello world</h1>"
  ].join(""),
  user: [
    '<div class="avatar">',
      // '<img src="<%= file %>" />',
    '</div>',
      '<ul>',
        '<li><h3><span class="liSpan"><%= username %></span></h3></li>',
        '<li><h3><span class="liSpan"><%= location %></span></h3></li>',
        '<li><h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5></li>',
      '</ul>',
  ].join(""),
  goods: [
    '<div class="addItemMenu hide">',
      '<form class="addItemForm" action="index.html" method="post">',
        '<input type="text" class="form-control itemInputTitle" name="title"  placeholder="Title">',
        '<input type="picture" class="form-control itemInputPicture" name="itemPicture"  placeholder="Item Picture">',
        '<input type="text" class="form-control itemInputDescription" name="itemDescription"  placeholder="Description">',
        '<button type="submit" name="button">Submit</button>',
      '</form>',
    '</div>',
    '<div class="goodsItems">',
        '<img src="<%= photoName %>" alt="">',
        '<ul>',
          '<li><h2><%= itemName %></h2></li>',
          "<li><p><%= description %></p></li>",
        '</ul>',
    '</div>',
  ].join(""),
  posts: [
    "<img src = '<%= profileimg %>>",
    "<h1>Looking for: <span class = '.lookingFor'></span></h1>",
  ].join(""),
  userForm: [
    '<div class = loginDiv>',
    '<h1><span class="titleSpan">Bazarrow</span></h1>',
    '<form class="loginForm" action="/login" method="post">',
      "<input class='form-control loginUsername' type='text' name='loginName' placeholder='Username'></input>",
      '<input type="password" class="form-control loginPassword" name="loginPassword" value="" placeholder="Password">',
      '<a href=""><button action="" type="button" class="btn btn-secondary l-loginBtn">Login</button></a>',
      '<button type="button" class="btn btn-secondary l-signUpBtn">Sign Up</button>',
    "</form>",
    '</div>',
    '<div class= "signUpDiv hide">',
    '<h1><span class="titleSpan">Bazarrow</span></h1>',
      '<form class="signUpForm" action="index.html" method="post">',
        '<input type="text" class="form-control signUpUsername" name="signUpUsername"  placeholder="Username">',
        '<input type="text" class="form-control signUpEmail" name="signUpEmail"  placeholder="Email">',
        '<input type="password" class="form-control signUpPassword" name="signUpPassword"  placeholder="Password">',
        '<input type="text" class="form-control signUpAvatar" name="signUpAvatar"  placeholder="Profile Picture">',
        '<input type="text" class="form-control signUpLocation" name="signUpLocation"  placeholder="Location">',
        '<button type="button" class="btn btn-secondary s-loginBtn">Login</button>',
        '<a href="/#profile"><button type="button" class="btn btn-secondary s-signUpBtn">Sign Up</button></a>',
        '</form>',
    '</div>'
  ].join(""),
  goodsForm: [
     '<form class="addItemForm" action="index.html" method="post">',
       '<input type="text" class="form-control itemInputTitle" name="title"  placeholder="Title">',
       '<input type="picture" class="form-control itemInputPicture" name="itemPicture"  placeholder="Item Picture">',
       '<input type="text" class="form-control itemInputDescription" name="itemDescription"  placeholder="Description">',
       '<button type="submit" name="button">Submit</button>',
     '</form>',
 ].join(""),
  postForm: [
    '<form class="addMarketItemForm hide" action="index.html" method="post">',
      '<input type="text" class="form-control marketItemTitle" name="marketTitle"  placeholder="Title">',
      '<input type="picture" class="form-control marketItemPicture" name="marketPicture"  placeholder="Item Picture">',
      '<input type="text" class="form-control marketItemInputDescription" name="marketDescription"  placeholder="Description">',
      '<button type="submit" name="button">Submit</button>',
    '</form>'
  ],
};
