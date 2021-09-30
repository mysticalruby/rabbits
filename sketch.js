var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function draw() {
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
   drawSprites();
  // console.log("h1");
   apples();
   leaf();
  // console.log("h2");

}
function apples(){
  var apple=createSprite((random(50,150)),0,40,10);
  apple.velocityY=3;
  apple.addImage(appleImg);
  apple.scale=(3);
  }
  function leaf(){
  var leaf=createSprite((random(50,150)),0,40,10);
  leaf.velocityY=3;
  leaf.addImage(appleImg);
  leaf.scale=(3);
  }