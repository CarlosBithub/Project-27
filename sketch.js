
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5,handle,bobDiameter

var rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  bobDiameter=40


	//Create the Bodies Here.

  bobobject1=new bob(200,500,-20);
	bobobject2=new bob(300,500,-20);
	bobobject3=new bob(400,500,-20);
	bobobject4=new bob(500,500,-20);
	bobobject5=new bob(600,500,-20);

	handle=new roof(400,130,650,40);

  rope1=new rope(bobobject1.body,handle.body,-bobDiameter*4.8,0);
  rope2=new rope(bobobject2.body,handle.body,-bobDiameter*2.3,0);
  rope3=new rope(bobobject3.body,handle.body,-bobDiameter*0,0);
  rope4=new rope(bobobject4.body,handle.body,-bobDiameter*-2.5,0);
  rope5=new rope(bobobject5.body,handle.body,-bobDiameter*-4.9,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  handle.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
  keypressed();
}


function keypressed(){

if(keyCode===UP_ARROW){
  Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-100,y:-100})
}



}



