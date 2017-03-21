(function () {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var onePerson in names) {
	  if ('j' != names[onePerson].toLowerCase().charAt(0)) {
	    hi.speak(names[onePerson]);
	  } else {
	    goodBye.speak(names[onePerson]);
	  }
	}
}
)();