function rotatex( point , center , angle ){

 var output = createVector( 0 , 0 );

 var point1 = p5.Vector.sub( point , center );

 output.x = point1.x*cos( angle ) - point1.y*sin( angle );

 output.y = point1.x*sin( angle ) + point1.y*cos( angle );

 output.add( center );

 return output;

}

var center;

function setup(){
 
  createCanvas( windowWidth , windowHeight);

  background( 0 , 0 , 0 );
  
  center = createVector( width* 0.5 , height*0.5 );
  
  colorMode( HSB );

}

function draw(){
  var maxDist = sqrt( width * width + height * height);
  

 noStroke();



 //creating start point for ellipse
 var p0 = createVector( 80 , 80 );

 //center that they will rotate around
 var c = createVector(random( 0 , 255 ) , random( 0 , 255) );

 //( point , center , angle )
 var p1 = rotatex( p0 , c , frameCount*0.1 );
 

 push();

 //moves origin to center of screen
 translate(0.5*width , 0.5*height);

 //stopping point for the for loop
 var N = 50;
 
 for(var n = 0 ; n < N ; n++){
 
 push();

 // setting the angle for which the balls will be rotating at
 var ang = n/N*2*PI;
 
 rotate(ang);

 //creating the ellipse
 
 var Dist = center.dist( p1 );
 
 var c1 = color( Dist/ maxDist * 650 , 100 , 100 , 0.2);

  stroke( c1 );

  line( p1.x , p1.y , center.x ,  center.y );
 
 }
}
function keyTyped() {
 if( key === 's' ) {
   saveCanvas( 'canvas' , 'jpg' );
   console.log("saved");
 }
}