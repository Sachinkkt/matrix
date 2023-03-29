(function($) { 
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click   (function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 

    $('.popup-button').click(function(e) {
        $('.wrapper').fadeIn(500);
        $('.popup-box').removeClass('transform-out').addClass('transform-in');
    
        e.preventDefault();
      });
    
      $('.popup-close').click(function(e) {
        $('.wrapper').fadeOut(500);
        $('.popup-box').removeClass('transform-in').addClass('transform-out');
    
        e.preventDefault();
      });

      
  })(jQuery);