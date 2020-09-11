const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var object_prop = {
        isStatic:true
    }
    object = Bodies.rectangle(200,100,20,20,object_prop);
    World.add(world,object);
    console.log(object);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,20,20);
}