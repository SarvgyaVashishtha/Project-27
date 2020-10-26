
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roofObject=new Roof(width/2,50,650,25);
  
  bobObject1=new Bob(300,600,25)
  bobObject2=new Bob(350,600,25)
  bobObject3=new Bob(400,600,25)
  bobObject4=new Bob(450,600,25)
  bobObject5=new Bob(500,600,25)
  
  ropeobject1=new Rope(bobObject1.body,roofObject.body,-100,0);
  ropeobject2=new Rope(bobObject2.body,roofObject.body,-50,0);
  ropeobject3=new Rope(bobObject3.body,roofObject.body,0,0);
  ropeobject4=new Rope(bobObject4.body,roofObject.body,50,0 );
  ropeobject5=new Rope(bobObject5.body,roofObject.body,100,0);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(200);
 
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  ropeobject1.display();
  ropeobject2.display();
  ropeobject3.display();
  ropeobject4.display();
  ropeobject5.display();  
  
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-60,y:-50});
  }
}


