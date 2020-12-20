class Particle{
    constructor(x,y,radius){
        var options ={
            restitution: 0.4
        }

        this.x = x;
        this.y = y;
        this.r = radius;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        noStroke();
        fill(this.color);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop();
    }
    }