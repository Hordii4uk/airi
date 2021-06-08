

    // Section with Editor
$(document).on('shopify:section:load', function(e){ 
  $('#' + e.target.id).find('[data-section]').sectionJs();
}).ready(function() {
  $('[data-section]').each(function(){ $(this).sectionJs() });
});

$.fn.sectionJs = function(){
  var $this = this;
  if($this.data('section') == "FullWidthSlider") {
    $this.FullWidthSliderActive();
  }else if($this.data('section') == "FeaturedCategories") {
    $this.find('.airi-element-carousel').FeaturedCategories();
  }else if($this.data('section') == "FeaturedCollection") {
    $this.find('.airi-element-carousel').FeaturedCollection();
  }else if($this.data('section') == "ProductCategory") {
    $this.find('.airi-element-carousel').ProductCategory();
  }else if($this.data('section') == "Testimonial") {
    $this.find('.airi-element-carousel').Testimonial();
  }else if($this.data('section') == "Testimonial_2") {
    $this.find('.airi-element-carousel').Testimonial_2();
  }else if($this.data('section') == "BannerArea") {
    $this.find('.airi-element-carousel').BannerArea();
  }else if($this.data('section') == "BannerArea_2") {
    $this.find('.airi-element-carousel').BannerArea_2();
  }else if($this.data('section') == "BannerArea_3") {
    $this.find('.airi-element-carousel').BannerArea_3();
  }else if($this.data('section') == "BannerArea_4") {
    $this.find('.airi-element-carousel').BannerArea_4();
  }else if($this.data('section') == "LatestBlog") {
    $this.find('.airi-element-carousel').LatestBlog();
  }else if($this.data('section') == "LatestBlog_2") {
    $this.find('.airi-element-carousel').LatestBlog_2();
  }else if($this.data('section') == "LatestBlog_3") {
    $this.find('.airi-element-carousel').LatestBlog_3();
  }else if($this.data('section') == "BrandLogo") {
    $this.find('.airi-element-carousel').BrandLogo();
  }else if($this.data('section') == "DealProduct") {
    $this.find('.airi-element-carousel').DealProduct();
  }else if($this.data('section') == "TrendingProduct") {
    $this.find('.airi-element-carousel').TrendingProduct();
  }else if($this.data('section') == "Instagram") {
        $this.InstagramSection();
  }else if($this.data('section') == "ListCollection") {
    $this.find('.airi-element-carousel').ListCollection();
  }else if($this.data('section') == "TeamArea") {
    $this.find('.airi-element-carousel').TeamArea();
  }else if($this.data('section') == "UpsellProduct") {
    $this.find('.airi-element-carousel').UpsellProduct();
  }else if($this.data('section') == "RelatedProduct") {
    $this.find('.airi-element-carousel').RelatedProduct();
  }else if($this.data('section') == "HeaderSections") {
    $this.HeaderSectionsActivation();
  }else if($this.data('section') == "ProductWIthSidebar_1") {
    $this.find('.product_slick_column4').ProductWIthSidebar_1();
  }else{}   
}
    
    
    // Treading Area active js
$.fn.FeaturedCategories = function() {
  var $FeaturedCategoriesVAR = this;
  $FeaturedCategoriesVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
	prevArrow: '<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',
	nextArrow: '<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>',
  });
};


    // Featured Collection active js
$.fn.FeaturedCollection = function() {
  var $FeaturedCollectionVAR = this;
  $FeaturedCollectionVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
	arrows: false,
    dots: true,
    infinite: true,
   centerMode: true,
  });
};


    // Product Category active js
$.fn.ProductCategory = function() {
  var $ProductCategoryVAR = this;
  $ProductCategoryVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
	prevArrow: '<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',
	nextArrow: '<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>',
  });
};



    // Testimonial active js
$.fn.Testimonial = function() {
  var $TestimonialVAR = this;
  $TestimonialVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: false,
  });
};



    // Testimonial 2 active js
$.fn.Testimonial_2 = function() {
  var $Testimonial_2VAR = this;
  $Testimonial_2VAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: false,
  });
};


    // Banner Area active js
$.fn.BannerArea = function() {
  var $BannerAreaVAR = this;
  $BannerAreaVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: false,
  });
};




    // Banner Area 2 active js
$.fn.BannerArea_2 = function() {
  var $BannerArea_2VAR = this;
  $BannerArea_2VAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: false,
  });
};




    // Banner Area 3 active js
