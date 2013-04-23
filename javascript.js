$(document).ready(function(){
	
	var container = $('#container');

	$('a').hover(function(){
		var link = $(this).text();
		container.addClass(link);
	},function(){
		container.removeClass();
	});
});