//Namespacing creating aliases
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ball,ground;

function setup() {
  createCanvas(400,400);   
  engine = Engine.create();
  world = engine.world;

  var options = {

    restitution : 1.0
  }

  ball =  Bodies.circle(200,200,50,options);
  World.add(world,ball);

  var ground_options = {
    isStatic : true
  }

  
  ground = Bodies.rectangle(400,380,400,20,ground_options);
  World.add(world,ground);



}

function draw() {
  background("black");  
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50)

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50 );



  drawSprites();
}