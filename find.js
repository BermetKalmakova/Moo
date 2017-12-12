var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
var style = document.getElementsByTagName("style")[0];

//hardcode target as center
//randomize later
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return (((x0 - x1) ** 2) + ((y0-y1) ** 2)) ** .5;
};


var transparency = 1;
var maxd = (((boxHeight) ** 2) + ((boxWidth) ** 2)) ** .5;

var findIt = function(e) {
    transparency = distance(e.pageX, e.pageY, targetX, targetY)/maxd;
    setColor();
};


var setColor = function(e) {
    style.innerHTML = ".full {height: 100vh;}.box {border: 1px solid black;background-color: #311B55; opacity: " + transparency + ";}";
};

box.addEventListener("mousemove", findIt);
