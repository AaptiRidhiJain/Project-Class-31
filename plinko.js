class Plinko{
    constructor(x,y){
        var options ={
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x,y,20,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,20,20);
        pop();
    }
}