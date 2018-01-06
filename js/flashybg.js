var pointer = 0;
var frequency = .01;

$(function() {
	setInterval(function() {
		if (pointer > 10000)
			pointer = 0;
		red = Math.sin(frequency*pointer + 0) * 127 + 128;
		green = Math.sin(frequency*pointer + 2) * 127 + 128;
		blue = Math.sin(frequency*pointer + 4) * 127 + 128;
		$("body").css("background-color", "rgb("+red+","+green+","+blue+")")

		pointer++;
	}, 10);
});