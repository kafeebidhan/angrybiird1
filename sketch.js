const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var box1,box2;
var platform;
var log1,log2,log3,log4;

function setup(){
     var canvas=createCanvas(1200,400);
     engine=Engine.create();
     world=engine.world; 
     box1=new Box(300.100,50,50);
     box2=new Box(240,100,50,50);
     bird=new Bird(200,200,50,50);
     pig=new Pig(810,350);
     log1-new Log (800,270,300,PI/2);
     log2-new Log (800,170,300,PI/2);
     log3-new Log (500,270,400,PI/7);
     log4-new Log (100,250,100,-PI/7);
          ground=new Ground(600,height,1400,20);
    // platform=new Ground(100,120,200,20);
}
function draw()
{
    background(0);
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
  //  ground.display();
    // platform.display();
    bird.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig.display();
       

}

