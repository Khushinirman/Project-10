var sea; 
var ship, seaImg, ship_running, shipImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadImage("ship-1.png");
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(900,500);
  sea = createSprite(200,200,900,500);
ship = createSprite(400,250,200,200);
edges = createEdgeSprites();
  
//ship.addImage("ship",shipImg);
ship.addAnimation("running", ship_running);
  sea.addImage("sea",seaImg);
  ship.scale=0.4;
 
}

function draw() {
  sea.velocityX = -10;
  if(sea.x <0 ){
    sea.x = sea.width/2;
          }
      
 drawSprites();

 
}
