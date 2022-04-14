var video=document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay=false;
	video.loop=false;
	
	
});

 document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume *100 + "%";
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
 });

document.querySelector("#slower").addEventListener("click", function(){
	console.log("The current speed is: " + video.playbackRate)
	video.playbackRate*=0.95;
	console.log("New speed is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("The current speed is: " + video.playbackRate);
	video.playbackRate/=.95;
	console.log("New speed is: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("The length of this video is: "+ video.duration)
	console.log("The current location of the video is: " + video.currentTime);
	if(video.currentTime+15<=video.duration){
		video.currentTime+=15;
	}
	else{
		video.currentTime=0;
		video.play();
	}
	console.log("The new location of the video is: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("The value of mute is " +video.muted)
	if(video.muted==true){
		video.muted=false;
		document.querySelector("#mute").innerHTML="Mute";
	}
	else{
		video.muted=true;
		document.querySelector("#mute").innerHTML="Unmute";
	}
	document.querySelector("#volume").innerHTML=video.volume *100 + "%";
});
document.querySelector("#slider").addEventListener("click", function(){
	console.log(this.value);
	video.volume=this.value/100;
	document.querySelector("#volume").innerHTML=video.volume *100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	document.querySelector(".video").classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function(){
	document.querySelector(".video").classList.remove("oldSchool");
});