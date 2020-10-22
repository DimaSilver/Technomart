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
});