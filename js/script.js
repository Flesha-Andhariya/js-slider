const track = document.querySelector("#sliderTrack");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let logos = [...document.querySelectorAll(".logo")];
let moving = false;
function slide(direction) {
    if (moving) return;
    moving = true;
    track.style.transition = "0.5s";
    track.style.transform = direction == "next"
        ? "translateX(-25%)"
        : "translateX(25%)";
    setTimeout(() => {
        direction == "next"
            ? logos.push(logos.shift())
            : logos.unshift(logos.pop());
        logos.forEach(logo => track.appendChild(logo));
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        moving = false;
    }, 500);
}
next.onclick = () => slide("next");
prev.onclick = () => slide("prev");
setInterval(() => slide("next"), 1000);
