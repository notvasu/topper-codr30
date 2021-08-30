function preload() {
  //load game assets
 
}

var score=0
function setup() {
  createCanvas(600,600);
 player=createSprite(80,550,20,20)
 wormGroup=new Group()
}

function draw() {
  background("black");  
  noFill();
  stroke("white");
ellipse(100,350,60,40)
player.x=mouseX
player.y=mouseY
if(player.x<150 && player.x>90 && player.y<380 && player.y>320 ){
  text("NO CHEATING!!",200,200);
  player.x=30;
  player.y=30;
}
generateWorms()
for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }
  drawSprites()
  textSize(30)
  text("wormsDestroyed"+score,300,50)
}
function generateWorms(){
if(frameCount % 30 ===0){
  var worms=createSprite(100,350,40,5);
  worms.shapeColor="green";
  worms.velocityX=random(-4,4);
  worms.velocityY=random(-4,4);
  wormGroup.add(worms)
}
}