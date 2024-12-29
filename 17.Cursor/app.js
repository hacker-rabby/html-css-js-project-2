const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (event) {
    moveCursor(event.pageX, event.pageY);
});

const moveCursor = function (pageX, pageY) {
    if (cursor instanceof HTMLElement) {
        cursor.style.left = pageX + "px";
        cursor.style.top = pageY + "px";
    } else {
        console.error(".cursor is not an HTMLElement");
    }
};
