var car , wall , speed , weigth;
function setup() {
  createCanvas(1600,400);
  car= createSprite(100,200,100,50);
  wall=createSprite(1500,200,50,height/2);
  wall.shapeColor= color(80,80,80);
  speed =random(55,90);
  weight=random(400,1500);
 }

function draw() {
  background("blue");
   
  car.velocityX=speed;
  if(wall.x-car.x< (wall.width+car.width)/2 )
  {
    car.velocityX=0;
   
    var deform= 0.5*weight*speed*speed/22509;
    
    if(deform<100)
    {
     car.shapeColor=color(0,255,0);
    }
    
    if(deform>100 && deform<180)
    {
     car.shapeColor=color(230,230,0);
    }

    if(deform>180)
    {
      car.shapeColor=color(255,0,0);
    }
  } 
  drawSprites();
}