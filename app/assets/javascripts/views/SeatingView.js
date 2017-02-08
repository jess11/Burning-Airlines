
var app = app || {};

app.SeatingView = Backbone.View.extend({
  el: '#main',
  events: {
  'click showSeats': 'seatingPlan'
},
  render: function() {
    // this.$el.text($('#testing').text());


});






// airplane = { name: 'big plane', row: 32, columns: 12 };

// need unique seat numbers/id - seat

// To create airplane layout - table
//
// var init = function (reservedSeat) {
//   var str = [], className;
//   for (i = 0; i < airplane.row; i++) {
//     for (j = 0; j < airplane.columns; j++) {
//       className = airplane.seatCss + ' ' + airplane.rowCssPrefix + i.toString() + ' ' + airplane.colCssPrefix + j.toString();
//       if ($.isArray(reservedSeat) && $.inArray(reservedSeat) != -1) {
//         className += ' ' + airplane.selectedSeatCss;
//       }
//       str.push('<li class="' + className + '"' + 'style="top:' + (i * airplane.seatHeight).toString() + 'px;left:' + (j * airplane.seatWidth).toString() + 'px">' + '</li>');
//     }
//   }
//   $('#main').html(str.join(''));
// };


// To select seats
//
// $('.' + airplane.seatCss).click(function () {
// if ($(this).hasClass(airplane.selectedSeatCss)){
//     alert('This seat is already reserved');
// }
// else{
//     $(this).toggleClass(airplane.selectingSeatCss);
//     }
// });


// using aiplane object from db
// row
// columns
// seat no = 'row' + 'columns'

// seatingView: function() {
//   var numRows = parseInt(this.$el.find("input[name='row']").val());
//   var row = [];
//   for(var i=1; i <= numRows; i++) {
//     rows.push({ row: i });
//   }
//
//   var numColumns = parseInt(this.$el.find("input[name='columns']").val());
//   var columns = [];
//   for(var i=0; i < numColumns; i++) {
//     columns.push({ column: columnLetters[i] });
//   }

  createSeats: function(plan) {
    // get the airplane
    var airplane = app.airplanes.get(id);
    // number of columns
    var columns = airplane.attributes.columns;
    // rows
    var rows = airplane.attributes.row;
    // letters to set to seat
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // looping rows & columns
    for (var x = 1; x <= rows; x++) {
      for (var y = 1; y <= columns; y++) {
        var $seat = $('<div class="unselected"></div>');
        $seat.addClass('row' + x).addClass('column' + letters[y-1]).attr('id','seat' + x + letters[y-1] );
        $seat.text(x + letters[y-1]);
        $('#seats').append($seat);
      }
    }
  }
  // selectSeat: function(sel){
  //   // stopping
  //   sel.stopImmediatePropagation();
  //   // Start with listing seats whether selected or not
  //   $('.seat').not('.reserved').addClass('unselected');
  //     if ($(sel.currentTarget).hasClass('selected')) {
  //       alert ("This seat has been booked. Please choose another seat.");
  //       return;
  //     }
  //     if ( app.reservations.findWhere({seat: sel.currentTarget.id, airplane_id: this.model.attributes.id })) {
  //         alert ("This seat is currently unavailable. Please choose another seat.");
  //         this.getReservations(this.model.attributes.id);
  //         return;
  //     }
  //     $('.seat').removeClass('selected');
  //     $(sel.currentTarget).removeClass('unselected');
  //     $(sel.currentTarget).addClass('selected');
  //
  //     var seat = $(".selected").eq(0).attr("id");
  //     var flight_id = this.model.attributes.id;
  //     var reservations = app.reservations.where({user_id: app.current_user.id, confirmed: false});
  //     _.each(reservations, function (reservation) {
  //       reservation.destroy();
  //     });
  //     app.reservations.remove(reservations);
  //     var reservation = new app.Reservation({user_id: app.current_user.id, seat: seat, flight_id: flight_id });
  //     reservation.save().done(function() {
  //       app.reservations.add( reservation );
  //     });
  //   }



            // var addAisle = function() {
            //   if (columns === '4') {
            //       $('.columnB').addClass('aisle-right');
            //   }else if (columns === '6') {
            //       $('.columnC').addClass('aisle-right');
            //   }else if (columns === '8') {
            //       $('.columnB').addClass('aisle-right');
            //       $('.columnF').addClass('aisle-right');
            //   }