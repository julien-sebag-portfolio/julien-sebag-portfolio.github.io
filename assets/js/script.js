// Toggle class on click

let body = document.body;
let open = document.getElementsByClassName("menu-open")[0];
let stop = document.getElementsByClassName("stop-scrolling")[0];
let fade1 = document.getElementsByClassName("fade-delay-1")[0];
let fade2 = document.getElementsByClassName("fade-delay-2")[0];
let fade3 = document.getElementsByClassName("fade-delay-3")[0];
let fade4 = document.getElementsByClassName("fade-delay-4")[0];

function openNav(e) {
    e.parentNode.classList.toggle("nav-open");
    document.querySelector(".burger").style.display = "none";
    body.classList.add("stop-scrolling");
}

function closeNav(e) {
    e.parentNode.parentNode.classList.toggle("nav-open");
    document.querySelector(".burger").style.display = "block";
    body.classList.remove("stop-scrolling");
}

function openModal(e) {
    e.parentNode.parentNode.classList.toggle("modal-open");
    body.classList.add("stop-scrolling");
}

function closeModal(e) {
    e.parentNode.classList.toggle("modal-open");
    body.classList.remove("stop-scrolling");
}

function openMenu(e) {
    e.parentNode.classList.toggle("menu-open");
    body.classList.toggle("stop-scrolling");
    if (body && !open) {
        body.classList.remove("stop-scrolling");
    }
}

// Change class on scroll

var scrollPosition = window.scrollY;
var cover = document.getElementsByClassName("cover-projects")[0];
var logoContainer = document.getElementsByClassName("header")[0];
var hasBlocked = false;

window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY;

	if (scrollPosition >= 1) {
		console.log("scrolled");
        logoContainer.classList.add("header-scroll");
        cover.classList.add("cover-scroll");
        fade1.classList.remove("fade-long");
        fade2.classList.remove("fade-long");
        fade3.classList.remove("fade-long");
		fade4.classList.remove("fade-long");
        if (!hasBlocked) {
            hasBlocked = true;
            document.body.classList.add("stop-scrolling");
            setTimeout(function () {
                document.body.classList.remove("stop-scrolling");
            }, 2000);
        }
    } else {
        logoContainer.classList.remove("header-scroll");
        cover.classList.remove("cover-scroll");
    }
});

// Fade In

// Detect request animation frame
var scroll =
    window.requestAnimationFrame ||
    // IE Fallback
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
var elementsToShow = document.querySelectorAll(".fade");

function loop() {
    Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add("is-visible");
        } else {
            element.classList.remove("is-visible");
        }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <=
                (window.innerHeight ||
                    document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight))
    );
}
