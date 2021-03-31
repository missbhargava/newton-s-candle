
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = 	Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	b1= new Bob (220,550,28)
	b2= new Bob (280,550,28)
	b3= new Bob (340,550,28)
	b4= new Bob (400,550,28)
	b5= new Bob (460,550,28)
	roof= new Roof(380,200,600,30)
	rope1= new Rope(b1.body,{x:220,y:215})
	rope2= new Rope(b2.body,{x:280,y:215})
	rope3= new Rope(b3.body,{x:340,y:215})
	rope4= new Rope(b4.body,{x:400,y:215})
	rope5= new Rope(b5.body,{x:460,y:215})



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
 b1.display()
 b2.display()
 b3.display()
 b4.display()
 b5.display()
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
 roof.display()
  drawSprites();
 
}
function mouseDragged() {
	Matter.Body.setPosition(b1.body,{x:mouseX,y:mouseY})
}



