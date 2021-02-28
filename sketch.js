var car,wall;
var speed,wieght;


function setup() {
  createCanvas(800,400);

  speed=random(55,90);

 wieght =random(400,1500);
 car= createSprite(0, 200, 50, 50);
 car.shapeColor="red";
 car.velocityX=speed;

 wall =createSprite(800,200,60,height/2);
 wall.shapeColor="pink";

}

function draw() {
  background("black");  

  if(wall.x-car.x <(car.width+wall.width)/2)
  {
    car.velocityX=0;

    var deformation =0.5*speed*wieght*speed/22509;

    if(deformation>180)
{
    car.shapeColor=color(255,0,0);
}
if(deformation< 180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}
if(deformation< 100)
{
  car.shapeColor=color(0,255,0);
}
  }

  drawSprites();
}