$.fn.BannerArea_3 = function() {
  var $BannerArea_3VAR = this;
  $BannerArea_3VAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: false,
  });
};


    // Banner Area 4 active js
$.fn.BannerArea_4 = function() {
  var $BannerArea_4VAR = this;
  $BannerArea_4VAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: false,
  });
};


    // Latest Blog active js
$.fn.LatestBlog = function() {
  var $LatestBlogVAR = this;
  $LatestBlogVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
    infinite: true,
			dots: true,
			arrows: false,
  });
};


    // Latest Blog 2 active js
$.fn.LatestBlog_2 = function() {
  var $LatestBlog_2VAR = this;
  $LatestBlog_2VAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: false,
  });
};


    // Latest Blog 3 active js
$.fn.LatestBlog_3 = function() {
  var $LatestBlog_3VAR = this;
  $LatestBlog_3VAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: false,
  });
};

    // Brand Logo active js
$.fn.BrandLogo = function() {
  var $BrandLogoVAR = this;
  $BrandLogoVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: false,
  });
};


    // Deal Product active js
$.fn.DealProduct = function() {
  var $DealProductVAR = this;
  $DealProductVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: true,
			arrows: false,
  });
};


    // Trending Product active js
$.fn.TrendingProduct = function() {
  var $TrendingProductVAR = this;
  $TrendingProductVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: true,
	prevArrow: '<span class="slick-btn slick-prev"><i class="fa fa-angle-left"></i></span>',
	nextArrow: '<span class="slick-btn slick-next"><i class="fa fa-angle-right"></i></span>',
  });
};


    // Instgram active js
    $.fn.InstagramSection = function(){
      
      
      var activation = this.find('[data-username]'),
          activeId = activation.attr('id'),
          clientUsername = activation.attr('data-username'),
          instagramHastag = activation.attr('data-hashtag'),
          ItemsLimit = activation.attr('data-limit'),
          imageSize = activation.attr('data-size'),
          instaslider = ".instagram-carousel";

      $.instagramFeed({
        'tag': instagramHastag,
        'username': clientUsername,
        'container': "#"+activeId,
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'styling': false,
        'items': ItemsLimit,
        'margin': 1,
        'image_size': imageSize
      });

 
    };



    // List Collection active js
$.fn.ListCollection = function() {
  var $ListCollectionVAR = this;
  $ListCollectionVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: true,
	prevArrow: '<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',
	nextArrow: '<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>',
  });
};



    // Team Area active js
$.fn.TeamArea = function() {
  var $TeamAreaVAR = this;
  $TeamAreaVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: false,
  });
};



    // Upsell Product active js
$.fn.UpsellProduct = function() {
  var $UpsellProductVAR = this;
  $UpsellProductVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
			dots: false,
			arrows: true,
	prevArrow: '<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',
	nextArrow: '<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>',
  });
};


    // Related Product active js
$.fn.RelatedProduct = function() {
  var $RelatedProductVAR = this;
  $RelatedProductVAR.slick({
    adaptiveHeight: true,
    speed: 1000,
	dots: false,
	arrows: true,
	prevArrow: '<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',
	nextArrow: '<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>',
  });
};




