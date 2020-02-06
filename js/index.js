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

  // filter items on button click
  $('.filter-button-group').on('click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
  });


  // CUSTOM GALLERY
  $(".close, .backDrop").on("click", function(e) {
    e.preventDefault();
    closeBox();
  });

  function closeBox() {
    $(".backDrop, .box").animate({ "opacity": "0" }, 500, function() {
      $(".backDrop, .box").css("display", "none");
      $(".box .item_example").detach();
    });
  }

  $(".item_content").on("click", function() {
    $(".backDrop").animate({ "opacity": ".70" }, 500);
    $(".box").animate({ "opacity": "1.0" }, 500);
    $(".backDrop, .box").css("display", "block");
    // var largeImage = $(this).find('img').attr("src");
    // $(".largeImage").attr({ src: largeImage });
    var example = $(this).find('.item_example');
    var clone_example = example.clone(true);
    clone_example.prependTo(".box");
  });


  // ISOTOPE INIT
  var $container = $('.grid').isotope({
    itemSelector: '.grid-item',
  });

  // Isotope load more
  var initShow = 9; //number of images loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      $("#load-more").hide();
    } else {
      $("#load-more").show();
    };

  }


  //when load more button clicked
  $("#load-more").click(function() {

    if ($('.filters ul li').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;

      $('.filters ul li').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

});