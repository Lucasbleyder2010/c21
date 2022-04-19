var rocket,rocketImg,space,spaceImg,meteor,meteorImg,star,starImg
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score;
var starGroup,meteorGroup
function preload(){
    rocketImg = loadImage("rocket.png")
    meteorImg = loadImage("meteoro.png")
    spaceImg = loadImage("space.png")
    starImg = loadImage("star.png")
    }
    
    function setup() {
    createCanvas(windowWidth,windowHeight);
    rocket.addImage("rocket",rocket.png)
     meteor  = createsprite(400,200,40,40)
     meteor.addImage("meteor",meteoro.png)
     space = createSprite(width/2,height/2,400,400)
     space.addImage(spaceImg)
     space.velocityY = 10
     star = createSprite(300,150,30,30)
     star.addImage("star",star.png)
  rocket = createSprite(200,height-200,50,40);
  rocket.scale = 0.5;
  meteorGroup = createGroup();
  starGroup = createGroup();
  
  console.log("Olá" + 5);
  rocket.setCollider("circle",0,0,50);
  rocket.debug= false
  score = 0;
}
function draw() {
  background(180);
  text("Pontuação: "+ score, width-200,height/2);
  
  if(space.y>height) {
    space.y = height/2
    } 
  if(gameState === PLAY){
   
    score = score + Math.round(getFrameRate()/60);
    if (score%100===0 && score>0){


    }
   
    if((touches.lenght>0 ||keyDown("space"))&& rocket.y >= height-70) {
        rocket.velocityY = -13;
        touches = []
      }
    
  
    rocket.velocityY = rocket.velocityY + 0.8
  
  
    spawnClouds();
  
   
    spawnObstacles();
    
    if(meteorGroup.isTouching(rocket)){
      gameState = END;
      rocket.velocityY = -10
    }
   
  }
   else if (gameState === END) {
       
      star.velocityX = 0;
      rocket.velocityY = 0
      meteor.velocityX = 0;
      meteorGroup.setVelocityXEach(0);
     starGroup.setVelocityXEach(0);
    starGroup.setLifetimeEach(-1);
    meteorGroup.setLifetimeEach(-1);
    if(mousePressedOver(restart)){
    reset()
    }
  } 
  drawSprites();
}
function meteorGroup(){
 if (frameCount % 60 === 0){
   var meteor = createSprite(width,height-30,10,40);
   meteor.velocityX = -(6+score/100);
   
    var meteor = Math.round(random(1,6));
    switch(rand) {
      case 1: meteor.addImage(obstacle1);
              break;
    }
   
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
    obstaclesGroup.add(obstacle);
 }
}

function starGroup() {
   if (frameCount % 60 === 0) {
     star = createSprite(width,height-90,40,10);
    star.y = Math.round(random(height-90,height-200));
    star.addImage(cloudImage);
    star.scale = 0.5;
    star.velocityX = -3;
    
    star.lifetime = 450;
    
    star.depth = rocket.depth;
    rocket.depth = rocket.depth + 1;
    starGroup.add(star);
    }
}