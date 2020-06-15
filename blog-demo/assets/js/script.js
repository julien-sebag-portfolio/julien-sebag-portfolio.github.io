// Open Search

function openSearch(e) {
    var element = e.parentNode;
    element.classList.toggle("search-open");
}

function closeSearch(e) {
    var element = e.parentNode.parentNode;
    element.classList.toggle("search-open");
}

// Open Nav

function openNav(e) {
    var element = e.parentNode;
    element.classList.toggle("nav-open");
}

// Change class on scroll

window.addEventListener("scroll", function () {
	var scrollPosition = window.scrollY;
    var headerHome = document.getElementsByClassName("header-home")[0];
    var header = document.getElementsByClassName("header")[0];

    if (scrollPosition >= window.innerHeight - 42 && headerHome) {
		header.classList.add("header-scroll");
    } else if (scrollPosition >= window.innerHeight*.7 - 30 && !headerHome) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
	}
});




// Demo

function openDownload(e) {
    var element = e.parentNode;
    element.classList.toggle("download-open");
}