//TODO: make wrap these in a library

function loadRatings() {
  $(".rate-value").each(function () {
    var rating = $(this).find('span').text();
    var rating_floor = Math.floor(rating)
    var starsList = $(this).siblings(".rate-stars");
    starsList.html("");

    if (rating == 0){
      $(this).hide();
      starsList.append('<span>Not rated</span>')
    }
    else {
      for (var i=0; i<rating_floor; i++) {
        starsList.append('<i class="fa fa-star"></i>');
      }
      if (rating_floor != rating) { //check for half points
        starsList.append('<i class="fa fa-star-half-o"></i>');
      }
      for (var i=0; i<(5-Math.ceil(rating)); i++) {
        starsList.append('<i class="fa fa-star-o"></i>');
      }
    }
  });
}

