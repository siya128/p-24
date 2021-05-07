const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubberball;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   
    hammer = new Hammer(10,100);
    rubberball = new Rubber(600,300,50,50)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    
    hammer.display();
    rubber.display();
    
 
}