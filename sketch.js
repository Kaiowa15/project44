var bg, bgImg;
var bottomGround, topGround, leftWall, rightWall;
var spaceShip, spaceShipImg;

function preload(){

  bgImg = loadImage("./assets/background.jpg");
  spaceShipImg = loadImage("./assets/spaceship.png")
}

function setup(){

createCanvas(600, 700)

spaceShip = createSprite(300,650,50,50)
spaceShip.addImage("zuumm", spaceShipImg)

bottomGround = createSprite(300,700,600,10)
bottomGround.visible = false

topGround = createSprite(300,0,600,10)
topGround.visible = false

leftWall = createSprite(0,350,10,700)
leftWall.visible = false

rightWall = createSprite(600,350,10,700)
rightWall.visible = false


}

function draw() {
  
  background(bgImg);

  if(keyDown(UP_ARROW)){
   spaceShip.y -= 5

  }

  if(keyDown(DOWN_ARROW)){
    spaceShip.y += 5
 
  }

  if(keyDown(LEFT_ARROW)){
    spaceShip.x -= 5
 
  }

  if(keyDown(RIGHT_ARROW)){
    spaceShip.x += 5
 
  }

  spaceShip.collide(bottomGround)
  spaceShip.collide(topGround)
  spaceShip.collide(leftWall)
  spaceShip.collide(rightWall)

  drawSprites();    
}
