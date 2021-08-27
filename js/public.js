
$(document).ready(function() {

  // 效果一
  $('.dropdown').click(function() {
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });

  // 效果二
  $('.open').click(function() {
    $('.colorbox1').delay(0).slideToggle();
    $('.colorbox2').delay(500).slideToggle();
    $('.colorbox3').delay(1000).slideToggle();
  });
  
  // 效果三
  $('.font-b').click(function() {
    $('span p').css('font-size','20px');
  });
  $('.font-m').click(function() {
    $('span p').css('font-size','16px');
  });
  $('.font-s').click(function() {
    $('span p').css('font-size','13px');
  });

  // 效果四
  $('.closeAD').click(function() {
    $('.adBoxs').fadeOut('');
  });

  // 效果五
  $('.open2').click(function() {
    $('.colorbox4').stop().slideToggle(10000);
  });
});
