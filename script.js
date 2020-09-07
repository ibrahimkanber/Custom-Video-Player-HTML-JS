const play_pause_btn = document.getElementById("play_pause");
const video = document.querySelector(".video");
// const timeline = document.querySelector(".timeline")
const timelineRed = document.querySelector(".timelineRed");
const timer = document.querySelector(".timer");
const progress = document.getElementById("progress")
progress.addEventListener("change", () => {
    timelineRed.style.width = +progress.value + "%";
    video.currentTime = (+progress.value * video.duration) / 100


})



play_pause_btn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        play_pause_btn.innerHTML = '<i class="fa fa-play fa-2x"></i>'

    } else {
        video.pause();
        play_pause_btn.innerHTML = '<i class="fa fa-stop fa-2x"></i>'
    }
})


video.addEventListener("timeupdate", () => {
    var linePosition = video.currentTime / video.duration;
    timelineRed.style.width = linePosition * 100 + "%";
    timer.textContent = "-" + ((video.duration - video.currentTime) / 60).toPrecision(3)

})

// timeline.addEventListener("click", (e) => {
//     console.log(e.offsetX, )
// })