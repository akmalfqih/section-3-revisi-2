$(document).ready(function() {
  function calcProductHeight(productsContainer) {
    var getProductHeight = productsContainer.find('.product.active').height();
    productsContainer.find('.products').css({
      height: getProductHeight
    });
  }

  $('.cards-container-1').each(function() {
    var productsContainer = $(this);
    var productItem = productsContainer.find('.product');
    var productCurrentItem = productItem.filter('.active');

    if (productCurrentItem.length === 0) {
      productCurrentItem = productItem.first().addClass('active');
    }
    
    $('#next', productsContainer).on('click', function(e) {
      e.preventDefault();

      var nextItem = productCurrentItem.next();

      productCurrentItem.removeClass('active');

      if (nextItem.length) {
        productCurrentItem = nextItem.addClass('active');
      } else {
        productCurrentItem = productItem.first().addClass('active');
      }

      calcProductHeight(productsContainer);
    });

    $('#prev', productsContainer).on('click', function(e) {
      e.preventDefault();

      var prevItem = productCurrentItem.prev();

      productCurrentItem.removeClass('active');

      if (prevItem.length) {
        productCurrentItem = prevItem.addClass('active');
      } else {
        productCurrentItem = productItem.last().addClass('active');
      }

      calcProductHeight(productsContainer);
    });

    $('[ripple]', productsContainer).on('click', function(e) {
      var rippleDiv = $('<div class="ripple" />'),
        rippleSize = 60,
        rippleOffset = $(this).offset(),
        rippleY = e.pageY - rippleOffset.top,
        rippleX = e.pageX - rippleOffset.left,
        ripple = $('.ripple');

      rippleDiv.css({
        top: rippleY - (rippleSize / 2),
        left: rippleX - (rippleSize / 2),
        background: $(this).attr("ripple-color")
      }).appendTo($(this));

      window.setTimeout(function() {
        rippleDiv.remove();
      }, 1900);
    });

    calcProductHeight(productsContainer);
  });


  $('.cards-container-2').each(function() {
    var productsContainer = $(this);
    var productItem = productsContainer.find('.product');
    var productCurrentItem = productItem.filter('.active');

    $('#next', productsContainer).on('click', function(e) {
      e.preventDefault();

      var nextItem = productCurrentItem.next();

      productCurrentItem.removeClass('active');

      if (nextItem.length) {
        productCurrentItem = nextItem.addClass('active');
      } else {
        productCurrentItem = productItem.first().addClass('active');
      }

      calcProductHeight(productsContainer);
    });

    $('#prev', productsContainer).on('click', function(e) {
      e.preventDefault();

      var prevItem = productCurrentItem.prev();

      productCurrentItem.removeClass('active');

      if (prevItem.length) {
        productCurrentItem = prevItem.addClass('active');
      } else {
        productCurrentItem = productItem.last().addClass('active');
      }

      calcProductHeight(productsContainer);
    });

    $('[ripple]', productsContainer).on('click', function(e) {
      var rippleDiv = $('<div class="ripple" />'),
        rippleSize = 60,
        rippleOffset = $(this).offset(),
        rippleY = e.pageY - rippleOffset.top,
        rippleX = e.pageX - rippleOffset.left,
        ripple = $('.ripple');

      rippleDiv.css({
        top: rippleY - (rippleSize / 2),
        left: rippleX - (rippleSize / 2),
        background: $(this).attr("ripple-color")
      }).appendTo($(this));

      window.setTimeout(function() {
        rippleDiv.remove();
      }, 1900);
    });

    calcProductHeight(productsContainer);
  });


  $('.cards-container-3').each(function() {
    var productsContainer = $(this);
    var productItem = productsContainer.find('.product');
    var productCurrentItem = productItem.filter('.active');

    $('#next', productsContainer).on('click', function(e) {
      e.preventDefault();

      var nextItem = productCurrentItem.next();

      productCurrentItem.removeClass('active');

      if (nextItem.length) {
        productCurrentItem = nextItem.addClass('active');
      } else {
        productCurrentItem = productItem.first().addClass('active');
      }

      calcProductHeight(productsContainer);
    });

    $('#prev', productsContainer).on('click', function(e) {
      e.preventDefault();

      var prevItem = productCurrentItem.prev();

      productCurrentItem.removeClass('active');

      if (prevItem.length) {
        productCurrentItem = prevItem.addClass('active');
      } else {
        productCurrentItem = productItem.last().addClass('active');
      }

      calcProductHeight(productsContainer);
    });

    $('[ripple]', productsContainer).on('click', function(e) {
      var rippleDiv = $('<div class="ripple" />'),
        rippleSize = 60,
        rippleOffset = $(this).offset(),
        rippleY = e.pageY - rippleOffset.top,
        rippleX = e.pageX - rippleOffset.left,
        ripple = $('.ripple');

      rippleDiv.css({
        top: rippleY - (rippleSize / 2),
        left: rippleX - (rippleSize / 2),
        background: $(this).attr("ripple-color")
      }).appendTo($(this));

      window.setTimeout(function() {
        rippleDiv.remove();
      }, 1900);
    });

    calcProductHeight(productsContainer);
  });
});

