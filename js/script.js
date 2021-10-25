$(function(){
  $('.slick-area').slick({
    arrows: false,
    centerMode: true,    
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
    
  });
  $('.humberger').click(function(){
    if($('.header').hasClass('open')) {
      $('.header').removeClass('open');
    }else {
      $('.header').addClass('open');
    }
  });
  $('#mask').click(function(){
    $('.header').removeClass('open');
  });
  $('.nav a').click(function(){

    $('.header').removeClass('open');
  });

  
  $('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing"); 
    return false;
  });

  $(window).scroll(function(){
    $('.fade-in').each(function(){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {
        $(this).css('transform' , 'translateY(0)');
        $(this).css('opacity' , '1');
      };

    });

  });
});




