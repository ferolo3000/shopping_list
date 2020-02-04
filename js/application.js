/*jshint esversion: 6 */
$(document).ready(function() {

  $('#btn').click(function() {
    var itemName = $('.item-name');
    var itemInput = $('#item').val();
    var priceInput = $('#price').val();
    var subTotal = 0;
      $('#list-container').append('<div class="add row item-list"><li class="item-name col-xs-3">' + itemInput + '</li>' +
        '<li id="value" class="item-value col-xs-3">' + "$" + priceInput + '</li>' +
        '<li class="item-qty col-xs-3"><input type="number" class="quantity" min ="0" oninput="sum(); cost();"></li>' +
        '<li  id="total" class="item-cost col-xs-2">' + "$" + subTotal + '<li id="delete" class="delete delete-item item-name col-xs-1"><a class="link-delete">X</a>' + '</li></div>');
        sum();
        cost();

  });

  $(document).on('click', '.delete', deleteItem);

  $(document).on('keyup', '.quantity', function(){
    sum();
    cost();
  });

  $('input').keydown(function(e){
    if (e.which == 13) {
      sum();
      cost();
    }
  });


});

//delete item from list
function deleteItem() {
  $(this).parents(".row").remove();
  cost();
  sum();
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

function sum() {
    var prices = $('.item-value');
    var totalQty = $('.quantity');

    for (i=0; i < totalQty.length; i++) {

      var price = $(prices[i]).text().replace(/\$/,"");
      var subtotal = ($(totalQty[i]).val()) * price;
      if (subtotal != 0) {
        $($('.item-cost')[i]).text("$" + subtotal);
      } else {
        $($('.item-cost')[i]).text("$0.00");
      }
    }
}
