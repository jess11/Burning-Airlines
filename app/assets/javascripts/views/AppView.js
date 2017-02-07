
var app = app || {};

///////VIEWS/////////////////////////////////////////////////////
// View has 2 main responsibilities:
////present information to the user with html
////responds to user interaction eg events
app.AppView = Backbone.View.extend({
  el: '#main', //where should the information go on the page ( jquery css selector)
  render: function(){
    this.$el.html('<ul id="posts"></ul>');
    this.collection.each(function(p){
      var postList= new app.PostListView({model: p});
      postList.render();
      // var title = p.get('title'); //backbone has getters and setters
      // var $li = $(postTitleHTML(p.attributes)); //fix this separate our concerns, (p.attributes is an object with a key of "title")
      // $li.appendTo('#posts');
    });
  } //what to show on the page
});
