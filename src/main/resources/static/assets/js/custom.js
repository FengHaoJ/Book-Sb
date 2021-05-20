(function ($) {
	"use strict";
	var Ayurveda = {
		initialised: false,
		version: 1.0,
		Solar: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			// Functions Calling
			
			this.loader();
			this.product_slider();
			this.related_slider();
			this.tesimonial_slider();
			this.counter();
			this.quantity();
			this.menu();
			this.menu_toggle();
		},
        // preloader
		loader: function () {
            jQuery(window).on("load", function() {
                jQuery(".pa-ellipsis").fadeOut(), jQuery(".pa-preloader").delay(200).fadeOut("slow")
            });
        },
        // product sider
        product_slider: function () {
            var swiper = new Swiper('.pa-trending-product .swiper-container', {
                slidesPerView:3,
                loop:true,
                spaceBetween:0,
                speed:1500,
                autoplay:true,
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    575: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    },
                    767: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    },
                    992: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    },
                }
            });
        },
        // related sider
        related_slider: function () {
            var swiper = new Swiper('.pa-related-product .swiper-container', {
                slidesPerView:2,
                loop:true,
                spaceBetween:0,
                speed:1500,
                autoplay:true,
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    575: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    },
                    767: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    },
                    992: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    },
                }
            });
        },
        // testimonial sider
        tesimonial_slider: function () {
            var swiper = new Swiper('.pa-tesimonial .swiper-container', {
                slidesPerView:1,
                loop:true,
                spaceBetween:0,
                speed:1500,
                autoplay:true,
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
            });
        },
        // counter start
        counter: function () {
            if($('.pa-counter-main').length > 0){
                var a = 0;
                $(window).scroll(function() {

                    var oTop = $('#counter').offset().top - window.innerHeight;
                    if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.counter-value').each(function() {
                        var $this = $(this),
                        countTo = $this.attr('data-count');
                        $({
                        countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        },
                        {
                        duration: 5000,
                        easing: 'swing',
                        step: function() {
                        $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                        $this.text(this.countNum);
                        }
                        });
                    });
                    a = 1;
                    }
                });
            };
        },
        // quantity
        quantity: function () {
            $('.pa-add').click(function () {
                if ($(this).prev().val() < 50000) {
                    $(this).prev().val(+$(this).prev().val() + 1);
                }
            });
            $('.pa-sub').click(function () {
                if ($(this).next().val() > 1) {
                    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
                }
            });
        },
        // mobile menu
        menu: function () {
            if($('.pa-toggle-nav').length > 0){
                $(".pa-toggle-nav").on('click',function(e){
                    event.stopPropagation();
                    $(".pa-nav-bar").toggleClass("pa-open-menu");
                })
                $("body").on('click',function(){
                    $(".pa-nav-bar").removeClass("pa-open-menu");
                })
                $(".pa-menu").on('click',function(){
                    event.stopPropagation();
                })
            };
        },
        menu_toggle: function () {
            // menu two
            $(".pa-menu-tow-child").on('click',function(){
                $(this).find(".pa-submenu-two").slideToggle();
            });
            // menu two stop propagation
            $(".pa-submenu-two").on('click',function(){
                event.stopPropagation();
            });
            // toggle two
            $(".pa-toggle-nav2").on('click',function(e){
                event.stopPropagation();
                $(".pa-header-two").toggleClass("pa-open-menu");
            });
            // toggle
            $(".pa-menu-child").on('click',function(e){
                event.stopPropagation();
                $(this).find(".pa-submenu").slideToggle();
            });
        },
	};	
	Ayurveda.init();
	
})(jQuery);	
// Contact Form Submission
function checkRequire(formId , targetResp){
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object')? $(formId):$('#'+formId);
    target.find('input , textarea , select').each(function(){
        if($(this).hasClass('require')){
            if($(this).val().trim() == ''){
                check = 1;
                $(this).focus();
                $(this).parent('div').addClass('form_error');
                targetResp.html('You missed out some fields.');
                $(this).addClass('error');
                return false;
            }else{
                $(this).removeClass('error');
                $(this).parent('div').removeClass('form_error');
            }
        }
        if($(this).val().trim() != ''){
            var valid = $(this).attr('data-valid');
            if(typeof valid != 'undefined'){
                if(!eval(valid).test($(this).val().trim())){
                    $(this).addClass('error');
                    $(this).focus();
                    check = 1;
                    targetResp.html($(this).attr('data-error'));
                    return false;
                }else{
                    $(this).removeClass('error');
                }
            }
        }
    });
    return check;
}
$(".submitForm").on('click', function() {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm , errroTarget);
    
    if(check == 0){
       var formDetail = new FormData(targetForm[0]);
        formDetail.append('form_type' , _this.attr('form-type'));
        $.ajax({
            method : 'post',
            url : 'ajaxmail.php',
            data:formDetail,
            cache:false,
            contentType: false,
            processData: false
        }).done(function(resp){
            console.log(resp);
            if(resp == 1){
                targetForm.find('input').val('');
                targetForm.find('textarea').val('');
                errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
            }else{
                errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
            }
        });
    }
});