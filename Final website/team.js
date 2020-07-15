$(document).ready(function() {
  $("#myCarousel3").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $("#myCarousel3 .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#myCarousel3 .carousel-item")
            .eq(i)
            .appendTo("#myCarousel3 .carousel-inner");
        } else {
          $("#myCarousel3 .carousel-item")
            .eq(0)
            .appendTo($(this).find("#myCarousel3 .carousel-inner"));
        }
      }
    }
  });
});
