const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var ground;
var world,engine;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
 
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,790,800,20);
  
  for(var a = 0; a <= width; a = a + 80){
    divisions.push(new Division(a,height - divisionHeight/2,10,divisionHeight));
  }

  for(var b = 15; b <= width; b = b+25){
    plinkos.push(new Plinko(b,120));
  }

  for(var c = 15; c <= width-10; c = c+25){
    plinkos.push(new Plinko(c,200));
  }
  for(var d = 30; d <= width; d = d+25){
    plinkos.push(new Plinko(d,160));
  }

  for(var e = 30; e <= width-10; e = e+25){
    plinkos.push(new Plinko(e,80));
  }

 

  }

function draw() {
  background("black");
  Engine.update(engine);  
  ground.display();

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 10,width/2 + 10,10)));
  }
  
  for(var f = 0; f < particles.length; f++){
    particles[f].display();
  }

  for(var g = 0; g < divisions.length; g++){
    divisions[g].display();
  }
  for(var h = 0; h < plinkos.length; h++){
    plinkos[h].display();
  }

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var  k= 0; k < plinkos.length; k++){
    plinkos[k].display();
  }

  drawSprites();
}
