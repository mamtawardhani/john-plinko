const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var en, wo;

function setup(){
    createCanvas(480,800);
    en = Engine.create();
    wo = en.world;

    gr = new Ground(240, 795, 480, 10);
}

function draw(){
    background(0);
    Engine.update(en);
  //  fill("blue")
    gr.display()

}