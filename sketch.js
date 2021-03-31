const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plane, hammer;
var rubber, stone, iron;


function setup(){
    var canvas = createCanvas(1200,600);

  //creating our own world and engine
    engine = Engine.create();
    world = engine.world;

  //creating plane and hammer
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

  //creating rubber, iron and stone
    rubber = new Rubber(900,550,80);
    stone = new Stone(400,550,70,50);
    iron = new Iron(700,550,90,100);

}


function draw(){
    background("lightBlue");

  //updating engine
    Engine.update(engine);

  //displaying plane and hammer
    plane.display();
    hammer.display();

  //displaying rubber, stone and iron
    rubber.display();
    stone.display();
    iron.display();

}