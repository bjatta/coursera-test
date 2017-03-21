(function (window) {
	var goodBye = {};
	var speakWord = "Good Bye";

	goodBye.speak = function (name) {
	  	console.log(speakWord + " " + name);
		}
	window.goodBye = goodBye;
}
)(window);