const video = document.querySelector("#video")
const play = (e) => {
    if(video.paused){
        document.getElementById('play').innerHTML = 'Pause'
        video.play()
    }
    else{
        document.getElementById('play').innerHTML = 'Play'
        video.pause()
    }
}
const stop = (e) => {
    video.pause()
    video.currentTime = 0
    document.getElementById('play').innerHTML = 'Play'
}
const fastBackward = (e) => {
    video.currentTime -=10;
}
const forward = (e) => {
    video.currentTime += 5
}
const backward = (e) => {
    video.currentTime -= 5
}
const fastForward= (e) => {
    video.currentTime +=10;
}
const mute = (e) => {
    if(video.muted){
        document.getElementById('mute').innerHTML = 'Mute'
        video.muted = false
    }
    else{
        document.getElementById('mute').innerHTML = 'Unmute'
        video.muted = true
    }
}
const time = (e) => {
  let currentTime = video.currentTime;
  let date = new Date(null);
  date.setSeconds(currentTime);
  let timeString = date.toString().substr(19, 5);
  var time = document.getElementById("time");
  time.innerHTML = timeString;

  let duration = video.duration;
  let progress = (currentTime / duration) * 100;
  var progressBar = document.getElementById("progressBar");
  progressBar.value = progress;
}
function seek(event) {
    const video = document.getElementById('video');
    const progressBar = document.getElementById('progressBar');
    const percent = (event.offsetX / progressBar.offsetWidth);
    video.currentTime = percent * video.duration;
}

  
  function videoVolume() {
    var volume = document.getElementById("volume");
    video.volume = volume.value / 100;
  }

  function videoSpeed() {
    var speed = document.getElementById("speed");
    video.playbackRate = speed.value;
  }
function fullScreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { 
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { 
      video.msRequestFullscreen();
    }
  }