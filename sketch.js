const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;


var bgImg ;
var snow=[];

function preload(){
  bgImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create(); 
  world = engine.world;
  
}

function draw() {
  background(bgImg);  

  Engine.update(engine);

  if(frameCount%10===0){
    snow.push(new Snow(random(0,800),random(0,400),30,20));
    snow.lifetime = 50;
  }

  for(var i=0;i<snow.length;i++){
    snow[i].display();
  }

  drawSprites();
}