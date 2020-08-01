class Paper{
    constructor(x,y,d){
       var options = {
            'restitution': 0.5,
            'friction':1.0,
            'density':1.0
        }
     this.body = Bodies.circle(x,y,20,options);
     this.width = width;
     this.height = height;
     
     World.add(world, this.body);
    }
    display(){
      push();
      fill(0);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, 20, 20);
      pop();
    }
} 