var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState= PLAY;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fireball, fireballGroup;
var rocket;
var background;
 

function preload()
{
  fireball=loadImage("Fireball.png");
  rocket=loadImage("Rocket.png");
  background=loadImage("SpaceBackground.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	fireball= createSprite(50, 50);
	fireball.addImage("fireball", fireball);
	fireball.scale= 0.03;
	 

	rocket= createSprite(800, 350, 150, 150);
	rocket.addImage("rocket", rocket);
	rocket.scale= 0.05;
	rocket.x= width /2;

	background= createSprite( 800, 700);
	background.addImage("background", background);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



