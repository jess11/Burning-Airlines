var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: app.Flight
//   initialize: function(){
//     //??? not sure what goes here yet.
//
// }

});