(function($) {
  "use strict";

  jQuery(document).ready(function(){


	
    // Check if element exists
    $.fn.elExists = function() {
        return this.length > 0;
    };

	// Variables
	var $html, window_width, pageUrl, header, topBarHeight, mainHeaderHeight, 
	innerHeaderHeight, headerTotalHeight, mobileHeader, mobileHeaderHeight, pageUrl, $body, 
	$galleryWithThumbs, $window;

	$body = $('body');
	$html = $('html');
	header = $('.header');
	mobileHeader = $('.header-mobile');
	$window = $(window);
	window_width = $(window).width();
	pageUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
	topBarHeight = ( $('header .top-bar').elExists() ) ? $('header .top-bar')[0].getBoundingClientRect().height : 0;
	mainHeaderHeight = ( $('.header').elExists() ) ? $('.header')[0].getBoundingClientRect().height : 0;
	innerHeaderHeight = ( $('.header .header-inner').elExists() ) ? $('.header .header-inner')[0].getBoundingClientRect().height : 0;
	headerTotalHeight = topBarHeight + mainHeaderHeight;
	mobileHeaderHeight = ($('.header-mobile').elExists()) ? $('.header-mobile')[0].getBoundingClientRect().height : 0;
	pageUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
	$galleryWithThumbs = $('.gallery-with-thumbs');

	
	/**********************
	*Mobile Menu Activatin
	***********************/ 
    $( '#dl-menu' ).dlmenu({
        animationClasses : { 
			classin: "dl-animate-in-2",
			classout: "dl-animate-out-2"
        }
    });
    

	$('.menu-btn').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$('.mobile-navigation').toggleClass('open-mobile-menu');
		$('.dl-menu').toggleClass('dl-menuopen');
	});
    
    $(".main-navigation-2 a").each(function() {
        if ($(this).attr("href") === pageUrl || $(this).attr("href") === '') {
            $(this).closest('li').addClass("active");
            $(this).parents('li.mainmenu__item-2').addClass('active');
        }
        else if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            $('.main-navigation a[href="index.html"]').parent('li').addClass('active');
        }
    })


	/**********************
	* Countdown Activation
	***********************/
	
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Minutes</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Seconds</span></div>'));
		});
	}); 

	/**********************
	*Header Toolbar Sidenav Expand
	***********************/

	function toolbarExpand(){
		$('.toolbar-btn').on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			var target = $(this).attr('href');
			var prevTarget = $('.toolbar-btn').attr('href');
			console.log(prevTarget);
			var prevTarget = $(this).parent().siblings().children('.toolbar-btn').attr('href');
			$(target).addClass('open');
			$(prevTarget).removeClass('open');
			if(!$(this).is('.search-btn')){
				$('.ai-global-overlay').addClass('overlay-open');
			}
			$('.main-navigation').removeClass('open-mobile-menu');
			$('.dl-menu').removeClass('dl-menuopen');
			$('.menu-btn').removeClass('open');
		});
	}

	

	/**********************
	*Click on Documnet
	***********************/

	function clickDom(){
		$body.on('click', function (e){
		    var $target = e.target;
		    var dom = $('.wrapper').children();
		    
		    if (!$($target).is('.toolbar-btn') && !$($target).is('.product-filter-btn') && !$($target).parents().is('.open')) {
		        dom.removeClass('open');
		        dom.find('.open').removeClass('open');
		        $('.ai-global-overlay').removeClass('overlay-open');
		    }
		});
	};


	/**********************
	*Close Button Actions
	***********************/

	function closeItems(){
		$('.btn-close').on('click', function(e){
			e.preventDefault();
			$(this).parents('.open').removeClass('open');
			if($('.ai-global-overlay').hasClass('overlay-open')){
				$('.ai-global-overlay').removeClass('overlay-open');
			}
		});
	}
	
	/**********************
	*Transparent Header
	***********************/

	function transparentHeaderSpacing(){
		if($('.wrapper').hasClass('enable-header-transparent')){
			$(window).on({
				load: function(){
					if(window_width > 991){
						$('.main-content-wrapper').css('margin-top', -mainHeaderHeight);
					}else{
						$('.main-content-wrapper').css('margin-top', 0);
					}
					
				},
				resize: function(){
					var mainHeaderHeightResize = ( $('.header').elExists() ) ? $('.header')[0].getBoundingClientRect().height : 0;
					var ww = $(window).width();
					if(ww > 991){
						$('.main-content-wrapper').css('margin-top', -mainHeaderHeightResize);
					}else{
						$('.main-content-wrapper').css('margin-top', 0);
					}
					
				}
			});
		}
	}

	/**********************
	*Mobile Header Position
	***********************/

	function mobileHeaderPosition(){
		$(window).on({
			load: function(){
				mobileHeaderPositionInner(mainHeaderHeight);
			},
			resize: function(){
				var mainHeaderHeightResize = ( $('.header').elExists() ) ? $('.header')[0].getBoundingClientRect().height : 0;
				mobileHeaderPositionInner(mainHeaderHeightResize);
			}
		});
		function mobileHeaderPositionInner(height){
			if($('header .top-bar').elExists()){
				$('.header-mobile').css('margin-top', -(height - topBarHeight));
			}else{
				$('.header-mobile').css('margin-top', -height);
			}
		}
	}
    

    
/**********************
	* Sticky Header
	***********************/
  
