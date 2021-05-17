var bgImg,bg
var cat, mouse


function preload() {
   bgImg = loadImage("images/garden.png")
   catImg = loadAnimation("images/cat1.png")
   catImg2 = loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png")
   mouseImg = loadAnimation("images/mouse1.png")
   mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png","images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);

    bg = createSprite(500,400,10,10)
    bg.addImage(bgImg)

    cat = createSprite(100,200,10,10)
    cat.addAnimation(catImg)
    cat.scale = 0.15
    
    mouse = createSprite(350,600,10,10)
    mouse.addAnimation(mouseImg)
    mouse.scale = 0.15

}

function draw() {

    background(255);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.velocityX = 0
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning")
        mouse.addAnimation("happy",mouseImg2)
        mouse.addAnimation("happy")
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW)
  cat.velocityX = -3
  mouse.addAnimation("mouseTeasing", mouseImg2)
  mouse.changeAnimation("mouseTeasing")
  mouse.frameDelay = 25
  


}
