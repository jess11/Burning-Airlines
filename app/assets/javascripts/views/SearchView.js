var app = app || {};

app.SearchView = Backbone.View.extend({
  el: '#search',
  events: {
    'click button': 'searchFlights',
    'keypress textarea': 'checkForEnter'
  },
  checkForEnter: function(event){
    if(event.which === 13){
      event.preventDefault();
      this.searchFlights();
    }
  },
  searchFlights: function () {
    var originSearch = $('#origin').val();
    var destinationSearch = $('#destination').val();
    console.log(originSearch);
    console.log(destinationSearch);
    console.log(app.GlobalUser)

  },
  render: function () {
    this.$el.html( $('#searchView').html() )

//HELPER from backbone-blog-rails
    // this.$el.html('<ul id="posts"></ul>');
    // this.collection.each(function(p){
    //   var postList= new app.PostListView({model: p});
    //   postList.render();
    //   // var title = p.get('title'); //backbone has getters and setters
    //   // var $li = $(postTitleHTML(p.attributes)); //fix this separate our concerns, (p.attributes is an object with a key of "title")
    //   // $li.appendTo('#posts');
    // });
  }

});
