var btns = document.querySelectorAll('#right > div'),
	queryBar = document.querySelector('#left input');

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function(e) {
		document.querySelector('#right > .active').classList.remove('active');
		this.classList += 'active';
		document.querySelector('#left > .active').classList.remove('active');
		document.querySelector('#left > #' + this.getAttribute('id') + '-content').classList += 'active';
	});
	btns[i].addEventListener('mouseover', function(e) {
		document.querySelector('#right > .active').classList.remove('active');
		this.classList += 'active';
		document.querySelector('#left > .active').classList.remove('active');
		document.querySelector('#left > #' + this.getAttribute('id') + '-content').classList += 'active';
	});
}

document.onkeyup = function (e) {
	if (e.shiftKey && e.keyCode == 49) {
		var curActive = document.querySelector('#right > .active');
		if ( curActive.getAttribute('id') !== 'search' ) {
			curActive.classList.remove('active');
			document.querySelector('#right > #search').classList += 'active';
			document.querySelector('#left > .active').classList.remove('active');
			document.querySelector('#left > #search-content').classList += 'active';
		}
		queryBar.focus();
	}
};

queryBar.onkeydown = function(e) {
  var $this = this;
	if (e.key == "Enter") {
		if ($this.value.indexOf('http://') == 0 || $this.value.indexOf('https://') == 0 || $this.value.indexOf('file://') == 0) {
			  window.location.href = $this.value;
		} else {
      if ($this.value.indexOf('.com') > 0 || $this.value.indexOf('.org') > 0 || $this.value.indexOf('.io') > 0 || $this.value.indexOf('.ca') > 0) {
        window.location.href = "https://" + $this.value;
      } else if ($this.value.indexOf('/r/') != -1) {
        window.location.href = "https://reddit.com" + $this.value;
      } else {
			  window.location.href = "https://duckduckgo.com/?q=" + $this.value;
		  }
		}
	} else if (e.keyCode == 9) {
		e.preventDefault();
		if ($this.value.indexOf('ht') == 0) {
			$this.value = 'https://';
		}
	}
};