function stickyHeader(){
		$(window).on({
			load: function(){
				if(window_width < 992){
					stickyConditional('.header-mobile-2', mobileHeaderHeight);
				}else{
					stickyConditional('.fixed-header-2', mainHeaderHeight);
				}
			},
			resize: function(){
				var ww = $(window).width();
				if(ww < 992){
					stickyConditional('.header-mobile-2', mobileHeaderHeight);
				}else{
					stickyConditional('.fixed-header-2', mainHeaderHeight);
				}
			}
		});

		function stickyConditional(selector, height){
			$(window).on('scroll', function(){
			    if ($(window).scrollTop() >= height) {
			    	$(selector).addClass('sticky-header');
			    	$('.header-mobile-2').css('margin-top', 0);
			    }
			    else {
			    	$(selector).removeClass('sticky-header');
					if($('header .top-bar').elExists()){
						$('.header-mobile-2').css('margin-top', -(mainHeaderHeight - topBarHeight));
					}else{
						$('.header-mobile-2').css('margin-top', -(mainHeaderHeight));
					}
			    }
			});
		}
	}

	function stickySocial(stickyArg){
		if($(stickyArg.selector).elExists()){
			var sticky = $(stickyArg.selector);
			var container = $(stickyArg.container);
			var topPosition = sticky.offset().top;
			var leftPosition = sticky.offset().left;
			var height = sticky.outerHeight();
			var containerHeight = container.outerHeight();
			var containerTop = container.offset().top;
			var stickyPosition =  topPosition - height;
			var topSpacing = stickyArg.topSpacing;
			var defaultTopSpacing = topPosition - containerTop;
			var columnWidth = parseInt(stickyArg.columnWidth);
			var className = stickyArg.selector.substr(1);

			$(window).on('scroll', function(){
				var windowTop = $(window).scrollTop(); 
				if(windowTop >= stickyPosition && windowTop <= containerHeight){
					sticky.addClass('fixed').css({'left': leftPosition, 'top': topSpacing});
				} else{
					sticky.removeClass('fixed').css({'left': 'auto', 'top': defaultTopSpacing+'px'});
				}
			});

			$(window).on({
				load: function(){
					
					if(window_width < columnWidth){
						sticky.removeClass(className).addClass('no-sticky');
					}else{
						sticky.addClass(className).removeClass('no-sticky');
					}
				},
				resize: function(){
					var ww = $(window).width();
					if(ww < columnWidth){
						sticky.removeClass(className).addClass('no-sticky');
					}else{
						sticky.addClass(className).removeClass('no-sticky');
					}
				}
			});
		}

	}
	var SocialStickyArg = {
		"selector": ".sticky-social",
		"container": ".single-post",
		"topSpacing": "100px",
		"columnWidth": "992"
	}

	stickySocial(SocialStickyArg);

    

	/**********************
	*Transparent Header
	***********************/
	function asideHeaderSpacing(){
		if($('.wrapper').not('.enable-header-transparent') && $('.wrapper').hasClass('enable-header-aside')){
			$(window).on({
				load: function(){
					var asideHeaderWidth =($('.header-aside').elExists()) ? $('.header-aside')[0].getBoundingClientRect().width : 0;
					$('.wrapper').css('padding-left', asideHeaderWidth);
				},
				resize: function(){
					var asideHeaderWidth =($('.header-aside').elExists()) ? $('.header-aside')[0].getBoundingClientRect().width : 0;
					$('.wrapper').css('padding-left', asideHeaderWidth);
				}
			});
		}
	}
	

	/**********************
	*Transparent Header
	***********************/

	function closeNotice(){
		$('.close-notice').on('click', function(e){
			e.preventDefault();
			$('.notice-text-wrapper').slideUp('500').addClass('notice-text-close');
		});
	}
	

	/**********************
	*Adding Slide effect to dropdown
	***********************/ 

	function dropdownAnimation(){
		$('.dropdown').on('show.bs.dropdown', function(e){
		  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
		});

		$('.dropdown').on('hide.bs.dropdown', function(e){
		  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
		});		
	}


	/**********************
	*BootStrap Tab
	***********************/ 

	$('.product-tab__link').on('click', function(){
		var parent = $(this).parent('.product-tab__item');
		parent.addClass('active');
		parent.siblings().removeClass('active');
	});


	/**********************
	* Expand User Activation
	***********************/

	function expandAction(){
		$(".expand-btn").on('click', function(e){
			e.preventDefault();
			var target = $(this).attr('href');
			$(target).slideToggle('slow');
		});
	}

	/**********************
	*Expand new shipping info  
	***********************/

	function expandShippingInfo(){
		$("#shipdifferetads").on('change', function(){
			if(  $("#shipdifferetads").prop( "checked" ) ){
				$(".ship-box-info").slideToggle('slow');
			}else{
				$(".ship-box-info").slideToggle('slow');
			}
		})
	}


	/**********************
	* Expand payment Info
	***********************/

	function expandPaymentInfo(){
        $('input[name="payment-method"]').on('click', function () {

            var $value = $(this).attr('value');
            $(this).parents('.payment-group').siblings('.payment-group').children('.payment-info').slideUp('300');
            $('[data-method="' + $value + '"]').slideToggle('300');
        });
	}

	/**********************
	* Popup Close
	***********************/

	function popupClose(){
		$('.popup-close').on('click', function(e){
			e.preventDefault();
			$('#subscribe-popup').fadeOut('slow');
		});
		$('.ai-newsletter-popup-modal').on('click', function(e){
			e.stopPropagation();
		});
	}
	
	function productFilterExpand(){
		$('.product-filter-btn').on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			$(this).toggleClass('open');
			$('.advanced-product-filters').slideToggle('slow');
		});
	}

	/**********************
	*Magnific Popup Activation
	***********************/ 

	var imagePopup = $('.popup-btn');
	var videoPopup = $('.video-popup');

	imagePopup.magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	videoPopup.magnificPopup({
		type: 'iframe',
        closeMarkup: '<button type="button" class="custom-close mfp-close"><i class="dl-icon-close mfp-close"></i></button type="button">'
	});

	/**********************
	*Product Image Carousel
	***********************/ 
	$('.product-gallery-image-carousel').slick({
		slidesToShow: 1,
		arrows: true,
		prevArrow: '<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',
		nextArrow: '<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>',
	});

	function galleryWithThumb(){
		if($galleryWithThumbs.elExists()){
			// params
		
			var navSliderSelector = $('.nav-slider');

			navSliderSelector.each(function(index, element){

				// Carousel Options
				
				var options = $('.nav-slider')[0].getAttribute('data-options');
				var optionsObj = JSON.parse(options);
				
				var vertical = optionsObj.vertical ? optionsObj.vertical : false;
				var vertical_md = optionsObj.vertical_md? optionsObj.vertical_md : false;
				var arrows = optionsObj.arrows ? optionsObj.arrows : false;
				var dots = optionsObj.dots ? optionsObj.dots : false;
				var infinite = optionsObj.infinite ? optionsObj.infinite : false;
				var infinite_md = optionsObj.infinite_md ? optionsObj.infinite_md : false;
				var arrowPrev = optionsObj.arrowPrev ? optionsObj.arrowPrev : '';
				var arrowNext = optionsObj.arrowNext ? optionsObj.arrowNext : '';
				var arrowPrev_md = optionsObj.arrowPrev_md ? optionsObj.arrowPrev_md : '';
				var arrowNext_md = optionsObj.arrowNext_md ? optionsObj.arrowNext_md : '';
				var slideToShow = optionsObj.slideToShow ? optionsObj.slideToShow : 3;
				var slideToShow_md = optionsObj.slideToShow_md ? optionsObj.slideToShow_md : 3;
				var slideToShow_sm = optionsObj.slideToShow_sm ? optionsObj.slideToShow_sm : 3;
				var slideToShow_xs = optionsObj.slideToShow_xs ? optionsObj.slideToShow_xs : 3;
				var slideToScroll = optionsObj.slideToScroll ? optionsObj.slideToScroll : 1;
				var slideToScroll_md = optionsObj.slideToScroll_md ? optionsObj.slideToScroll_md : 1;
				var slideToScroll_sm = optionsObj.slideToScroll_sm ? optionsObj.slideToScroll_sm : 1;
				var slideToScroll_xs = optionsObj.slideToScroll_xs ? optionsObj.slideToScroll_xs : 1;

				navSliderSelector.slick({
					slidesToShow: slideToShow,
					slidesToScroll: slideToScroll,
					vertical: vertical,
					dots: dots,
					infinite: infinite,
					arrows: arrows,
					focusOnSelect: true,
	                mobileFirst: false,
					prevArrow: '<span class="slick-btn slick-prev"><i class="'+arrowPrev+'"></i></span>',
					nextArrow: '<span class="slick-btn slick-next"><i class="'+arrowNext+'"></i></span>',
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: slideToShow,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: slideToShow_md,
								vertical: vertical_md,
								infinite: infinite_md,
								prevArrow: '<span class="slick-btn slick-prev"><i class="'+arrowPrev_md+'"></i></span>',
								nextArrow: '<span class="slick-btn slick-next"><i class="'+arrowNext_md+'"></i></span>',
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: slideToShow_sm,
								vertical: vertical_md,
								infinite: infinite_md,
								prevArrow: '<span class="slick-btn slick-prev"><i class="'+arrowPrev_md+'"></i></span>',
								nextArrow: '<span class="slick-btn slick-next"><i class="'+arrowNext_md+'"></i></span>',
							}
						},
						{
							breakpoint: 576,
							settings: {
								slidesToShow: slideToShow_xs,
								vertical: vertical_md,
								infinite: infinite_md,
								prevArrow: '<span class="slick-btn slick-prev"><i class="'+arrowPrev_md+'"></i></span>',
								nextArrow: '<span class="slick-btn slick-next"><i class="'+arrowNext_md+'"></i></span>',
							}
						}
					]
				});

			});


			
		}
	}


	// Button LightGallery JS
    var productThumb = $(".product-gallery__image img"),
        imageSrcLength = productThumb.length,
        images = [],
        indexNumbArray = [];

    for (var i = 0; i < productThumb.length; i++) {
        images[i] = {"src": productThumb[i].src};
    }

    
	/**********************
	*Star Rating
	***********************/
	$('.stars a').on('click', function(e){
		e.preventDefault();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	})


	/**********************
	*Tooltip
	***********************/

	$('[data-toggle="tooltip"]').tooltip();



	/* Masonary */
	function productMasonryActivation(){
		var $masonry = $('.masonry-produtct-layout');
		var $grid = $('.grid-item');
		$grid.hide();

		$masonry.imagesLoaded({
			background: true
		}, function () {
			$grid.fadeIn();
			$masonry.masonry({
				itemSelector: '.grid-item',
				layoutMode: 'fitRows',
				fitWidth: true,
				initLayout: true,
				stagger: 30,
			});
		});
	}

	function blogMasonryActivation(){
		var $masonry = $('.masonary-blog-layout');
		var $grid = $('.blog-item');
		$grid.hide();

		$masonry.imagesLoaded({
			background: true
		}, function () {
			$grid.fadeIn();
			$masonry.masonry({
				itemSelector: '.grid-item',
				columnWidth: '.grid-sizer',
				percentPosition: true
			});
		});
	}	


	/**********************
	*Sticky Sidebar
	***********************/

    $('#sticky-sidebar').theiaStickySidebar({
      // Settings
      additionalMarginTop: 80
    });


    function productVariation(){
	    $('.variation-btn').on('click', function(e){
	    	e.preventDefault();
	    	var $attr = $(this).data('original-title');
	    	$(this).parents('.variation-wrapper').siblings().children().text($attr).css('opacity', '1');
	    	$('.reset_variations').css('display', 'block');
	    });

	    $('.reset_variations').on('click', function(e){
	    	e.preventDefault();
	    	$('.swatch-label strong').text('');
	    	$(this).css('display', 'none');
	    })
    }

    function airiAccordion(){
    	$('.accordion__link').on('click', function(e){
    		var $target =  $(this).data('target');
    		$($target).slideToggle(300);
    	});
    }

	/**********************
	*Initialization 
	***********************/
	$(window).on('load', function(){
		$('.ai-preloader').removeClass("active");
		productMasonryActivation();
		blogMasonryActivation();
	});

	$(document).ready(function(){
		galleryWithThumb();
		transparentHeaderSpacing();
		asideHeaderSpacing();
		mobileHeaderPosition();
		dropdownAnimation();
		expandAction();
		expandShippingInfo();
		expandPaymentInfo();
		stickyHeader();
		popupClose();
		closeItems();
		toolbarExpand();
		closeNotice();
		clickDom();
		productVariation();
		airiAccordion();
		productFilterExpand()
	});

    
  

    /* Match Heigh   
        $('.item').matchHeight(); 
  */

  });
  
})(jQuery);
