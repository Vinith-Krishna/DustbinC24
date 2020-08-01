const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var basket1, basket2, basket3, paper;
var ground, slingshot;
var gameState = "onSling";

function setup() {
	createCanvas(1000, 700);
  noStroke();  
  engine = Engine.create();
  world = engine.world;

	//Create the Bodies Here
   paper = new Paper(100,340,20);

   basket1 = new Basket(900,660,200,20);
   basket2 = new Basket(810,610,20,100);
   basket3 = new Basket(990,610,20,100);

   ground = new Ground(400,680,1000,20);
}
function draw() {
  background(255,255,255);
  Engine.update(engine);

  paper.display();
  basket1.display();
  basket2.display();
  basket3.display();
  ground.display();
  drawSprites();
}
function keyPressed(){
 if(keyCode === 32){
   Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-45});
 }
}


