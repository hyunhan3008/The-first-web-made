/*Javscript for the actual game puzzle. */
// FUNCTION PART
// This fucntion is for drawing the actual images on canvas.
// Different imageIndex is assigned to each three images, so later I can call different images on given condition.
function draw(context) {
var img = new Image();
    if (imageIndex == 1) {
		img.onload = function() {
		context.drawImage(img,0,0);
		}
		img.src = "../images/gameimg1.png"
	}
	else if (imageIndex == 2) {
		img.onload = function() {
		context.drawImage(img,0,0);
		}
		img.src = "../images/gameimg2.png"
	}
	else if (imageIndex == 3) {
		img.onload = function() {
		context.drawImage(img,0,0);
		}
		img.src = "../images/gameimg3.png"
	}
}

//This function is for calculating the x and y coordinates on the canvas.
//This part is needed to know where I should draw circle on the image on canvas.
function getMouseXY(e, canvas) {
  var canvas = document.getElementById('canvas_board');
  var boundingRect = canvas.getBoundingClientRect();
  var offsetX = boundingRect.left;
  var offsetY = boundingRect.top;
  var w = (boundingRect.width-canvas.width)/2;
  var h = (boundingRect.height-canvas.height)/2;
  offsetX += w;
  offsetY += h;
  var mx = Math.round(e.clientX-offsetX);
  var my = Math.round(e.clientY-offsetY);
  return {x: mx, y: my}; 
}

//This is fucntion for drawing circle on the images to spot the differences between two images.
function drawCircleAt(x,y) {
  context.strokeStyle = "#35005E";
  context.lineWidth = 8;
  context.beginPath();
  context.arc(x,y,15,0,Math.PI*2,true);
  context.stroke();
}

//This part is for displaying the word congratulation after the player find all the differet spots.
function drawTextAt(x,y) {
  context.fillStyle = "#EFEF5C";
  context.font = "34px Impact, Charcoal, sans-serif";
  context.fillText("CONGRATULATIONS!",18,245);
  context.fillText("CONGRATULATIONS!",18,495);
}

//Whenever the player click the next button, the different images will be uploaded. 
//All the counter and checkking spots are be reset, as different images have different cheking spot.
function nextImage() {
	counter=0;
	check1 = "false"
	check2 = "false"
	check3 = "false"
	check4 = "false"
	check5 = "false"
	if (imageIndex == 1) {
		imageIndex = 2
	}
	else if (imageIndex ==2) {
		imageIndex = 3
	}
	else if (imageIndex == 3) {
		imageIndex = 1
	}
	context.clearRect(0, 0, WIDTH, HEIGHT);
	//draw new image on canvas with new given imageIndex.
	draw(context);
}

//I set the certain spots which show different images between two differetn images given.
//Each image have different spots to be clicked. Therefore I seperated three images with different checking spots.
//Only when the player user click the spot given beneath, the circle will be drawn.
//Circle will be drwan once because after being drwan the the value of check is changed to false.
function doSomething(evt) {
  var pos = getMouseXY(evt);
	if (imageIndex == 1) { 
		  if (check1 == "false") {
			if ((pos.x >=263 && pos.x <= 284) && (pos.y >=442 && pos.y <= 464)) {
				check1 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }
		  if (check2 == "false") {
			if ((pos.x >242 && pos.x <= 258) && (pos.y >=268 && pos.y <= 286)) {
				check2= "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y); 
			}
		  }
		  if (check3 == "false") {
			if ((pos.x >167 && pos.x <= 192) && (pos.y >=362 && pos.y <= 415)) {
				check3 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }
		  if (check4 == "false") {
			if ((pos.x >14 && pos.x <= 99) && (pos.y >=297 && pos.y <= 328)) {
				check4 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }
		  if (check5 == "false") {
			if ((pos.x >42 && pos.x <= 64) && (pos.y >=470 && pos.y <= 489)) {
				check5 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }  
	}
	
	if (imageIndex == 2) {
		if (check1 == "false") {
			if ((pos.x >=53 && pos.x <= 74) && (pos.y >=291 && pos.y <= 308)) {
				check1 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }
		  if (check2 == "false") {
			if ((pos.x >245 && pos.x <= 267) && (pos.y >=361 && pos.y <= 376)) {
				check2= "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y); 
			}
		  }
		  if (check3 == "false") {
			if ((pos.x >57 && pos.x <= 90) && (pos.y >=439 && pos.y <= 481)) {
				check3 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }
		  if (check4 == "false") {
			if ((pos.x >25 && pos.x <= 75) && (pos.y >=340 && pos.y <= 373)) {
				check4 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }
		  if (check5 == "false") {
			if ((pos.x >168 && pos.x <= 203) && (pos.y >=386 && pos.y <= 468)) {
				check5 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }  
	}
	if (imageIndex == 3) {
		if (check1 == "false") {
			if ((pos.x >=112 && pos.x <= 126) && (pos.y >=419 && pos.y <= 426)) {
				check1 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }
		  if (check2 == "false") {
			if ((pos.x >152 && pos.x <= 171) && (pos.y >=398 && pos.y <= 408)) {
				check2= "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y); 
			}
		  }
		  if (check3 == "false") {
			if ((pos.x >153 && pos.x <= 178) && (pos.y >=337 && pos.y <= 349)) {
				check3 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }
		  if (check4 == "false") {
			if ((pos.x >134 && pos.x <= 157) && (pos.y >=459 && pos.y <= 474)) {
				check4 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }
		  if (check5 == "false") {
			if ((pos.x >62 && pos.x <= 75) && (pos.y >=405 && pos.y <= 428)) {
				check5 = "true";
				counter +=1;
				drawCircleAt(pos.x, pos.y);
			}
		  }  
	}
	//As there are 5 different differences, if counter reaches 5, it should display congratulation phrase on the image
	if (counter == 5) {
		drawTextAt(pos.x,pos.y)
	}
}

// main program body
var canvas = document.getElementById('canvas_board');
var nextButton = document.getElementById('next1');
var context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
//initial value of the check button is false, so every time draw new image the circle can be drawn once again.
var check1 = "false";
var check2 = "false";
var check3 = "false";
var check4 = "false";
var check5 = "false";
var counter = 0;
var imageIndex = 1;
draw(context);
canvas.addEventListener('click', doSomething);
