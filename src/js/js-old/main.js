console.time('loading time');
var $ = jQuery.noConflict();

// new WOW().init();

// $('.scrollTo').each(function(){
//    $(this).attr('href', $(this).attr('href').replace('/', ''));
// });

/* =========================================================
 Back to top
 ============================================================ */
// $(".back-top").hide();
// // fade in #back-top
// $(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 900) {
//             $('.back-top').fadeIn();
//             //$('.header').addClass('sticky');
//         } else {
//             $('.back-top').fadeOut();
//             //$('.header').removeClass('sticky');
//         }
//     });

//     // scroll body to 0px on click
//     $('.back-top a').click(function() {
//         $('body,html').animate({
//             scrollTop: 0
//         }, 600);
//         return false;
//     });
// });


// $('.scrollTo').on('click', function() {
//     var hash = this.hash;
//     $('html, body').animate({
//         scrollTop: $(this.hash).offset().top - 66
//     }, 1000, function() {
//         window.location.hash = hash;
//     });
// });

// $('a.scrollTo').bind('click', function(event) {
//     var $anchor = $(this);
//     $('html, body').stop().animate({
//         scrollTop: ($($anchor.attr('href')).offset().top - 66)
//     }, 1000, 'easeInOutExpo');
//     event.preventDefault();
// });


// $('body').scrollspy({
//     target: '.allMenu',
//     offset: 200
// });
/* =========================================================
    Animation boxes
    ============================================================ */
// $(window).scroll(function() {
    
// });
/* =========================================================
 fixHeightNotif
 ============================================================ */

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.job-details-desc').addClass('affich');
    }
});


/* =========================================================
Sticky menu script
 ============================================================ */

// (function(w, d, undefined) {
//     var el_html = d.documentElement,
//         el_body = d.getElementsByTagName('body')[0],
//         header = d.getElementById('header'),
//         $Menu = $('.Menu'),
//         menuIsStuck = function(triggerElement) {
//             var _scrollTop = w.pageYOffset || el_body.scrollTop,
//                 regexp = /(nav\-is\-stuck)/i,
//                 classFound = el_html.className.match(regexp),
//                 navHeight = header.offsetHeight,
//                 bodyRect = el_body.getBoundingClientRect(),
//                 scrollValue = triggerElement ? triggerElement.getBoundingClientRect().bottom - bodyRect.top - navHeight - 100 : 800,
//                 scrollValFix = classFound ? scrollValue : scrollValue + navHeight;

//             // if scroll down is 700 or more and nav-is-stuck class doesn't exist
//             if (_scrollTop > scrollValFix && !classFound) {
//                 el_html.className = el_html.className + ' nav-is-stuck';

//                 $Menu.addClass('hover');
//                 $('#menulogo').css('opacity', '0');
//                 $('.allMenu li').css('opacity', '1');
//             }

//             // if we are to high in the page and nav-is-stuck class exists
//             if (_scrollTop <= 2 && classFound) {
//                 el_html.className = el_html.className.replace(regexp, '');

//                 $Menu.removeClass('hover');
//                 $('.rect1').css('opacity', '1');
//                 $('.rect2').css('transform', 'rotate(0deg) translate(0px, 0px)');
//                 $('.rect3').css('transform', 'rotate(0deg) translate(0px, 0px)');
//                 $('#menulogo').css('opacity', '1');
//                 $('.allMenu li').css('opacity', '0');
//             }
//         },
//         onScrolling = function() {
//             // this function fires menuIsStuck()…
//             menuIsStuck(d.getElementById('main'));
//             // and could do more stuff below
//         };

//     el_html.className = el_html.className + ' js';

//     // when you scroll, fire onScrolling() function
//     w.addEventListener('scroll', function() {
//         w.requestAnimationFrame(onScrolling);
//     });


// }(window, document));


/* =========================================================
Menu Animation
 ============================================================ */
// $(document).ready(function() {
//     var $Menu = $('.Menu');

//     function showMenu(div) {
//         div.transition({
//             opacity: 1,
//             x: '0'
//         }, 150, function(e) {
//             //call back
//             showMenu(div.prev("li"));
//         });
//     }

//     function hideMenu(div) {
//         div.transition({
//             opacity: 0,
//             x: '10'
//         }, 150, function(e) {
//             //call back
//             hideMenu(div.next("li"));
//         });
//     }

//     $('#menulogo').click(function() {

//         if ($Menu.hasClass('hover')) {
//             $Menu.removeClass('hover');
//             $('.rect1').css('opacity', '1');
//             $('.rect2').css('transform', 'rotate(0deg) translate(0px, 0px)');
//             $('.rect3').css('transform', 'rotate(0deg) translate(0px, 0px)');
//             hideMenu($('.allMenu li:first'));
//         } else {
//             $Menu.addClass('hover');
//             $('.rect1').css('opacity', '0');
//             $('.rect2').css('transform', 'rotate(45deg) translate(4px, -8px)');
//             $('.rect3').css('transform', 'rotate(-45deg) translate(-15px, 0px)');
//             showMenu($('.allMenu li:last'));

