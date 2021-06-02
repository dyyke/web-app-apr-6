let h1Element = document.querySelector("h1");
h1Element.addEventListener("mouseover", mouseoverHandler);
h1Element.addEventListener("mouseout", mouseoutHandler);
h1Element.addEventListener("click", clickHandler);

function mouseoverHandler(event) {
    event.target.style.backgroundColor = "red";
}

function mouseoutHandler(event) {
    event.target.style.backgroundColor = "white";
}

function clickHandler(event) {
    event.target.style.color = "white";
}