$(document).ready(function(){
	var textInput = $('#input').val();

	 $("#input").keyup(function() {
       if ($(this).val()) {
          $("#btn").css( "display", "inline-block" );
       }
       else {
          $("#btn").hide();
       }
    });
    $("#btn").click(function () {
       $(this).hide();
    });

	$('#btn').click(function(){
		var textInput = $('#input').val();
		$('<li class="item">').text(textInput).prependTo('.list');
		$('#input').val('');

		$('.item').click(function() {
		$(this).remove();
		});

	});

	$('#input').keypress(function (e) {
		var textInput = $('#input').val();
  if (e.which == 13) {
    $('<li class="item">').text(textInput).prependTo('.list');
	$('#input').val('');

	  $('.item').click(function() {
		$(this).remove();
		});

    return false;
  }

});
});
