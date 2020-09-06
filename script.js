const play_pause_btn = document.getElementById("play_pause");
const video = document.querySelector(".video");
const timeline = document.querySelector(".timeline")
const timelineRed = document.querySelector(".timelineRed");
const timer = document.querySelector(".timer");

play_pause_btn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
})


video.addEventListener("timeupdate", () => {
    var linePosition = video.currentTime / video.duration;
    timelineRed.style.width = linePosition * 100 + "%";
    timer.textContent = "-" + ((video.duration - video.currentTime) / 60).toPrecision(3)

})

timeline.addEventListener("click", (e) => {
    console.log(e.offsetX)
})