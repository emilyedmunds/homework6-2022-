var video = document.querySelector("#player1")
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("The current speed is " + video.playbackRate)
	console.log("Slow Down");
	video.playbackRate *= 0.95;
	console.log("The new speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("The current speed is " + video.playbackRate)
	console.log("Speed Up");
	video.playbackRate /= 0.95;
	console.log("The new speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("The current video location is " + video.currentTime)
	console.log("Skip Ahead");
	video.currentTime += 15;
	if (video.currentTime >= 65) {
		video.currentTime = 0
	}
	console.log("The new video location is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted)
	if (video.muted == true) {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%"
});

document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});