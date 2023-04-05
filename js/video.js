var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video")
	video = document.querySelector("video")
	video.play()
	document.querySelector("#volume").innerHTML = 100 + "%"

});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video")
	video = document.querySelector("video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function () {
	video = document.querySelector("video")
	video.playbackRate = video.playbackRate * 0.90
	console.log("New Speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function () {
	video = document.querySelector("video")
	video.playbackRate = video.playbackRate * 1.10
	console.log("New Speed is", video.playbackRate)

});

document.querySelector("#skip").addEventListener("click", function () {
	video = document.querySelector("video")
	video.currentTime += 10
	console.log("New location is", video.currentTime)

});


document.querySelector("#mute").addEventListener("click", function () {
	console.log("Mute Video")
	video = document.querySelector("video")
	if (video.muted === false) {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"

	}
});


document.querySelector("#slider").addEventListener("change", function () {
	console.log("I am in slider")
	console.log(this)
	console.log(this.value)
	video = document.querySelector("video")
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = this.value + "%"
});

document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Old School")
	video = document.querySelector("video")
	video.classList.add("oldSchool") = "video"

});

document.querySelector("#orig").addEventListener("click", function () {
	console.log("Original")
	video = document.querySelector("video")
	video.classList.remove("oldSchool") = "video"
});













