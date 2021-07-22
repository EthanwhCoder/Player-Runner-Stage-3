var bgImage,Bground;
var ground;
var player,playerImage;
var coin,coinImage;
var fire, fireImage;
var mango, mangoImage;
var gameState = "play";
var mangosGroup, firesGroup;
var player_collided;

function preload(){
bgImage = loadImage("BG.jpeg")
playerImage = loadAnimation("Run-1.png","Run-2.png","Run-3.png")
coinImage = loadImage("Golden-Coin.png");
fireImage = loadImage("FIRE-101.png")
mangoImage = loadImage("Maaango.png")
player_collided = loadAnimation("collide.png");

}

function setup(){
  createCanvas(800, 600);

  Bground = createSprite(500,300);
  Bground.addImage("ground",bgImage);
  Bground.velocityX = -2;

  ground = createSprite(400,590,800,20);
  ground.shapeColor = rgb(109,54,54);
  
  player = createSprite(50,535,40,20);
  player.addAnimation("Boy",playerImage);
  player.addAnimation("collided",player_collided);
  player.scale= 1.3;



  coinsGroup = new Group();
  mangosGroup = new Group();
  firesGroup = new Group();


}

function draw(){
  background(0)
  //console.log(Bground.x)

  if(gameState === "play"){

    if(Bground.x<300){
      Bground.x=500;
    }     
    
    if(player.isTouching(mangosGroup)){
      player.scale = 2; 
    }

    if(player.isTouching(firesGroup)){
      gameState = "end";
    }

    spawnCoins();    
    spawnFires();
    spawnMangos();
 

    
  }
 
  else if(gameState === "end"){

    Bground.velocityX = 0;
    player.velocityY = 0;
    mangosGroup.setVelocityXEach(0);
    firesGroup.setVelocityXEach(0);
    
    //change the trex animation
    player.changeAnimation("collided",player_collided);
    



  }




 
  drawSprites();
}



function spawnCoins() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    coin = createSprite(600,400,40,10);
    coin.y = Math.round(random(200,450));
    coin.addImage(coinImage);
    coin.scale = 0.18;
    coin.velocityX = -3;
    
     //assign lifetime to the variable
    //coin.lifetime = 200;
    
    //adjust the depth
    //coin.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    coinsGroup.add(coin);
  }
  
}


function spawnMangos() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    mango = createSprite(600,400,40,10);
    mango.y = Math.round(random(400,500));
    mango.addImage(mangoImage);
    mango.scale = 0.08;
    mango.velocityX = -3;

    
    
     //assign lifetime to the variable
    //coin.lifetime = 200;
    
    //adjust the depth
    //coin.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    mangosGroup.add(mango);
  }
  
}


function spawnFires() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    fire = createSprite(600,525,40,10);
    fire.addImage(fireImage);
    fire.scale = 0.3;
    fire.velocityX = -3;
    
     //assign lifetime to the variable
    //coin.lifetime = 200;
    
    //adjust the depth
    //coin.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    firesGroup.add(fire);
  }
  
}

