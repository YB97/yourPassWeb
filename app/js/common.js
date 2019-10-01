$(function() {
  var lastSlideId = $(".js-accordion-button").on("click", function(e) {
    var id = e.target.dataset.count;
    var contentBlock = $('.js-accordion-content[data-count="' + id + '"]');
    if (lastSlideId !== id) {
      $(".js-accordion-content").slideUp("fast");
      contentBlock.slideDown("fast");
      $(
        '.js-accordion-button[data-count="' + id + '"] span:last-child'
      ).removeClass("faq-arrow--rotate");
    } else {
      contentBlock.slideToggle("fast");
      $(
        '.js-accordion-button[data-count="' + id + '"] span:last-child'
      ).toggleClass("faq-arrow--rotate");
    }
    lastSlideId = id;
  });
});
$(function() {
  var element_form1 = document.getElementById("phone-input");
  var maskOptions = {
    mask: "+{7}(000)000-00-00"
  };
  var mask = IMask(element_form1, maskOptions);

  var element_form2 = document.getElementById("order-phone-input");
  var mask2 = IMask(element_form2, maskOptions);

  var element_form3 = document.getElementById("request-phone-num");
  var mask3 = IMask(element_form3, maskOptions);
});
