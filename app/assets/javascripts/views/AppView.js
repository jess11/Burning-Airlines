
var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function() {
    // this.$el.text($('#testing').text());

    //showing appView template with searchView inside of it
    this.$el.html( $('#appView').html() );
    var searchView = new app.SearchView();
    searchView.render();

  

    //to render the other views - will go inside this function also


    //NEEDS to be re-added once created
    // var reservationView = new app.ReservationView();
    // reservationView.render();

  },
});
