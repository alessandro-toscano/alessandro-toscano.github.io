$(document).ready(function() {

  // BACK TO TOP BUTTON
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 400) { // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(500); // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(500); // Else fade out the arrow
    }
  });

  $('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
      scrollTop: 0 // Scroll to top of body
    }, 1000);
  });


  // ISOTOPE INIT
  $('.grid').isotope({
    itemSelector: '.grid-item',
  });

  // filter items on button click
  $('.filter-button-group').on('click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
  });


  // CUSTOM GALLERY
  $(".item_content").on("click", function() {
    $(".backDrop").animate({ "opacity": ".70" }, 500);
    $(".box").animate({ "opacity": "1.0" }, 500);
    $(".backDrop, .box").css("display", "block");
    // var largeImage = $(this).find('img').attr("src");
    // $(".largeImage").attr({ src: largeImage });
    var example = $(this).find('.item_example');
    $(".box").append(example);
  });

  $(".close, .backDrop").on("click", function() {
    closeBox();
  });

  function closeBox() {
    $(".backDrop, .box").animate({ "opacity": "0" }, 500, function() {
      $(".backDrop, .box").css("display", "none");
    });
  }

});