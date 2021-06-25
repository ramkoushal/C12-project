var garden,rabbit;
var gardenImg,rabbitImg;
//var apple,leaves;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  //appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

  



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


 rabbit.x = World.mouseX; 
   
  drawSprites();
}