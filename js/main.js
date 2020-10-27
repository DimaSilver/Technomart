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
    $('.popular-items__bottom-product__hover').on("click", ".popular-items__bottom-product__button", function(){
        $(this).addClass('popular-items__bottom-product__button--active').siblings().removeClass('popular-items__bottom-product__button--active');
    });
    $('.popular-brands__bottom-inner').on("click", ".popular-brands__bottom-item", function(){
        $(this).addClass('popular-brands__bottom-item--active').siblings().removeClass('popular-brands__bottom-item--active');
    });
    $('.tabs__item').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tabs__item--active');
        $($(this).closest('.tabs__items').siblings().find('div')).removeClass('tabs__block--active');
        $(this).addClass('tabs__item--active');
        $($(this).attr('href')).addClass('tabs__block--active');
    });
    $('.about__contacts-map').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-map',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: true
    });
    $('.navigation-block__top-list').on("click", ".navigation-block__top-list__item", function(){
        $(this).addClass('navigation-block__top-list__item--active').siblings().removeClass('navigation-block__top-list__item--active');
    });
    $('.navigation-block__bottom-list').on("click", ".navigation-block__bottom-list__item", function(){
        $(this).addClass('navigation-block__bottom-list__item--active').siblings().removeClass('navigation-block__bottom-list__item--active');
    });
});