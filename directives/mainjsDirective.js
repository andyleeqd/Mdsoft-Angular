mdsoft.directive("slideDirective", function() {
    return {
        link: function(scope, element, attr) {
            var slider;
            slider = angular.element('.md-slider,.md-slider .carousel-inner,.md-slider .mask,.md-slider .image');
            windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            slider.css('height', windowHeight);
        }
    };
});
mdsoft.directive("portfolioDirective", function() {
    return {
        link: function(scope, element, attr, $timeout) {

            $(window).load(function() {

                $('.carousel').each(function() {

                    $(this).carouselHeights();

                });

            });

            // Normalize Bootstrap Carousel Heights

            $.fn.carouselHeights = function() {

                var items = $(this).find('.item'), // grab all slides

                    heights = [], // create empty array to store height values

                    tallest, // create variable to make note of the tallest slide

                    call;

                var normalizeHeights = function() {

                    items.each(function() { // add heights to array

                        heights.push($(this).outerHeight());

                    });

                    tallest = Math.max.apply(null, heights); // cache largest value

                    items.css('height', tallest);
                    console.log("height", tallest);

                };
                normalizeHeights();


                $(window).on('resize orientationchange', function() {

                    // reset vars

                    tallest = 0;

                    heights.length = 0;

                    items.css('height', ''); // reset height

                    if (call) {

                        clearTimeout(call);

                    };

                    call = setTimeout(normalizeHeights, 100); // run it again

                });
                $(window).on('load', function() {
                    console.log("load");
                    // reset vars

                    tallest = 0;

                    heights.length = 0;

                    items.css('height', ''); // reset height

                    if (call) {

                        clearTimeout(call);

                    };

                    call = setTimeout(normalizeHeights, 100); // run it again

                });


            };



            // function heightAuto() {

            //     var tab = [];
            //     lengSlide = angular.element('.md-portfolio .item').length;
            //     console.log(lengSlide);
            //     for (var i = 0; i < lengSlide; i++) {
            //         console.log("slide", angular.element('.md-portfolio .item').length);
            //         tab[index] = angular.element(this).outerHeight()
            //         return tab;
            //     }
            //     // angular.element('.md-portfolio .item').each(function(index, el) {
            //     //     console.log("slide",index);
            //     //     tab[index] = angular.element(this).outerHeight()
            //     //     return tab;
            //     // });
            //     var maxHeight = Math.max.apply(Math, tab);
            //     console.log("height slide", maxHeight);

            //     //console.log(maxHeight);
            //     return maxHeight;
            //     console.log(maxHeight);
            // };
            // heightAuto();
            // angular.element(window).resize(function() {
            //     heightAuto();
            // });

            // angular.element(window).load(function() {
            //     angular.element('#carousel-slider2').css('height', heightAuto());
            // });
        }
    };
});

