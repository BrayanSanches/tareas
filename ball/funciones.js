
const ball = document.querySelector(".ball");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reverse = document.querySelector(".reverse");
const reset = document.querySelector(".reset");


play.addEventListener("click", () => {
    ball.classList.remove("reverse");
    ball.classList.add("play");
    ball.classList.remove("pause");
});

reverse.addEventListener("click", () => {
    ball.classList.add("reverse");
    ball.classList.remove("play");
    ball.classList.remove("pause");
});

reset.addEventListener("click", () => {
    ball.classList.remove("pause");
    ball.classList.remove("reverse");
    ball.classList.remove("play");
});

pause.addEventListener("click", () => {
    ball.classList.add("pause");
});