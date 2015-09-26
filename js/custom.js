$("#btn-dom-modification").on('click', function(event) {
	event.preventDefault();
	$(this).toggleClass('btn-primary').toggleClass('btn-success');
});

Reveal.addEventListener("console-clear", function() {
	console.log("It is a period of civil war.\n" +
		"Rebel spaceships, striking\n" +
		"from a hidden base, have won\n" +
		"their first victory against\n" +
		"the evil Galactic Empire.");
});

Reveal.addEventListener("console-assert", function() {
	console.assert(false);
});

$(".btn-count").on('click', function(event) {
	console.count(this.textContent);
});

Reveal.addEventListener("console-profile", function() {
	console.profile("Profile-slide");
});
$("#btn-profile-end").on('click', function(event) {
	console.profileEnd();
});

Reveal.addEventListener("console-time", function() {
	console.time("timeSlide-timer");
});
$("#btn-time-end").on('click', function(event) {
	console.timeEnd("timeSlide-timer");
});

$("#btn-conditional-break").on('click', function(event) {
	var total = 0;
	total = 2 + 2;
	$("#conditional-break-total").text(total);
});

$("#btn-stack-msg").on('click', function(event) {
	console.log("over and");
});