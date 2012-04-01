$(function(){

  //variables holding the modal link activator and window
  
  var wrapper = $('#page_wrapper');
  var contact_activator = $('a[alt*="modal_lunch"]');
  var pageform = $('#page_form');
  contact_activator.modal_luncher(wrapper,pageform);
  
  //  variables for window slider

  var page_activator= $('a[alt*="page_sliders"]');
  var slidable_window = $('#page');
  var pages = $('.navigation');
  page_activator.page_slider(slidable_window,pages,900);

  
  
});

// plugin section

(function($){
  $.fn.modal_luncher = function( window,data){
   
   // variable that holds the modal windnow
   var modal_markup = $('<div id="modal_window"><div id="modal_holder"><div id="modal_close"></div><div id="modal_detail"></div></div></div>');
   
   var modal_css = $('<link rel="stylesheet" href="styles/modal.css" type="text/css" />').prependTo('head');
   // variables rep. the jquery rep. widow and link to activate
   var object = $(this);
   var window = window;
   // var caculating the width and height of window for modal window
   var modal_w = window.width();
   var modal_h = window.height();

   
   
   $(this).click(function(){

       modal_markup.prependTo(window);
       $('#modal_window').css({ width: modal_w, height:modal_h});
       $('#modal_detail').html(data.html());
       
        $('#modal_close').click(function(){
            $('#modal_window').remove();
        });
    
       return false;
   });
   
  }
  
  
  $.fn.page_slider = function(window,page,s){
  
    //variables holding the obejects 
     var window = window;
     var pages = page;
     
     var animated = false;
     var speed = s;
     var current_page = null;
  //   var move_length = page.position().left;

     var total_page = page.length;
     var current_page_step = 1;
     
     $(this).click(function(){
       if ( animated == false ){
          current_page = $(' div#'+ $(this).attr('href'));
          var current_page_position = current_page.position().left;
           animated = true;
           window.animate({left: - current_page_position},{ duration: speed,complete: function(){
             animated = false;
           }});
        
          }
           
           return false;
     });


  }
  
})(jQuery);
