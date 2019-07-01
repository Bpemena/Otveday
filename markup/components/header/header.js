$(document).ready(function() {
	var minus = 0, plus = 0, sum = 0;
	$('.tovar').hide();
	$('.pers').hide();
	$('.menupopup').hide();
	$('.basketpopup').hide();
	$('.searchblock').hide();
	$('.header__pers').click(function() {
		$('.pers').slideToggle();
	});
	$('.dobavka').click(function(e) {
		e.preventDefault();
		$('.tovar').slideToggle().delay(1000).slideToggle();
		$('.mobiletovar').slideToggle().delay(1000).slideToggle();
		$('.spisok').append('<div class="spisok__item"><div class="spisok__img"><img src="'+$(this).data('img')+'"></div><div class="spisok__info"><div class="spisok__topline"><div class="spisok__name">'+$(this).data('name')+'</div><div class="spisok__price">'+$(this).data('price')+'</div></div><div class="spisok__buttons"><div class="spisok__minus">-</div><input type="number" min="1" max="100" class="spisok__number" value="1"><div class="spisok__plus">+</div><div class="spisok__del"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z" fill="#BDBDBD"/></svg></div></div></div></div>')
		sum = sum + $(this).data('price');
		$('.basketpopup__oplata').html('Оплатить '+ sum +'₽');
		$('.basketpopup__itog-sum').html(sum +'₽');
	});
	$('.nav__menu').click(function(e) {
		e.preventDefault();
		$('.menupopup').slideToggle();
	});
	$('.header__basket svg').click(function(e) {
		e.preventDefault();
		$('.basketpopup').slideToggle();
	});
	$('.nav__search-svg').click(function() {
		$('.searchblock').slideToggle();
	});
	$('.searchblock__svg2').click(function() {
		$('.searchblock').slideToggle();
	});
	$('body').on('click','.spisok__del',function(e) {
		e.preventDefault();
		$(this).parent().parent().parent().remove();
		$('.basketpopup__oplata').html('Оплатить '+ sum +'₽');
		$('.basketpopup__itog-sum').html(sum +'₽');
	});
	$('body').on('click','.spisok__minus', function(e) {
		e.preventDefault();
		minus = $('.spisok__number').val() - 1;
		$('.spisok__number').val(minus); 
	});
	$('body').on('click','.spisok__plus', function(e) {
		e.preventDefault();
		plus = parseInt($('.spisok__number').val()) + 1;
		$('.spisok__number').val(plus);
	})
	$(window).scroll(function () {
		if ($(window).scrollTop() > 109) {
			$('.header__bg').css('background','#E8F5EB')
			$('.header__bg').css('top','0')
		} else {
			$('.header__bg').css('background','transparent')
			$('.header__bg').css('top','27px')
		}
	});


	$('.burger').click(function(e) {
		e.preventDefault();
		$('.mobile__nav').slideToggle();
		$('.mobileperspopup').hide(500);
		$('.mobilebasketpopup').hide(500);
	});
	$('.mobile__pers').click(function(e) {
		e.preventDefault();
		$('.mobile__nav').hide(500);
		$('.mobileperspopup').slideToggle();
		$('.mobilebasketpopup').hide(500);
	});
	$('.mobile__basket').click(function(e) {
		e.preventDefault();
		$('.mobile__nav').hide(500);
		$('.mobileperspopup').hide(500);
		$('.mobilebasketpopup').slideToggle();
	});
});