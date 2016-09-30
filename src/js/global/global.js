(function($){
    $('.font-size-toggle').click(function(){
      if ($(this).attr('data-font') === 'increase') {
          $('html').css("fontSize", "30px");
          $(this).attr('data-font', "decrease").html('Decrease Font Size');
      }
      else {
          $('html').css("fontSize", "16px");
          $(this).attr('data-font', "increase").html('Increase Font Size');
      }
    })
})(jQuery);
