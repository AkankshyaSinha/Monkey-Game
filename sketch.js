var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGrp
var score
var survivalTime= 0


function preload(){
 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600, 500)
  
  bananaGrp= createGroup()
  obstaclesGrp= createGroup()
  
  monkey= createSprite(119,450,20,20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale= 0.1
  
  ground= createSprite(300, 480, 600, 50)
  invisibleGround= createSprite(300,490,600,50)
  invisibleGround.visible= false
  
}

function draw() {
  background("blue")
  
  console.log(ground.velocityX)
  console.log("frameCount "+ frameCount+ "frameRate "+ getFrameRate() )
  
  ground.velocityX= -3
  /*if (ground.x< 0){
    ground.x = 300
  }*/
  
  ground.x= ground.width/2
   console.log(monkey.y+ "wu")
  
  if (keyDown("space")) {
    console.log(monkey.y+ "testing")
    monkey.velocityY= -20
    }
  
  monkey.velocityY= monkey.velocityY+ 0.8
   
  food()
  obstacles()
   
  textSize(20)
  fill("black")
  survivalTime= Math.ceil(frameCount/getFrameRate())
  text("Survival Time= "+ survivalTime, 200, 50)
   
  monkey.collide(invisibleGround)
  
  drawSprites()
}

function food() {
  if (frameCount%80 === 0) {
  banana= createSprite(420, Math.round(random(120, 200)), 30, 30)
  banana.addImage(bananaImage)
  banana.scale= 0.1
  banana.velocityX= -4
  banana.lifetime= 150
  console.log(banana.lifetime)
  bananaGrp.add(banana)
  }
    
}

function obstacles() {
  if (frameCount%300=== 0) {
    obstacle= createSprite(600,450,30,30);
    obstacle.addImage(obstacleImage)
    obstacle.scale= 0.1
    obstacle.velocityX= -3
    
  }  
}