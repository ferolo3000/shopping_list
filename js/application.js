/*jshint esversion: 6 */
$(document).ready(function() {

  $('#btn').click(function() {
    var itemInput = $('#item').val();
    var priceInput = $('#price').val();
    var qtyInput = $('#qty').val();
    var totalItem = priceInput * qtyInput;
    $('#list-container').append('<div class="add row item-list"><li class="item-name col-xs-3">' + itemInput + '</li>' +
      '<li class="item-value col-xs-3">' + "$" + priceInput + '</li>' + '<li class="item-qty col-xs-3">' + qtyInput + '</li>' +
      '<li  id="total" class="item-cost col-xs-2">' + "$" + totalItem + '<li id="delete" class="delete delete-item item-name col-xs-1"><a class="link-delete">X</a>' + '</li></div>');
      cost();

  });

  $(document).on('click', '.delete', deleteItem);


});

//delete item from list
function deleteItem() {
  $(this).parents(".row").remove();
  cost();
}

function cost() {
  var array = [];
  var total;
  $(".item-cost").each(function() {
    array.push(parseInt($(this).text().replace(/\$/, "")));
    for (var i = 0; i < array.length; i++) {
      total = array.reduce((a, b) => a + b, 0);
    }
    $('#total-price').text(total);

  });
}