//         }
//     });
// });
/* =========================================================
    MD Menu mobile
 ============================================================ */
// $('#wsnavtoggle').on('click', function(event) {
//     event.preventDefault();
//     $('body').addClass('mdoffcanvasopener').prepend('<div class="overlapblackbg"></div>');
//     $('.overlapblackbg').on('click', function(event) {
//         event.preventDefault();
//         /* Act on the event */
//         $('body').removeClass('mdoffcanvasopener');
//         $(this).remove();

//     });
//     $('.closeMenu').on('click', function(event) {
//         event.preventDefault();
//         /* Act on the event */
//         $('body').removeClass('mdoffcanvasopener');
//         $('.overlapblackbg').remove();

//     });
//     $('.mdmenu > .mdmenu-list > li > a').on('click', function(event) {
//         /* Act on the event */
//         $('body').removeClass('mdoffcanvasopener');
//         $('.overlapblackbg').remove();

//     });
// });

//$('body').addClass('mdoffcanvasopener').prepend('<div class="overlapblackbg"></div>');
// $('.btn-control').on('click', function(event) {
//     event.preventDefault();
//     /* Act on the event */
//     $('.header-top').toggleClass('active');
//     $(this).toggleClass('close');

//     if ($('.btn-control').hasClass("close")) {
//         //console.log("act2");
//         $(".btn-control img").attr("src", "images/icons/cross-out.svg");
//         $(".btn-control img").attr("width", "18");
//         $(".container-jobs-bottom .jobs").fadeOut(400);
//         $(".affichNext").fadeIn(200);
//     } else {
//         $(".btn-control img").attr("src", "images/icons/flame.svg");
//         $(".btn-control img").attr("width", "24");
//         $(".affichNext").fadeOut(200);
//         $(".container-jobs-bottom .jobs").fadeIn(400);
//     }
// });


/* =========================================================
Shake the btn
 ============================================================ */


setInterval(function() {
    //$('.jobs').removeClass('shake').removeAttr('style').addClass('shake')
}, 2000);


/* =========================================================
animate slider
 ============================================================ */

var isMobile = window.matchMedia("only screen and (max-width: 767px)");



function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function() {
        var $this = $(this),
            $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function() {
            $this.removeClass($animationType);
        });
    });
}


/* =========================================================
 Carousel Home Slider
 ========================================================== */
// if (jQuery('.md-slider').length) {

//     /* =========================================================
//      resizeHeight
//      ============================================================ */
//     function resizeHeight() {
//         var slider;
//         slider = $('.md-slider,.md-slider .carousel-inner,.md-slider .mask,.md-slider .image');
//         windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//         //headerHeight = $('.header').height();
//         slider.css('height', windowHeight);
//     }
//     resizeHeight();

//     $(window).resize(function(event) {
//         resizeHeight();
//     });


//     //Animation pull-down slide
//     /*$(function() {
//         $('.scroll-down a').on('click', function(e) {
//             var hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(this.hash).offset().top - 88
//             }, 1000, function() {
//                 window.location.hash = hash;
//             });
//         });
//     });*/

// }
// if (jQuery('.md-portfolio').length) {
//     (function($) {

//         //Variables on page load 
//         var $carouselSlider = $("#carousel-slider2"),
//             $firstAnimatingElems = $carouselSlider.find('.item:first').find("[data-animation ^= 'animated']");

//         $countElems = $carouselSlider.find('.item').length;
//         //console.log($countElems);




//         //Initialize carousel 
//         $carouselSlider.carousel({
//             interval: 10000,
//             heightAuto: true
//         });

//         //Animate captions in first slide on page load 
//         if (!isMobile.matches) {
//             doAnimations($firstAnimatingElems);
//         }
//         //Pause carousel  
//         $carouselSlider.carousel('pause');


//         //Other slides to be animated on carousel slide event 
//         $carouselSlider.on('slide.bs.carousel', function(e) {
//             var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
//             if (!isMobile.matches) {
//                 doAnimations($animatingElems);
//             }
//         });
//         $carouselSlider.swiperight(function() {
//             $(this).carousel('prev');
//         });
//         $carouselSlider.swipeleft(function() {
//             $(this).carousel('next');
//         });
//         $('.play').click(function() {
//             $carouselSlider.carousel('cycle');
//         });
//         $('.stop').click(function() {
//             $carouselSlider.carousel('pause');
//         });
//         $('.nextSlide').click(function() {
//             $carouselSlider.carousel('next');
//         });
//         $('.prevSlide').click(function() {
//             $carouselSlider.carousel('prev');
//         });
//         $carouselSlider.swiperight(function() {
//             $(this).carousel('prev');
//         });
//         $carouselSlider.swipeleft(function() {
//             $(this).carousel('next');
//         });

//     })(jQuery);
//     /* =========================================================
//      heightAuto
//      ============================================================ */

// }

/* =========================================================
 checkbox
 ============================================================ */
if (jQuery('.button-checkbox').length) {
    $('.button-checkbox').each(function() {});
};
/* =========================================================
 formValidation
 ============================================================ */

// if (jQuery('.md-contact').length) {

