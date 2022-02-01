function preload(){
  backgroundImage=loadImage("snow3.jpg");
  kidImage=loadImage("kid1.jpg");
}




function setup() {
  createCanvas(800,400);
 kid = createSprite(400, 300, 50, 50);
 kid.addImage(kidImage);
 kid.scale=0.5;
}


function draw() {
  background(backgroundImage); 

  if(keyDown("left")){
    kid.x=kid.x-3;
  }
  if(keyDown("right")){
    kid.x=kid.x+3;
  }
   
  drawSprites();
}