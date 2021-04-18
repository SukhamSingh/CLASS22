
const ENGINE = Matter.Engine;
const WORLD = Matter.World;
const BODIES = Matter.Bodies;

var ground;
var mygameengine;
var mygameworld;

var ball;
function setup() {
  createCanvas(400,400);


  
  mygameengine = ENGINE.create();
  mygameworld = mygameengine.world;

  ground=BODIES.rectangle(200,300,400,10,{isStatic:true});
  WORLD.add(mygameworld,ground);

ball = BODIES.circle(200,200,25,{restitution:1.2});
WORLD.add(mygameworld,ball);


  console.log(ground);
}

function draw() {
  background("black");  
   ENGINE.update(mygameengine);
  
   // for rectangle
  rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,10);

// for ball
ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);

  
   
}