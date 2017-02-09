var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#plane_choice',
  render: function () {
    var flightno = this.model.get('flight_no');
    var date = this.model.get('date');
    var trip = this.model.get('origin') + " > " + this.model.get('destination');

    var planeID = this.model.get('airplane_id');
    var findPlane = app.airplanes.where({ id: planeID });
    var planeName = findPlane[0].get('name');
    var str = [flightno, date, trip, planeName].join(' | ');
    this.$el.text(str);
    var $str = $('<p>').html("Flight: " + str);

    $('#main').html('');
    $('#main').append($str);
    var view = new app.SeatingView({model: this.model});
    view.render();
    //append picture to #main




    // var flightName = app.


  }
});
