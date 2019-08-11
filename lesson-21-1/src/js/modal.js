// Модальное окно для блока navbar
$(document).ready(function(){
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');

	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});

// Модальное окно для блока offer
$(document).ready(function(){
	var offerButton = $('#offerButton');
	var offerModal = $('#offerModal');
	var offerClose = $('#offerClose');

	offerButton.on('click', function() {
		offerModal.addClass('modal_active');
	});

	offerClose.on('click', function() {
		offerModal.removeClass('modal_active');
	});
});

// Кнопка прокрутки вверх
$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});