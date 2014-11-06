$(function () {
	setActivePageInNav();
});

function setActivePageInNav() {
	var path = window.location.pathname;
	

	$(".nav a").each(function () {
		var href = $(this).attr('href');
		console.log(href);
		if(path === href) {
			$(this).parent().addClass('active');
		}
	})

}
