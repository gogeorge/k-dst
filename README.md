# K-DST San Andreas Radio Station

K-DST is the rock radio station that would play whenever you were in a vehicle.

This Repository is a website where you can listen to the .mp3 file of the k-dst.

Unlike going on youtube and searching for the k-dst playlist, this is a bit different.

I explained how the code works in the radio.js file but here is a small summary.

## How it works

 - A function gets the Unix time of when I first created this repo (17th of july 2017 somewhere around 20:00).

- Then it gets the Unix time of when the user visits the page. By subtracting this two values we get the time (in milliseconds) in which the k-dst mp3 file played (its 1 hour long).

- We divide all the time the file was playing until now by the duration of the file

- Then we get the remainder and turn it into seconds. When the user visits the page the mp3 file will start playing from time point of the value of the remainder. If the remainder was 320 seconds the it starts playing from 5:20

## WHY

- No reason, I just made this for fun. However you can replace the k-dst file with your own playlist/podcast etc. When you host it on a website, every user that is on the page will listen to the same song/voice at the same time. Unless they pause it.

## HOW TO ADD YOUR OWN FILE

- Download the /example directory

- Then change this to your your mp3 file (it can be local or online from a site) :

```html
<!-- example/index.html line: 31 -->
<audio id='playlist' preload='auto' src='your_file_name.mp3'></audio>
```

- After that, change the duration variable to the duration of your file

```javascript
// example/index.html line: 40
var duration = 4098; 
/* 
By default i have it as 4098 (the length of the k-dst file in seconds) but you should change it the duration of your file (in seconds).
*/
```

- Host it online