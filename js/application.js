$(document).ready(function() {

  $('#btn').click(function() {
    var itemInput = $('#item').val();
    var priceInput = $('#price').val();
    var qtyInput = $('#qty').val();
    var totalItem = priceInput * qtyInput;
    $('#list-container').append('<div class="add row item-list"><li class="item-name col-xs-3">' + itemInput + '</li>' +
	'<li class="item-value col-xs-3">' + "$" + priceInput + '</li>' + '<li class="item-qty col-xs-3">' + qtyInput + '</li>' +
'<li  id="total" class="item-cost col-xs-2">' + "$" + totalItem + '<li id="delete" class="delete delete-item item-name col-xs-1"><a class="link-delete">X</a>' + '</li></div>');

    $(document).on('click', '.delete', deleteItem);
  });

  // var test = $('#total').map(function () {
  // 			return Number($(this).text().replace(/\$/,""));
  // 		}).get();


  $('input').keydown(function(e) {
    // console.log(e.which);
    if (e.which == 13) {
      sum();
    }
  });

	var total = 0;

	var sum = function() {

	  var prices = $('.item-value');
	  var qtys = $('.item-qty');
	  total = 0;

	  for (i = 0; i < qtys.length; i++) {

	    var price = Number($(prices[i]).text().replace(/\$/, ""));
	    var subtotal = (Number($(qtys[i]).val())) * price;
	       total += subtotal;
	  }
	  $('#total-price').text(total);
	  return total;
	};
});

//delete item from list
function deleteItem() {
  $(this).parents(".row").remove();
}
