$(function () {
	setActivePageInNav();
});

function setActivePageInNav() {
	var path = window.location.pathname;
	path = path.split("/")

	$("#modena-main-nav .nav a").each(function () {
		var href = $(this).attr('href').split('/');
		if(path[1] === href[1]) {
			$(this).parent().addClass('active');
		} 	
	})

	node = $("#modena-services-nav")
	if ( document.body.contains(node[0]) ) {
		$("#modena-services-nav .nav a").each(function() {
			var href = $(this).attr('href').split('/');
			if(path[2] === href[2]) {
				$(this).parent().addClass('active');
			}
		})
	}	
}
