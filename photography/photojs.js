 var currentPhoto = 0;
 var numPhotos = 15;
 var intervelometer;
 var delay = 30000;
 
 function firstLoad()
 {
	document.getElementById("photo").src = "photos/0.jpg";
	intervelometer = setInterval(advancePhoto, delay);
 }
 
 function clickAdvance()
 {
	clearInterval(intervelometer);
	advancePhoto();
	intervelometer = setInterval(advancePhoto, delay);
 }
 
 function advancePhoto()
 {
	currentPhoto++;
	if(currentPhoto >= numPhotos)
	{
		currentPhoto = 0;
	}
	document.getElementById("photo").src = "photos/" + currentPhoto + ".jpg";
 }