//     $('#contactForm').formValidation({
//         framework: 'bootstrap',
//         icon: {
//             valid: 'fa fa-check',
//             invalid: 'fa fa-times',
//             validating: 'fa fa-refresh'
//         },
//         addOns: {
//             reCaptcha2: {
//                 element: 'captchaContainer',
//                 theme: 'light',
//                 siteKey: '6LfRmggUAAAAADDBinXwWwNt-44JlH1Vp7WTaGFe',
//                 timeout: 120,
//                 message: 'captcha non valide'
//             }
//         },
//         err: {
//             container: 'tooltip'
//         },

//     })
// };

// if (jQuery('.md-job-details-form').length) {

//     $('#jobForm').formValidation({
//         framework: 'bootstrap',
//         icon: {
//             valid: 'fa fa-check',
//             invalid: 'fa fa-times',
//             validating: 'fa fa-refresh'
//         },
//         addOns: {
//             reCaptcha2: {
//                 element: 'captchaContainer',
//                 theme: 'light',
//                 siteKey: '6LfRmggUAAAAADDBinXwWwNt-44JlH1Vp7WTaGFe',
//                 timeout: 120,
//                 message: 'captcha non valide'
//             }
//         },
//         err: {
//             container: 'tooltip'
//         },
//         fields: {
//             firstName: {
//                 validators: {
//                     notEmpty: {
//                         message: "Ce champ est obligatoire"
//                     }

//                 }
//             },
//             lastName: {
//                 validators: {
//                     notEmpty: {
//                         message: "Ce champ est obligatoire"
//                     }

//                 }
//             },
//             email: {
//                 validators: {
//                     notEmpty: {
//                         message: "Ce champ est obligatoire"
//                     },
//                     regexp: {
//                         regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
//                         message: 'Addresse e-mail non valide'
//                     }
//                 }
//             },
//             phone: {
//                 validators: {
//                     notEmpty: {
//                         message: "Ce champ est obligatoire"
//                     }

//                 }
//             },
//             job: {
//                 validators: {
//                     notEmpty: {
//                         message: "Ce champ est obligatoire"
//                     }

//                 }
//             },
//             message: {
//                 validators: {
//                     notEmpty: {
//                         message: "Ce champ est obligatoire"
//                     }

//                 }
//             },
//             uploadFile: {
//                 validators: {
//                     notEmpty: {
//                         message: "Ce champ est obligatoire"
//                     }

//                 }
//             }
//         }
//     }).on('success.form.fv', function(e) {

//     })
//     /* ==============uploadBtn=================== */
//     window.getStats = function(fName) {
//         shortName = fName.match(/[^\/\\]+$/);
//         $('#uploadBtn').children('span').text(shortName[0]);
//     }
//     /* ==============fancySelect=================== */
//     var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

//     if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && (windowWidth > 991)) {
//         $('.basic').fancySelect();
//     }
// };



/* =========================================================
    Numbers only
 ============================================================ */

// function numbersOnly(evt) {
//     evt = (evt) ? evt : window.event;
//     var charCode = (evt.which) ? evt.which : evt.keyCode;
//     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//         return false;
//     }
//     return true;
// }

/* =========================================================
 heightAuto
 ============================================================ */

$(document).ready(function() {

    var heightAuto = function() {

        var tab = [];
        $('.md-portfolio .item').each(function(index, el) {
            tab[index] = $(this).outerHeight()
            return tab;
        });
        var maxHeight = Math.max.apply(Math, tab);

        //console.log(maxHeight);
        return maxHeight;
    };

    $(window).resize(function() {
        heightAuto();
    });

    $(window).load(function() {
        $('#carousel-slider2').css('height', heightAuto());
    });
});




/* =========================================================
 Calculate current slide
 ============================================================ */

var totalItems = $('#carousel-slider2 .item').length

$('#carousel-slider2').on('slid.bs.carousel', function() {
    currentIndex = $('div.active').index() + 1;


    $("#carousel-slider2 .item.active").each(function() {
        var index = $(this).index();
        $('.md-portfolio .carousel-indicators li').removeClass('active');
        $('.md-portfolio .carousel-indicators li').eq(index).addClass('active')
    });

});



/* =========================================================
    Dismiss notice
 ============================================================ */

var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && (windowWidth > 991)) {
    skrollr.init({
        forceHeight: false,
        easing: {
            vibrate: function(p) {
                return Math.sin(p * 10 * Math.PI);
            }
        },
        skrollrBody: 'skrollr-body'
    });
}


/* =========================================================
       progressButton
    ============================================================ */

// [].slice.call(document.querySelectorAll('button.progress-button')).forEach(function(bttn) {
//     new ProgressButton(bttn, {
//         callback: function(instance) {
//             var progress = 0,
//                 interval = setInterval(function() {
//                     progress = Math.min(progress + Math.random() * 0.1, 1);
//                     instance._setProgress(progress);

//                     if (progress === 1) {
//                         instance._stop(1);
//                         clearInterval(interval);
//                     }
//                 }, 200);
//         }
//     });
// });


console.timeEnd('loading time');