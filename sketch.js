var sea,sea_image
var ship,ship_image
function preload(){
sea_image=loadImage("sea.png")
ship_image=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,400)
sea.addImage(sea_image)
sea.scale=0.5
sea.velocityX=-1
ship=createSprite(200,250)
ship.addAnimation("moving",ship_image)
ship.scale=0.2
}

function draw() {
  background("blue");
 drawSprites()
}