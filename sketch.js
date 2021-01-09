var goku
var frieza
var kamehameha,beam,kiBlast,deathBeam
var gokuPose
var gokuSuperSaiyan
var gokuAttack
var gokuKamehameha
var gokuSaiyanKamehameha

var friezaPose
var friezaBeam
var goldenFriezaPose
var friezaDeathBeam
var friezaGoldenBeam

var backgroundImage
var invisibleGround
var attack 

function preload(){
  backgroundImage=loadImage("fighting background.jpg")
  gokuPose=loadAnimation("gokupose.png")
  gokuSuperSaiyan=loadAnimation("gokusupersaiyan.png")
  gokuAttack=loadAnimation("gokuattack.png")
  gokuKamehameha=loadAnimation("gokukamehameha.png")
  gokuSaiyanKamehameha=loadAnimation("gokusaiyankamehameha.png")
  friezaPose=loadAnimation("friezapose.png")
  friezaBeam=loadAnimation("friezabeam.png")
  goldenFriezaPose=loadAnimation("goldenfriezapose.png")
  friezaGoldenBeam=loadAnimation("friezagoldenbeam.png")
  friezaDeathBeam=loadAnimation("friezadeathbeam.png")
  attack=loadAnimation("ki blast.png")

  
}

function setup(){
  createCanvas(displayWidth,displayHeight-250)
  goku=createSprite(130,displayHeight-500,35,50);
  goku.addAnimation("gokuPose",gokuPose)
  goku.addAnimation("gokuAttack",gokuAttack)
  goku.addAnimation("gokuKamehameha",gokuKamehameha)
  goku.addAnimation("gokuSuperSaiyan",gokuSuperSaiyan)
  goku.addAnimation("gokuSaiyanKamehameha",gokuSaiyanKamehameha)

  frieza=createSprite(1300,displayHeight-500,25,40);
  frieza.addAnimation("friezaPose",friezaPose)
  frieza.addAnimation("friezaBeam",friezaBeam)
  frieza.addAnimation("goldenFriezaPose",goldenFriezaPose)
  frieza.addAnimation("friezaGoldenBeam",friezaGoldenBeam)
  frieza.addAnimation("friezaDeathBeam",friezaDeathBeam)

  Attack=createSprite(200,250,70,5)
  Attack.visible=false;
  
  Attack.addAnimation("kiBlast",attack)
  Attack.scale=0.2;

  invisibleGround = createSprite(displayWidth/2,displayHeight-350,displayWidth,30);

  
}



function draw(){

  background(backgroundImage);
  if(keyDown("w")){
    goku.y=goku.y-10
  }

  if(keyDown("s")){
    goku.y=goku.y+10
  }
  if(keyDown("d")){
    goku.x=goku.x+10
  }
  if(keyDown("a")){
    goku.x=goku.x-10
  }
  if(keyDown("space")){
    goku.velocityY=-10
  }
  goku.velocityY=goku.velocityY+0.6
  if(keyDown("UP_ARROW")){
    frieza.y=frieza.y-10
  }
  if(keyDown("DOWN_ARROW")){
    frieza.y=frieza.y+10
  }
  if(keyDown("RIGHT_ARROW")){
    frieza.x=frieza.x+10
  }

  if(keyDown("LEFT_ARROW")){
    frieza.x=frieza.x-10
  }
    if(keyDown("n")){
      frieza.velocityY=-10;
    }

    if(keyDown("k")){
      goku.changeAnimation("gokuAttack",gokuAttack)
      goku.scale=0.8
    Attack.velocityX=10;
    Attack.visible=true;
   
    }
    if(keyDown("m")){
      goku.changeAnimation("gokuKamehameha",gokuKamehameha)
      goku.scale=0.8
    }
    if(keyDown("x")){
      goku.changeAnimation("gokuSuperSaiyan",gokuSuperSaiyan)
    }

  if(keyDown("f")){
    goku.changeAnimation("gokuSaiyanKamehameha",gokuSaiyanKamehameha)
    goku.scale=0.7
  }
  if(keyDown("l")){
    frieza.changeAnimation("friezaBeam",friezaBeam)
    frieza.scale=0.7
  }

  if(keyDown("j")){
    frieza.changeAnimation("goldenFriezaPose",goldenFriezaPose);
  }
  if(keyDown("v")){
    frieza.changeAnimation("friezaGoldenBeam",friezaGoldenBeam)
    frieza.scale=0.7
  }
  if(keyDown("b")){
    frieza.changeAnimation("friezaDeathBeam",friezaDeathBeam)
  } 
  
  
   
    
  
frieza.velocityY=frieza.velocityY+0.6
  goku.collide(invisibleGround);
  frieza.collide(invisibleGround);
  invisibleGround.visible=true;
  drawSprites();
  
}
