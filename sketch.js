var bg, bgImg
var bottomGround,topGround,leftWall,rightWall
var spaceShip,spaceShipImg
var bullet,bullet1,bulletImg,bulletGrop
var playerHitBox
var gameOver, restart
var gameOverImg, restartImg
var gameState = "play"
var score = 0


function preload(){

  bgImg = loadImage("./assets/background.jpg");
  spaceShipImg = loadImage("./assets/spaceship.png")
  bulletImg = loadImage("./assets/bullet.png")
  gameOverImg = loadImage("./assets/gameOver.png")
  restartImg = loadImage("./assets/restart.png")
}

function setup(){

createCanvas(600, 700)

spaceShip = createSprite(300,650,50,50)
spaceShip.addImage("zuumm", spaceShipImg)

playerHitBox = createSprite(300,650,1,1)

gameOver = createSprite(300,350,100,200)
gameOver.addImage("F", gameOverImg)
gameOver.scale = 5
gameOver.visible = false


restart = createSprite(300,550,60,50)
restart.addImage("oh boy here we go again", restartImg)
restart.scale = 3
restart.visible = false

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
 
  gameOver.visible = true
  restart.visible = true


  if(mousePressedOver(restart)) {
    reset()


   }

  }


  drawSprites();
  Score() 
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

function reset(){
  gameState = "play"
 
  bulletGrop.destroyEach();
 
  restart.visible = false;
  gameOver.visible = false;
 
  score = 0  
 
}

function Score () {
  if (frameCount % 60 === 0 && gameState === "play") {
  score += 1


  }

  
  textFont("algerian"); 
  fill("yellow");
  textSize(20);
  text("score: "+score,10,30 );


}
