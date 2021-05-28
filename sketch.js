var ground;
var base1,base2;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,height,1200,20);

  var base1 = new base(150,600,100,20);
  
}

function draw() {
  background(255,255,255);  

  //display
  ground.display();
  base1.display();
  drawSprites();
}