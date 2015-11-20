module.exports = {
  profile: [
    "<h1><%= username %></h1>",
    "<img src = '<%= profileimg %>>",
    "<h2><%= location %></h2>",
  ].join(""),
  goods: [
    "<img src = '<%= goodsimg %>>",
    "<h2><%= title %></h2>",
    "<h2><%= available %></h2>",
    "<p><%= description %></p>"
  ].join(""),
  posts: [
    "<img src = '<%= profileimg %>>",
    "<h1>Looking for: <span class = '.lookingFor'></span></h1>",
  ].join(""),
  userForm: [
    "<form>",
      "<input type='text' name='loginName' placeholder='Username'></input>",
      "<input type='password' name='password'></input>",
      "<input type='email' name='email'></input>",
      "<input type='file' name='profileimg' accept='/*'></input>",
    "</form>"
  ].join(""),
  postForm: [
    "<form>",
      "<input type = 'text' name= 'postItem' placeholder='What are you looking for?'></input>",
    "</form>"
  ],
};
