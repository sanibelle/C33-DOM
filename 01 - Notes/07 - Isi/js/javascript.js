window.onload = function() {
	document.getElementById("memo-input").onkeyup = function(e) {
		if (e.key == 'Enter') {
			console.log(this.value)
		}
	}
}