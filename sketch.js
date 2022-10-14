
var seaFondo
var barquito

function preload(){
  ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  sea = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  seaFondo = createSprite(200,200)
    seaFondo.addImage(sea)
    seaFondo.scale = 0.4

  barquito = createSprite(200,200)
    barquito.addAnimation("barco",ship1)  
    barquito.scale = 0.4

}

function draw() {
  background("blue");

  drawSprites();
 
}