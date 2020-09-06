
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var groundobj ;
var dustbinobj;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)

//var Render 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundobj = new Ground(780,680,1700,20,"brown");
	dustbinwall1 = new Ground(500,650,200,20,"white");
	dustbinwall2 = new Ground(410,600,20,80,"white");
	dustbinwall3 = new Ground(590,600,20,80,"white");
    // console.log(dustbinobj1)
	//dustbinobj =  new Dustbin();
	paperobj = new Paper(200,200,20,20);
	console.log(paperobj)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobj.display();
 // fill("white")
  dustbinwall1.display();
  dustbinwall2.display();
  dustbinwall3.display();
	paperobj.display();
  //dustbinobj.display();
 // drawSprites();
 //keyPressed()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:45,y:-45})
	}
}