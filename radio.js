function findTimePoint() {
	var startingDate = 1500309500918; // 17 july 2017 , around 20:00 
	//The unix time of when the user visit the page
	var now = new Date().getTime();
	//value is the number of seconds the k-dst file COULD have been played
	//from 17 july 2017 to the date the user visit the page
	var value = (now - startingDate) / 1000; // from milliseconds to seconds
	//01:08:18 in seconds, duration of the k-dst file.
	var duration = 4098;
	//here we get the remainder in seconds after the 'value' has been divided
	//by the duration of the k-dst file.
	var playlistTime = Math.floor(value % duration); //in seconds
	localStorage.setItem('playlistTime', playlistTime);
}
findTimePoint();
var playlistTime = localStorage.getItem('playlistTime');

playlist.addEventListener('canplaythrough', function() {
	if(playlist.currentTime < playlistTime) {
		//make the k-dst file (mp3) play from the value of playlistTime
		//which is in seconds
		playlist.currentTime = playlistTime;
	}
	playlist.play();
});

//button functions
stopPlaylist.onclick = function() {
	playlist.pause();
	//css
	stopPlaylist.style.backgroundColor = "green";
	stopPlaylist.style.color = "white";
	stopPlaylist.style.border = "none";
	stopPlaylist.style.boxShadow = "0px 0px 0px";
	//change 'play' button
	playPlaylist.style.backgroundColor = "white";
	playPlaylist.style.color = "green";
	playPlaylist.style.border = "1px solid green";
	playPlaylist.style.boxShadow = "5px 5px 5px lightgrey";
}
playPlaylist.onclick = function() {
	playlist.play();
	//css
	playPlaylist.style.backgroundColor = "green";
	playPlaylist.style.color = "white";
	playPlaylist.style.border = "none";
	playPlaylist.style.boxShadow = "0px 0px 0px";
	//change 'stop' button
	stopPlaylist.style.backgroundColor = "white";
	stopPlaylist.style.color = "green";
	stopPlaylist.style.border = "1px solid green";
	stopPlaylist.style.boxShadow = "5px 5px 5px lightgrey";
}

//thanks to Colin, https://stackoverflow.com/questions/31926221/video-volume-slider-in-html5-and-javascript
//for the volume control
window.SetVolume = function(val) {
    playlist.volume = val / 100;
}
