var bg,bgImg
var bottomGround
var balloon,balloonImg

function preload(){

bgImg=loadImage("./assests/bg.png");
balloonImg=loadImage("./assests/punchman.png");







}
function setup(){
bg=createSprite(160,480,1,1);
bg.addImage(bgImg)
bg.scale=1.3





}
function draw(){
background("black");
if(keyDown("space")){
    balloon.velocityY=-6
}

drawSprites();






}