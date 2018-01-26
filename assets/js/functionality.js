var btns = document.querySelectorAll('#right > div');

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function(e) {
		document.querySelector('#right > .active').classList.remove('active');
		this.classList += 'active';
		document.querySelector('#left > .active').classList.remove('active');
		document.querySelector('#left > #' + this.getAttribute('id') + '-content').classList += 'active';
	}, false);
}

document.onkeydown = function (e) {
	if (e.shiftKey && e.keyCode == 49) {
		var curActive = document.querySelector('#right > .active');
		if ( curActive.getAttribute('id') !== 'search' ) {
			curActive.classList.remove('active');
			document.querySelector('#right > #search').classList += 'active';
			document.querySelector('#left > .active').classList.remove('active');
			document.querySelector('#left > #search-content').classList += 'active';
		}
		document.querySelector('#left input').focus();
	}
};

document.querySelector('#left input').onkeydown = function(e) {
	if (e.key == "Enter") {
		window.location.href = "https://duckduckgo.com/?q=" + this.value;
	}
};