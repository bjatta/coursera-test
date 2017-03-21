(function (window) {
	var hi = {};
	var speakWord = "Hello";
	
	hi.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	window.hi = hi;
}
)(window);
