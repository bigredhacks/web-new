$(document).ready(function () {
  var scroll_pos = 0;
  var path = window.location.href;
  var body = document.body,
    html = document.documentElement;
  var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
  var top_about = $('#about').offset().top - 25;
  var top_schedule = $('#schedule').offset().top - 25;
  var top_faq = $('#faq').offset().top - 25;
  var top_speakers = $('#speakers').offset().top - 25;
  var top_sponsors = $('#sponsors').offset().top - 25;
  var all_items = document.getElementsByClassName('navbar-item');

  $(document).scroll(function () {
    $(window).on('resize', function () {
      top_about = $('#about').offset().top - 25;
      top_schedule = $('#schedule').offset().top - 25;
      top_speakers = $('#speakers').offset().top - 25;
      top_faq = $('#faq').offset().top - 25;
      top_sponsors = $('#sponsors').offset().top - 25;
    });

    scroll_pos = $(this).scrollTop();
    path = window.location.href;
    loc = '#navbar .' + path.substring(path.lastIndexOf('#') + 1);

    //underline page you are on
    for (i = 0; i < all_items.length; i++) {
      temp = (all_items[i].text.toLowerCase() == 'home') ? "hero" : all_items[i].text;
      loc2 = ("#navbar ." + temp).toLowerCase();
      $(loc2).css('text-decoration', 'none');
    }

    if (scroll_pos > top_sponsors) {
      $('#navbar .sponsors').css('text-decoration', 'underline');
    }
    else if (scroll_pos > top_faq) {
      $('#navbar .faq').css('text-decoration', 'underline');
    }
    else if (scroll_pos > top_speakers) {
      $('#navbar .speakers').css('text-decoration', 'underline');
    }
    else if (scroll_pos > top_schedule) {
      $('#navbar .schedule').css('text-decoration', 'underline');
    }
    else if (scroll_pos > top_about) {
      $('#navbar .about').css('text-decoration', 'underline');
    }
    else {
      $('#navbar .hero').css('text-decoration', 'underline');
    }

    // change navbar color depending on background
    if (scroll_pos > top_sponsors || (scroll_pos > top_speakers && scroll_pos < top_faq)) {
      $("#navbar a").css('color', '#14184b');
    } else {
      $("#navbar a").css('color', 'white');
    }
  });

  // mouse underlines when hovering over navbar
  $(document).mouseover(function () {
    $("#navbar a:hover").css('text-decoration', 'underline');
  });
  $(document).mouseout(function () {
    $("#navbar a").css('text-decoration', 'none');
    if (scroll_pos > top_sponsors) {
      $('#navbar .sponsors').css('text-decoration', 'underline');
    }
    else if (scroll_pos > top_faq) {
      $('#navbar .faq').css('text-decoration', 'underline');
    }
    else if (scroll_pos > top_speakers) {
      $('#navbar .speakers').css('text-decoration', 'underline');
    }
    else if (scroll_pos > top_schedule) {
      $('#navbar .schedule').css('text-decoration', 'underline');
    }
    else if (scroll_pos > top_about) {
      $('#navbar .about').css('text-decoration', 'underline');
    }
    else {
      $('#navbar .hero').css('text-decoration', 'underline');
    }
  });
});