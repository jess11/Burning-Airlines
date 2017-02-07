var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
    flight_no: 'FlightNumber',
    date: '', //???
    origin: 'Origin',
    destination: 'Destination',
    airplane_id: ''
  }
});
