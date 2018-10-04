function Circle(x,y, radius) {
  this.x=x;
  this.y=y;
  this.radius = radius;
}

function getRandomHex() {
  return Math.floor(Math.random()*255);
}

function randomColor() {
  var red = getRandomHex();
  var green = getRandomHex();
  var blue = getRandomHex();
  return "rgb(" + red +"," + blue + "," + green +")";
}

function createCircle() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var x=Math.floor(Math.random()*1368);
  var y=Math.floor(Math.random()*768);
  var color = randomColor();
  var radius = Math.floor(Math.random()*80);
  var circle = new Circle(x,y, radius);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
for (var i=0;i<69;i++){
  createCircle();
}
