// Open Menu

function openMenu(e) {
    e.parentNode.classList.toggle("nav-open");
}

// Modal

var body = document.body;
var header = document.getElementsByTagName("header")[0];

function openModal(e) {
    e.parentNode.parentNode.classList.add("modal-open");
    body.classList.add("stop-scrolling");
    header.style.display = "none";
}

function closeModal(e) {
    e.parentNode.classList.remove("modal-open");
    body.classList.remove("stop-scrolling");
    header.style.display = "flex";
}

// Fade in animation

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





// Demo

function openDownload(e) {
    var element = e.parentNode;
    element.classList.toggle("download-open");
}