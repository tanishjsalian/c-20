var firstrect, secondrect
function setup() {
  createCanvas(800,400);
  firstrect=createSprite(400, 200, 50, 50);
  secondrect=createSprite(400,50,50,50)
  firstrect.shapeColor="white"
  secondrect.shapeColor="red"
}

function draw() {
  background("black")
  secondrect.x=mouseX  
  secondrect.y=mouseY  
  if(firstrect.x-secondrect.x<=firstrect.width/2+secondrect.width/2&&
    secondrect.x-firstrect.x<=firstrect.width/2+secondrect.width/2&&
    firstrect.y-secondrect.y<=firstrect.height/2+secondrect.height/2&&
    secondrect.y-firstrect.y<=firstrect.height/2+secondrect.height/2){
    firstrect.shapeColor="red"
  }
  else{
    firstrect.shapeColor="white"
  }
  drawSprites();
}