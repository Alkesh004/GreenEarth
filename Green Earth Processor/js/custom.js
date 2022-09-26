jQuery(document).ready(function() { 

    jQuery('.owl-home-slider').owlCarousel({
       loop: true,
       margin: 0,
       dots:false,
       nav:false,
       responsiveClass: true,
       items: 1,
       animateOut: 'fadeOut',
       autoplay:true,
       autoplayTimeout:3000,
       autoplayHoverPause:true,
       responsive:{
           0:{
               items:1,
             autoplay:true,
             autoplayTimeout:3000,
             autoplayHoverPause:true
           },
           767:{
             autoplay:true,
             autoplayTimeout:3000,
             autoplayHoverPause:true
           },
       }
 });

 $('.owl-product').owlCarousel({
    loop: false,
    margin:10,
    nav:true,
    responsiveClass: true,
    items: 6,
    navText: ["<i class='fa fa-chevron-left dark-green-txt'></i>","<i class='fa fa-chevron-right dark-green-txt'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})


 jQuery('.owl-testimonials').owlCarousel({
    
    loop:true,
    margin:10,
    dots:true,
    nav:true,
    responsiveClass: true,
    items: 1,
    navText: [""],
       responsive:{
         0:{
             items:1,
             autoplay:false,
             autoplayTimeout:5000,
             autoplayHoverPause:true
         },
         576:{
             items:1,
         },
         768:{
             items:1,
         },
     }
     });

 jQuery('.owl-product-details').owlCarousel({
       loop: true,
       margin:40,
       center:true,
       dots:false,
       nav:true,
       responsiveClass: true,
       autoHeight:true,
       merge:true,
       items: 3,
       navText: ["<i class='fa fa-chevron-left dark-green-txt'></i>","<i class='fa fa-chevron-right dark-green-txt'></i>"],
     });

 


   
   jQuery(window).scroll(function() {
    var y = jQuery(window).scrollTop();
    var image = document.getElementById("main-logo");
      if (y > 150) {
          
          jQuery('#header').removeClass("animated fadeInDown fixed-top");
          jQuery('#header').addClass("animated fadeInDown fixed-top");
        //   image.src = "images/logo.png";
      } else {
          jQuery('#header').removeClass("animated fadeInDown fixed-top");
        //   image.src = "images/logo.png";
      }
});

});
 



// Payment Options Clicks


$(function() {
    $('input[name="card-data"]').on('click', function() {
        if ($(this).val() == 'debit') {
            $('#inputcarddebit').show();
        }
        else {
            $('#inputcarddebit').hide();
        }
    });
});


$(function() {
    $('input[name="card-data"]').on('click', function() {
        if ($(this).val() == 'credit') {
            $('#inputcardcredit').show();
        }
        else {
            $('#inputcardcredit').hide();
        }
    });
});
