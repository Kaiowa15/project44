var bg, bgImg;
var bottomGround,topGround,leftWall,rightWall;
var spaceShip,spaceShipImg;
var bullet,bullet1,bulletImg,bulletGrop;
var playerHitBox
var gameState = "play"



function preload(){

  bgImg = loadImage("./assets/background.jpg");
  spaceShipImg = loadImage("./assets/spaceship.png")
  bulletImg = loadImage("./assets/bullet.png")
}

function setup(){

createCanvas(600, 700)

spaceShip = createSprite(300,650,50,50)
spaceShip.addImage("zuumm", spaceShipImg)

playerHitBox = createSprite(300,650,1,1)


bottomGround = createSprite(300,700,600,10)
bottomGround.visible = false

topGround = createSprite(300,0,600,10)
topGround.visible = false

leftWall = createSprite(0,350,10,700)
leftWall.visible = false

rightWall = createSprite(600,350,10,700)
rightWall.visible = false

bulletGrop = new Group();
}

function draw() {
  
  background(bgImg);


  if(gameState === "play"){

   if(keyDown(UP_ARROW)){
     spaceShip.y -= 6
   
    }
   
   if(keyDown(DOWN_ARROW)){
     spaceShip.y += 6
    
    }
   
   if(keyDown(LEFT_ARROW)){
     spaceShip.x -= 6
  
    }
   
   if(keyDown(RIGHT_ARROW)){
     spaceShip.x += 6
    
    }
   
   spaceShip.collide(bottomGround)
   spaceShip.collide(topGround)
   spaceShip.collide(leftWall)
   spaceShip.collide(rightWall)

   playerHitBox.position.x = spaceShip.position.x
   playerHitBox.position.y = spaceShip.position.y

   if(playerHitBox.isTouching(bulletGrop)){
    gameState = "end"

   }
   
    bulletGroup()  

  }

  if(gameState === "end"){
  spaceShip.x = 300
  spaceShip.y = 650

  playerHitBox.x = 300
  playerHitBox.y = 650

  bulletGrop.setVelocityYEach(0);
  bulletGrop.setLifetimeEach(-1);
 








  }


  
  drawSprites(); 
}

function bulletGroup() {
  if (frameCount % 1 === 0 ) {
   var bullet = createSprite(300,10,30,60)
   bullet.x = Math.round(random(0,600));
   bullet.addImage(bulletImg)
   bullet.scale = 0.5;
   bullet.velocity.y = 8
   bullet.lifetime = 100;

   bulletGrop.add(bullet)




  }

}


