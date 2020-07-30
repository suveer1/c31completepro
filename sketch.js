const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var d1,d2,d3,d4,d5,d6;
var particles =[];
var plinkos=[];
var divisions=[];
var divisionheight = 300;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
for(var s = 0; s <= width; s=s+80){
  divisions.push(new Division(s,height-divisionheight/2,10,divisionheight));
}
for(var k = 75; k <= width ; k=k+50){
  plinkos.push(new Plinkos(k,75));
}
for(var k = 50; k <= width-10 ; k=k+50){
  plinkos.push(new Plinkos(k,175));
}
for(var k = 75; k <= width ; k=k+50){
  plinkos.push(new Plinkos(k,275));
}
for(var k = 50; k <= width-10 ; k=k+50){
  plinkos.push(new Plinkos(k,375));
}

}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display();
  for(var i = 0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  if(frameCount%60===0 ){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
    //score++;
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }


}