$(function(){

// banner
$('.banner').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
  arrows:true,
  cssEase: 'linear',
  fade:true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 800,
  dots:false,
  prevArrow:'<i class="fas fa-chevron-left prev"></i>', 
  nextArrow:'<i class="fas fa-chevron-right next"></i>',
});
// header New Class
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.nav').addClass('navNewClass');
  } else {
     $('.nav').removeClass('navNewClass');
  }
});

   // Back to Top 
   var btn = $('.backtotop');
   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
 


// Ofcan Side bar dropper
var list1 = $('.js-dropdown-list1');
var link1 = $('.js-link1');
link1.click(function(e) {
  e.preventDefault();
  list1.slideToggle(200);
}); 


  // countup
  $('.counter').countUp();

});