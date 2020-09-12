
var garbage, canvas;
var engine, world;
var ground;
var bin1, bin2, bin3;
var rightEdge, leftEdge;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    //Create the Bodies Here.
    garbage = new Waste(50, 300, 20, 20);
    ground = new Ground(400, 650, 800, 10);
    bin1 = new Bin(600, 632, 90);
    bin2 = new Bin(653, 600, 180);
    bin3 = new Bin(560, 600, 180);



	Engine.run(engine);

}


function draw() {
	background(0);
	Engine.update(engine);
	ground.display();
	
	garbage.display();
	bin1.display();
	bin2.display();
	bin3.display();


	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {


		Matter.Body.applyForce(garbage.body, garbage.body.position, { x: 17.5, y: -25 });




	}
}
