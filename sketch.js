var dog,happydog,database,food=1,foodStock;
var dogimg,happydogimg;
function preload()
{
  dogimg=loadImage("Dog.png");
  happydogimg=loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,200,10,10);
  dog.addImage(dogimg);
  dog.scale=0.3;

  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readstock);

  // happydog=createSprite(200,200,20,20);
  // happydog.addImage(happydogimg);
  
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  textSize(25);
  fill(0);
    text("food remaining "+food,160,400);
  if(keyDown(UP_ARROW)){
    writestock(food);
    food-=1;
    
}
if(food===10){
  dog.addImage(happydogimg);

}
}


function readstock(data){
  food=data.val();
}
function writestock(x){
  database.ref('/').update({
    food:x

  })
  
}




