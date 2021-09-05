var backgroundImage;
var iss, spacecraft;
var hasDocked = false;
// jet smoke spacecraft images
var spacecraftDownImage, spacecraftUpImage, spacecraftLeftImage, spacecraftRightImage;
var gameState = 1;


function preload(){

backgroundImage = loadImage("spacebg.jpg");
spacecraftDownImage = loadImage("spacecraft1.png");
spacecraftUpImage = loadImage("spacecraft2.png");
spacecraftLeftImage = loadImage("spacecraft3.png");
spacecraftRightImage = loadImage("spacecraft4.png");


}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  //iss = createSprite(400,200);
  //iss.addImage(iss_image);
  //iss.scale = 0.25;

  spacecraft = createSprite(400,200);
  spacecraft.visible = false;

}

function draw() {
  background(backgroundImage);  
  drawSprites();

  if(!hasDocked){

    spacecraft.visible = true;

    if(keyWentDown("left_arrow")){
      
      spacecraft.addImage(spacecraftLeftImage);
      spacecraft.x-=4;
      
    }

    if(keyWentDown("right_arrow")){

      spacecraft.addImage(spacecraftRightImage);
      spacecraft.x+=4;

    }

    if(keyWentDown("down_arrow")){

      spacecraft.addImage(spacecraftDownImage);
      spacecraft.y+=4;

    }

    if(keyWentDown("down_arrow")){

      spacecraft.addImage(spacecraftUpImage);
      spacecraft.y-=4;

    }

    gameState= 2;

  }



}