$(function(){
	$('.header__top-inner').on("click", function(){
	    $(this).toggleClass('header__top-inner--active');
    });
	$('.header__top-search').on("click", function(){
		$(this).toggleClass('header__top-search--active');
	});
	$('.header__bottom-btns').on("click", ".header__bottom-btn", function(){
		$(this).addClass('header__bottom-btn--active').siblings().removeClass('header__bottom-btn--active');
	});
	$('.menu__list').on("click", ".menu__list-item", function() {
		$(this).addClass('menu__list-item--active').siblings().removeClass('menu__list-item--active');
	});
	$('.assortment-slider').slick({
		prevArrow: '<button type="button" class="assortment-slider__arrows assortment-slider__prev"><img src="images/arrow-prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="assortment-slider__arrows assortment-slider__next"><img src="images/arrow-next.svg" alt=""></button>',
		dots: true,
		dotsClass : 'assortment-slider__dots'
	});
    $('.assortment-item__descr').on("click", function(){
        $(this).toggleClass('assortment-item__descr--active');
    });
    $('.btn').on("click", function(){
        $(this).toggleClass('btn--active');
    });
});