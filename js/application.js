$(document).ready(function() {

  $('button').click(function() {
    var itemInput = $('#item').val();
		var priceInput = $('#price').val();
		var qtyInput = $('#qty').val();
		var total = priceInput * qtyInput;
    $('.add').append('<li class="item-name col-xs-3">' + itemInput + '</li>');
		$('.add').append('<li class="item-name col-xs-3">' + "$" + priceInput + '</li>');
		$('.add').append('<li class="item-name col-xs-3">' + qtyInput + '</li>');
		$('.add').append('<li class="item-name col-xs-2">' + "$" + total + '<li id="delete" class="delete delete-item item-name col-xs-1"><a class="link-delete">X</a>' + '</li>');

    $(document).on('click', '.delete', deleteItem);
  });
});

//delete item from list
function deleteItem() {
  $(this).parent().remove();
}
