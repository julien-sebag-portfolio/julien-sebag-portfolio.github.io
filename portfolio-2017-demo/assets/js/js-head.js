//Plax
$(document).ready(function () {
	setBig()
	$.plax.enable()
	function setBig(){
		$('#layer1').plaxify({"xRange":200,"yRange":400})
		$('#layer2').plaxify({"xRange":-80,"yRange":80})
		$('#layer3').plaxify({"xRange":-150,"yRange":50})
	}
})



document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 50,
        backSpeed: 30,
        // startDelay: 1000,
        loop: true,
        loopCount: Infinity,
    });
});