var app = app || {};

app.ReservationsView = Backbone.View.extend({
  el: '#reservations',
  render: function() {
    $('#reservations').html('');
    $('#reservations').append($('<h3>').html('Your Reservations'));
    var usersBookings = app.bookings.where({user_id: app.GlobalUser});
    _.each(usersBookings,function(b){
      var flightID= b.get('flight_id');
      var seat = b.get('seat');
      var flight = app.flights.where({id: flightID})[0];
      var flightNo = flight.get('flight_no');
      var origin = flight.get('origin');
      var destination = flight.get('destination');
      var date = flight.get('date');
      var str = [date, flightNo, origin + " > " + destination, "Seat:",seat].join(' | ');
      var $li = $('<li>').html(str);
      $('#reservations').append($li);
    });



  },
});
