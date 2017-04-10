var x = 200;
var y = 300;

function setup() {
  createCanvas( 900, 600 );
  background( 255, 0, 0 );
}

function draw() {
  if ( mouseIsPressed ) {
    paint( mouseX, mouseY );
  }
  rowOfSquares();
  rowOfCircles();
}

function paint( x, y ) {
  fill(0, 0, 255, 50 );
  noStroke();
  ellipse( x, y, 50, 50 );
}
var x = 100;

function rowOfSquares() {

  while ( x <= height ) {
      fill(255,0,255);
      stroke(4);
    rect( x, 250, 50, 50 );
    x = x + 55;
  }
}

var sizes= [10,20,30,40,50]
function rowOfCircles(){
    for(var i = 0; i < 5; i++){
        stroke(4);
        ellipse((i+1)*100,100, sizes[i], sizes[i]);
        
    }
}