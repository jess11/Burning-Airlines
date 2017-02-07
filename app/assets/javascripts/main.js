$(document).ready(function () {
  app.appRouter = new app.AppRouter();
  Backbone.history.start();
  //creating flights collection and collecting data
  app.flights = new app.Flights();
  app.flights.fetch();

});
