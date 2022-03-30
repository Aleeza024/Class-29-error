const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var cannon;
var ball;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  //tower
  tower = new Tower(150, 350, 160, 310);
  //cannon
  var angle = -PI / 4;
  cannon = new Cannon(180, 120, 100, 200, angle);
  Matter.Body.setAngle(cannon.body, angle);

  //creating cannonballs
  ball = new Cannonball(cannon.x, cannon.y, 50);
}

function draw() {
  background(189);
  Engine.update(engine);
  image(backgroundImg, 0, 0, width, height);

  tower.display();
  cannon.display();
  ball.display();
}
  function keyRealeased() {
    if (KeyCode === DOWN_ARROW) {
      Matter.Body.setVelocity(ball.body, { x: 4, y: 8 });
      Matter.Body.setStatic(ball.body, false);
    }
  }

