class Cannon {
    constructor(x, y, width, height,angle) {
      var options = {
        isStatic: true
      };
      this.image = loadImage("./assets/CANON.png");
      this.image2 = loadImage("./assets/cannon_base.png")
      this.width = width;
      this.height = height;
      this.angle = angle
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      console.log(this.angle)
      if (keyCode === LEFT_ARROW&& this.angle>-1){
      this.angle -= 0.01   
      }
      if (keyCode === RIGHT_ARROW&&this.angle<1.2){
        this.angle += 0.01   
        }
      var pos= this.body.position;
      var angle= this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
      image(this.image2,30,30,260,220)

      //arc(this.x-20,this.y+90,140,200,PI,TWO_PI)
      //arc(this.x-20,this.y+100,140,200,PI,TWO_PI)

    }

  }
  