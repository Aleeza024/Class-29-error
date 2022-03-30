class Cannonball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    var options = {
      isStatic: true,
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };
    this.body = Bodies.circle(x, y, this.radius, options);
    World.add(world,this.body)
    this.image = loadImage("./assets/cannonball.png")
  }


display(){
  var pos= this.body.position;
      var angle= this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);
      pop();
}




}
