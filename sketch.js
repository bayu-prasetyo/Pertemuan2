let j;


function setup() {
  // put setup code here
  createCanvas(400,400);
  j=0;
}

function draw() {
  // put drawing code here
  background(200);
  strokeWeight(2)
  point(200,100);
  line(0,0,400,200);
  line(400,0,0,200);
  line(0,200,400,200);
  fill(255,69,0);

  rect(80, 100, 20, 100);
  strokeWeight(2)
  rect(300, 100, 20, 100);
  ellipse(250,120, 20,20);
  ellipse(150,120, 20,20);
  triangle(80,100,320,100,200,40);
  strokeWeight(2);
  fill(127,255,0)

  triangle(160,70,160, 80,200,75);
  triangle(240,70,240, 80,200,75);
  arc(200,150,40,40,radians(0),radians(180));


  beginShape();
  vertex(200,40);
 
  endShape(CLOSE);

  strokeWeight(4)
  for(var i=0; i<=400; i++){
    x = i
    y = 250 + 20*Math.sin(x/5)
    point(x,y)
  }

  var y=  50 + 20 * Math.sin(j/5);
  var r= 50 + 10 * Math.sin(j/20);
  j += 0.6
  strokeWeight(1)
  fill(255,228,20)
  ellipse(360,y,r,r)

}