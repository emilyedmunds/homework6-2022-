var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false 
});


var play = document.querySelector('#play'),
	pause = document.querySelector('#pause'),
	slower = document.querySelector('#slower'),
	video = document.querySelector('video'),
	faster = document.querySelector('#faster'),
	skip = document.querySelector('#skip');


 play.addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	console.log('The current volume is ' + video.volume)
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%"
 });

 pause.addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
 });

slower.addEventListener("click", function() {
	console.log("The current speed is: " + video.playbackRate)
	console.log("Slow Down");
	video.playbackRate -= 0.05;
	console.log("New speed is: " + video.playbackRate)
});

faster.addEventListener("click", function() {
	console.log("The current speed is: " + video.playbackRate)
	console.log("Speed Up");
	video.playbackRate += 0.05;
	console.log("New speed is: " + video.playbackRate)
});

skip.addEventListener("click", function() {
	console.log("The length of this video is: "+ video.duration)
	console.log("The current location of the video is: " + video.currentTime)
	console.log("Skip Ahead")
	video.currentTime += 15;
	if (video.currentTime > video.duration - 0.01){
		video.currentTime = 0;
	}
	console.log("The new location of the video is: " + video.currentTime)
});


document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted)
	var box = document.querySelector('#mute').innerHTML;
	if (box == "Mute"){
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute'
	}
	else{
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute'
	}
})

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});