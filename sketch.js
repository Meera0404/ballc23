const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground,ball;
var myEngine,myworld;
var box1,box2;
//var box1,box2;
function setup() {
  createCanvas(600,600);
  myEngine=Engine.create();
  myworld=myEngine.world;

 
 
  
  //console.log(ground);
 var options = {
    restitution:1.0
  }
  ball = Bodies.circle(200,240,25,options)
  World.add(myworld,ball);

box1=new Box(200,140,40,40);
box2=new Box(240,140,40,40);
ground = new Ground(300,580,600,30);
}
function draw() {
  background("black");
  Engine.update(myEngine);  

  box1.display();
  box2.display();
  ground.display();
 //rectMode(CENTER);
  //rect(ground.position.x,ground.position.y,600,30);
 ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25);
  //rect(groun)
  //drawSprites();
}