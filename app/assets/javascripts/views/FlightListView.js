var app = app || {};

app.FlightListView = Backbone.View.extend({ //this is a page - index of posts
  tagName: 'li', //create an li that will point back to el
  render: function(){

    var flightno = this.model.get('flight_no');
    var date = this.model.get('date');
    var trip = this.model.get('origin') + " > " + this.model.get('destination');

    var planeID = this.model.get('airplane_id');
    var findPlane = app.airplanes.where({ id: planeID });
    var planeName = findPlane[0].get('name');
    var str = [flightno, date, trip, planeName].join(' | ');
    this.$el.text(str);
    this.$el.appendTo('#results');
  }
});
