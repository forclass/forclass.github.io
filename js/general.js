// To prevent iOS from exiting "homescreen app" mode
$(document).on('click', 'a', function(event) {
	if (!this.href) {
		return;
	}
	if (this.href.indexOf('javascript') >= 0) {
		return;
	}
	if (this.href.indexOf('mailto:') >= 0) {
		return;
	}
	if (this.target || this.download) {
		return;
	}
	// $('.loading').show();
	event.preventDefault();
	window.location = this.href;
});

// Open/close drawer
$(document).on('click', '.casetopicon', function(event) {
	$(this).toggleClass('open');
	$(".case_top").slideToggle();
});
