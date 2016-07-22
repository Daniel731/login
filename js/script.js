$(function() {

	$("form").submit(function() {
		alert($("form").serialize());
	});

});