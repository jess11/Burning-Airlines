var app = app || {};

app.PostListView = Backbone.View.extend({ //this is a page - index of posts
  tagName: 'li', //create an li that will point back to el
  events: {
    'click' : 'showPost' //similar to router - triggered by an event
  },
  showPost: function(){
    app.router.navigate('posts/' + this.model.get('id'), true); //updates the urls
    // var postView = new PostView({model:this.model});
    // postView.render();
    // this.$el.html( this.model.get('content'));
  },
  render: function(){
    this.$el.text(this.model.get('title'));
    this.$el.appendTo('#posts');
  }
});
