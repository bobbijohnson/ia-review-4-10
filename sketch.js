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
        ellipse((3+1)*100,100, sizes[3], sizes[3]);
        ellipse((5+1)*300,300, sizes[5], sizes[5]);
        ellipse((1+1)*600,600, sizes[1], sizes[1]);
        ellipse((2+1)*200,200, sizes[2], sizes[2]);
    }
}