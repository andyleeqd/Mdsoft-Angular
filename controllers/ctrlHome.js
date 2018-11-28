new WOW().init();
mdsoft.controller('homeCtrl', ['$scope', '$rootScope', '$location','$stateParams', '$http', function($scope, $rootScope, $location,$stateParams,$http) {

    //-------------------------------jobs---------------------
       
     $http.get('fichiersjson/fJson.json')
       .then(function(res){
          $rootScope.jobs = res.data;                
        });

   

    //-------------------------------SlideText---------------------
    $scope.slideData = [{
        title: "DIGITAL DONE RIGHT",
        text: "We create <strong>first class digital experiences</strong> with a unique approach through our fusion of strategy, design and development."
    }];

    //-------------------------------Menu---------------------

    $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 5000).then(function() {
            console && console.log('You just scrolled to the top!');
        });
    }
    var section3 = angular.element(document.getElementById('section-3'));
    $scope.toSection3 = function() {
        $document.scrollToElementAnimated(section3);
    }
    //-------------------------------aboutUs---------------------
    $scope.aboutUs = [{
        title: "About us",
        text: "Headquartered in Tunisia, Mdsoft is providing businesses and brands with innovative digital solutions, since <strong>2005</strong>.<br /> Our multi-skilled team includes marketing specialists, designers, senior engineers, mobile and web developers and data analysts.<br /> We never outsourced our operations, ensuring all processes from the first to the last step and we continuously focus on R&D to innovate and meet worldwide customers expectations.<br /> Mdsoft relies on well-defined <strong>Agile</strong> processes and <strong>Total Quality Management</strong> policy to ensure on-time delivery with the highest quality."
    }];

    //-------------------------------services---------------------
    $scope.services = [{
        title: "<h2>Services</h2><h4>Explore Mdsoft’s services</h4>",
        listeServices: [
            { sousTitre: "Digital Strategy", text: "<ul><li> Comprehensive advice & support </li> <li> Benchmarking & Best practices guidance </li> <li> Brand recommendations </li> <li> User Experience </li></ul>", timeApp: "0s" },
            { sousTitre: "Project Management", text: "<ul><li>Requirements definition</li><li>Planning & Action plans</li><li>Analysis & Monitoring</li><li>Coordination between IT & Marketing entities</li></ul>", timeApp: "0.1s" },
            { sousTitre: "Mobile Development", text: "<ul><li>Native iOS, Android & Windows apps</li><li>Complex mobile experiences (live scores, scheduling…)</li><li>Strong focus on the front-end</li></ul>", timeApp: "0.2s" },
            { sousTitre: "Web Development", text: "<ul><li>Responsive Web Development</li><li>Drupal Web Portals Development</li><li>E-Commerce with Magento</li><li>Personalized solutions </li></ul>", timeApp: "0.3s" },
            { sousTitre: "Digital Surveys", text: "<ul><li>Web & Mobile Surveys</li><li>Full featured mobile app</li><li>Live user feedback products</li><li>Data Analysis</li></ul>", timeApp: "0.4s" },
            { sousTitre: "Conceptualisation", text: "<ul><li>UI / UX Design</li><li>Information Architecture</li><li>Content strategy & Copywriting</li><li>User research</li></ul>", timeApp: "0.5s" }
        ]

    }];


    //-------------------------------Portfolio---------------------
    $scope.titleportfolio = "<h2>Portfolio</h2><h4>Some of Mdsoft’s recent projects</h4>";
    $scope.portfolio = [{
            id: "1",
            img: [
                { label: "slide-1.png", classAnim: "expandOpen" }
            ],
            title: [
                { label: "Sidi Romdhan", classAnim: "fadeIn" }
            ],
            subtitle: " <p> A multilingual mobile application (Arabic / French) realized for the telecommunication provider Ooredoo Tunisia and grouping, useful features for Ramadhan ( 2016 ): </p>",
            desc: "<ul><li>Prayers schedules with Adhan</li><li>Qibla</li><li>Quran and Doâa..</li></ul>",
            btnsContainer: {
                classAnim: "fadeInUp",
                btns: [{
                    lien: "#",
                    label: "<span class='smallT'>Download on the</span><br />App Store",
                    class: "btn1"
                }, {
                    lien: "#",
                    label: "<span class='smallT'>Get it on</span><br />Google play",
                    class: "btn2"
                }]
            }
        }, {
            id: "2",
            img: [
                { label: "slide-2.png", classAnim: "rollIn" }
            ],
            title: [
                { label: "Ostade", classAnim: "fadeIn" }
            ],
            subtitle: "<p>The multilingual mobile application (Arabic / French) for the Algerian operator Ooredoo who allows to follow in real time all the current events of the World cup 2014 with comments of the matches, results, videos replays and Goals in 3D.<br />The production of the news and the comments of the real time matches were managed by the team MDSOFT. </p>",
            desc: "",
            btnsContainer: {
                classAnim: "fadeInUp",
                btns: [{
                    lien: "https://itunes.apple.com/SG/app/id885092254?mt=8&ign-mpt=uo%3D4",
                    label: "<span class='smallT'>Download on the</span><br />App Store",
                    class: "btn1"
                }, {
                    lien: "https://play.google.com/store/apps/details?id=com.MDSOFT.ooredoo.wc",
                    label: "<span class='smallT'>Get it on</span><br />Google play",
                    class: "btn2"
                }]
            }
        }, {
            id: "3",
            img: [
                { label: "slide-3.png", classAnim: "fadeIn" }
            ],
            title: [
                { label: "4G", classAnim: "fadeIn" }
            ],
            subtitle: "<p>The mobile application dedicated to Ooredoo Tunisia 4G which contains promotional videos, data bundles, smartphones’s catalog, services related to 4G and Ooredoo shops location with itinerary.</p>",
            desc: "",
            btnsContainer: {
                classAnim: "fadeIn",
                btns: [{
                    lien: "https://itunes.apple.com/fr/app/ooredoo-4g/id1098158525?mt=8",
                    label: "<span class='smallT'>Download on the</span><br />App Store",
                    class: "btn1"
                }, {
                    lien: "https://play.google.com/store/apps/details?id=com.mdweb.ooredoo4g&hl=fr",
                    label: "<span class='smallT'>Get it on</span><br />Google play",
                    class: "btn2"
                }]
            }
        }, {
            id: "4",
            img: [
                { label: "slide-4.png", classAnim: "swing" }
            ],
            title: [
                { label: "Etoile Sportive du Sahel", classAnim: "fadeIn" }
            ],
            subtitle: "<p>Multilingual mobile application (Arabic / French) sponsored by Ooredoo Tunisia and dedicated to the supporters of the Sports Star of Sahel (ESS) football team. The application allows to follow all the novelties and the matches played by the team.</p>",
            desc: "",
            btnsContainer: {
                classAnim: "fadeInUp",
                btns: [{
                    lien: "https://itunes.apple.com/fr/app/ess-officiel/id1113049666?mt=8",
                    label: "<span class='smallT'>Download on the</span><br />App Store",
                    class: "btn1"
                }, {
                    lien: "https://play.google.com/store/apps/details?id=com.mdweb.essmobile&hl=fr",
                    label: "<span class='smallT'>Get it on</span><br />Google play",
                    class: "btn2"
                }]
            }
        }, {
            id: "5",
            img: [
                { label: "slide-5.png", classAnim: "fadeIn" }
            ],
            title: [
                { label: "Sotefi Selecta (2014)", classAnim: "fadeIn" }
            ],
            subtitle: "<p>Sotefi Selecta International Portal :</p>",
            desc: "<ul><li>Fully Responsive Visual Design</li><li>Front-end and Back-end development</li><li>Custom Content Management System</li></ul><p>Sotefi is the leading manufacturer specialized in school and work stationery in Tunisia.</p>",
            btnsContainer: {
                classAnim: "fadeIn",
                btns: [{
                    lien: "http://www.sotefi-selecta.com/",
                    label: "<span class='smallT'>Visit the</span><br />Website",
                    class: "btn3"
                }]
            }
        }, {
            id: "6",
            img: [
                { label: "slide-6.png", classAnim: "expandOpen" }
            ],
            title: [
                { label: "IHEC Alumni <br /><span>Association (2016)</span>", classAnim: "fadeIn" }
            ],
            subtitle: "<p>The official portal and network for IHEC Alumni from all over the world</p>",
            desc: "<ul><li>Responsive Web Design</li><li>Front-end and Back-end development</li><li>Advanced Online membership and community</li></ul>",
            btnsContainer: {
                classAnim: "fadeIn",
                btns: [{
                    lien: "http://www.alumnihec.tn/",
                    label: "<span class='smallT'>Visit the</span><br />Website",
                    class: "btn3"
                }]
            }
        }, {
            id: "7",
            img: [
                { label: "slide-7.png", classAnim: "fadeIn" }
            ],
            title: [
                { label: "Ooredoo Algeria <br /><span>Association (2016)</span>", classAnim: "fadeIn" }
            ],
            subtitle: "",
            desc: "<p>The “Algerian national contest of Business Plans” portal with a SaaS solution for submission and evaluation procedures of those plans.</p>",
            btnsContainer: {
                classAnim: "fadeInUp",
                btns: [{
                    lien: "http://www.tstart.dz/",
                    label: "<span class='smallT'>Visit the</span><br />Website",
                    class: "btn3"
                }]
            }
        }]
        //  self.heightAuto = function() {
        //     var tab = [];
        //     lengSlide = $scope.portfolio.length;
        //     console.log(lengSlide);
        //     for (var i = 0; i < lengSlide; i++) {
        //         console.log("slide", i);
        //          tab[i] = tab[i].outerHeight()
        //         console.log("tab",tab[i]);
        //         return tab;
        //     }

    //     var maxHeight = Math.max.apply(Math, tab);
    //     console.log("height slide", maxHeight);

    //     //console.log(maxHeight);
    //     return maxHeight;
    //     console.log(maxHeight);
    // };
    // heightAuto();






    // $(window).load(function() {

    //     $('.carousel').each(function() {

    //         $(this).carouselHeights();

    //     });

    // });

    // // Normalize Bootstrap Carousel Heights

    // $.fn.carouselHeights = function() {

    //     var items = $(this).find('.item'), // grab all slides

    //         heights = [], // create empty array to store height values

    //         tallest, // create variable to make note of the tallest slide

    //         call;

    //     var normalizeHeights = function() {

    //         items.each(function() { // add heights to array

    //             heights.push($(this).outerHeight());

    //         });

    //         tallest = Math.max.apply(null, heights); // cache largest value

    //         items.css('height', tallest);
    //         console.log("height", tallest);

    //     };
    //     normalizeHeights();


    //     $(window).on('resize orientationchange', function() {

    //         // reset vars

    //         tallest = 0;

    //         heights.length = 0;

    //         items.css('height', ''); // reset height

    //         if (call) {

    //             clearTimeout(call);

    //         };

    //         call = setTimeout(normalizeHeights, 100); // run it again

    //     });


    // };

    //-------------------------------Clients---------------------
    $scope.clients = [{
        title: "<h2>Our clients</h2><h3>We are proud to collaborate with brilliant <strong>partners</strong> across a vast spectrum of sectors including government departments, automotive, telecommunication and retail. And these are just some of them…</h3>",
        logos: [{
            src: "ooredoo.png",
            alt: "Ooredoo",
            delayAnim: "0s"
        }, {
            src: "tunisieTelecom.png",
            alt: "Tunisie Telecom",
            delayAnim: "0.1s"
        }, {
            src: "renault.png",
            alt: "Renault",
            delayAnim: "0.2s"
        }, {
            src: "monoprix.png",
            alt: "Monoprix",
            delayAnim: "0.3s"
        }, {
            src: "ihec.png",
            alt: "IHEC",
            delayAnim: "0.4s"
        }, {
            src: "sotefi.png",
            alt: "SOTEFI",
            delayAnim: "0.5s"
        }, {
            src: "peugeot.png",
            alt: "Peugeot",
            delayAnim: "0.6s"
        }, {
            src: "ministere1.png",
            alt: "Ministére de l'Environnement et du développement Durable",
            delayAnim: "0.7s"
        }]
    }];



}]);
