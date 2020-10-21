const Engine =  Matter.Engine 
const World  = Matter.World 
const Bodies = Matter.Bodies


var engine,world
var ground,ball


function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world  = engine.world;

  
  var options = {
  	isStatic : true
  }

  var balloptions = {
  	restitution : 1.0
  }

  ground = Bodies.rectangle(200,370,1200,100,options)
  World.add(world,ground)


  ball = Bodies.circle(200,100,40,balloptions)
  World.add(world,ball)
  




}

function draw() {
  background("yellow");  

   Engine.update(engine)
    
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,10)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40)
  drawSprites();
}


