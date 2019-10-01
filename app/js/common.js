$(function () {
	var lastSlideId =
		$('.js-accordion-button').on('click', function (e) {
			var id = e.target.dataset.count;
			var contentBlock = $('.js-accordion-content[data-count="' + id + '"]')
			if (lastSlideId !== id) {
				$('.js-accordion-content').slideUp('fast');
				contentBlock.slideDown('fast');
				$('.js-accordion-button[data-count="' + id + '"] span:last-child').removeClass('faq-arrow--rotate')
			} else {
				contentBlock.slideToggle('fast');
				$('.js-accordion-button[data-count="' + id + '"] span:last-child').toggleClass('faq-arrow--rotate')
			}
			lastSlideId = id
		})
});