mdsoft.directive("jobsDirective", function() {
    return {
        link: function(scope, element, attr) {
            angular.element('.btn-control').on('click', function(event) {
                /* Act on the event */
                angular.element('.header-top').toggleClass('active');
                angular.element(this).toggleClass('close');

                if (angular.element('.btn-control').hasClass("close")) {
                    //console.log("act2");
                    angular.element(".btn-control img").attr("src", "src/images/icons/cross-out.svg");
                    angular.element(".btn-control img").attr("width", "18");
                    angular.element(".container-jobs-bottom .jobs").fadeOut(400);
                    angular.element(".affichNext").fadeIn(200);
                } else {
                    angular.element(".btn-control img").attr("src", "src/images/icons/flame.svg");
                    angular.element(".btn-control img").attr("width", "24");
                    angular.element(".affichNext").fadeOut(200);
                    angular.element(".container-jobs-bottom .jobs").fadeIn(400);
                }
            });
        }
    }
});
mdsoft.directive('homeDirective', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            // ============================Menu======================================
            var $Menu = angular.element('.Menu');

            function showMenu(div) {
                div.transition({
                    opacity: 1,
                    x: '0'
                }, 150, function(e) {
                    //call back
                    showMenu(div.prev("li"));
                });
            }

            function hideMenu(div) {
                div.transition({
                    opacity: 0,
                    x: '10'
                }, 150, function(e) {
                    //call back
                    hideMenu(div.next("li"));
                });
            }

            angular.element('#menulogo').click(function() {

                if ($Menu.hasClass('hover')) {
                    $Menu.removeClass('hover');
                    angular.element('.rect1').css('opacity', '1');
                    angular.element('.rect2').css('transform', 'rotate(0deg) translate(0px, 0px)');
                    angular.element('.rect3').css('transform', 'rotate(0deg) translate(0px, 0px)');
                    hideMenu(angular.element('.allMenu li:first'));
                } else {
                    $Menu.addClass('hover');
                    angular.element('.rect1').css('opacity', '0');
                    angular.element('.rect2').css('transform', 'rotate(45deg) translate(4px, -8px)');
                    angular.element('.rect3').css('transform', 'rotate(-45deg) translate(-15px, 0px)');
                    showMenu(angular.element('.allMenu li:last'));

                }
            });
            // ============================MD Menu mobile======================================
            angular.element('#wsnavtoggle').on('click', function(event) {
                event.preventDefault();
                angular.element('body').addClass('mdoffcanvasopener').prepend('<div class="overlapblackbg"></div>');
                angular.element('.overlapblackbg').on('click', function(event) {
                    event.preventDefault();
                    /* Act on the event */
                    angular.element('body').removeClass('mdoffcanvasopener');
                    angular.element(this).remove();

                });
                angular.element('.closeMenu').on('click', function(event) {
                    event.preventDefault();
                    /* Act on the event */
                    angular.element('body').removeClass('mdoffcanvasopener');
                    angular.element('.overlapblackbg').remove();

                });
                angular.element('.mdmenu .mdmenu-list li a').on('click', function(event) {
                    /* Act on the event */
                    angular.element('body').removeClass('mdoffcanvasopener');
                    angular.element('.overlapblackbg').remove();

                });
            });

            // ============================Jobs======================================
            angular.element('.btn-control').on('click', function(event) {
                event.preventDefault();
                /* Act on the event */
                angular.element('.header-top').toggleClass('active');
                angular.element(this).toggleClass('close');

                if (angular.element('.btn-control').hasClass("close")) {
                    //console.log("act2");
                    angular.element(".btn-control img").attr("src", "images/icons/cross-out.svg");
                    angular.element(".btn-control img").attr("width", "18");
                    angular.element(".container-jobs-bottom .jobs").fadeOut(400);
                    angular.element(".affichNext").fadeIn(200);
                } else {
                    angular.element(".btn-control img").attr("src", "images/icons/flame.svg");
                    angular.element(".btn-control img").attr("width", "24");
                    angular.element(".affichNext").fadeOut(200);
                    angular.element(".container-jobs-bottom .jobs").fadeIn(400);
                }
            });
            // ============================Affich boxes en scroll with anim======================================
            angular.element(window).scroll(function() {
                if (angular.element(this).scrollTop() > 870) {
                    // console.log(angular.element(this).scrollTop())
                    angular.element('.md-services').addClass('activeAnim');
                } else {

                    angular.element('.md-services').removeClass('activeAnim');
                }
                if (angular.element(this).scrollTop() > 2600) {
                    angular.element('.md-clients').addClass('activeAnim');
                } else {
                    angular.element('.md-clients').removeClass('activeAnim');
                }


            });
        }
    }
});

mdsoft.directive('scrollTo', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            angular.element('.scrollTo').each(function() {
                angular.element(this).attr('href', $(this).attr('href').replace('/', ''));
            });
        }
    }
});
mdsoft.directive('backTop', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            angular.element(".back-top").hide();
            angular.element(window).scroll(function() {
                if (angular.element(this).scrollTop() > 900) {
                    angular.element('.back-top').fadeIn();
                } else {
                    angular.element('.back-top').fadeOut();
                }
            })
        }
    };
});

mdsoft.directive('uploadBtn', function() {
    return {
        restrict: 'E',
        require: '^?form',
        link: function(scope, element, attrs) {

            this.getStats = function(fName) {
                var file = this.uploadFile.value;
                var shortName = file.match(/[^\/\\]+$/);
                $('#uploadBtn').children('span').text(shortName[0]);
            }
        }
    }
});
