var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);
 
path=createSprite(190,200,100,100);
path.addImage("path",pathImg);
path.velocityY=4;
path.scale=1.2;

boy=createSprite(200,300);
boy.addAnimation("running",boyImg);
boy.scale=0.05;

leftBoundary=createSprite(-10,0,80,800);
leftBoundary.visible = false;

rightBoundary=createSprite(400,0,80,800);
rightBoundary.visible=false;
}

function draw() {
background(220);

boy.x=World.mouseX;
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);

 if(path.y>600){
   path.y=path.width/2;
 }

 drawSprites();

 }




