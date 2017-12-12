var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
var style = document.getElementsByTagName("style")[0];

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return (((x0 - x1) ** 2) + ((y0-y1) ** 2)) ** .5;
};

var transparency = 1;

var findIt = function(e) {
    
  /* YOUR IMPLEMENTATION */
};

/*
your OTHER FXNS
*/


var setColor = function(e) {
    style.innerHTML = style.innerHTML + ".box {background-color: #000000; opacity: " + transparency + ";}";
}

box.addEventListener("mousemove", findIt);