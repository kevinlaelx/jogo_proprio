var espaçoImg, espaço;

var asteroideImg, asteroide, asteroidesGroup;

var naveImg, nave;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score;


function preload(){
espaçoImg = loadImage("espaço.png");

asteroideImg = loadImage("asteroide.png");

naveImg = loadImage("nave.png")

}

function setup() {
createCanvas(600,600);  
espaço = createSprite(300,300);
espaço.addImage("espaço.png", espaçoImg);
espaço.scale = 7;
nave = createSprite(300,400,20,20);
nave.addImage("nave.png", naveImg);
nave.scale = 0.2;

nave.debug=true
nave.setCollider("circle", 0, 0, 30);



asteroidesGroup = new Group();
espaço.velocityY = 2;
}


function draw() {
background(180);
//cirar pontuaçao
text("Pontuação: "+ score, 200,20);
stroke("yellow")
textSize(20)

if(espaço.y > 600 ){
    espaço.y = 0;
  }

if (gameState === PLAY) {
//comando para mexer a nave com o mouse
nave.x = World.mouseX;
//comando para aumentar pontuação quanto mais correr
score = score + Math.round(frameCount/60);

//se o asteroide toca a nave o gameState vai para END
if (asteroidesGroup.isTouching(nave)) {
gameState = END

nave.velocityX=0;

}


}

if(gameState === END){
 

 
 //parar grupo de asteroides
 asteroidesGroup.setVelocityXEach(0);

 //mensagem de game over
 text("voçê perdeu", 150,200)
}







drawSprites();
createAsteroide()
}


function createAsteroide() {
    if (frameCount % 200 === 0) {
    var asteroide = createSprite(Math.round(random(600,150 ),40, 10, 10));
    asteroide.addImage(asteroideImg);
    asteroide.scale=0.4;
    asteroide.velocityY = 3;
    asteroide.lifetime = 150;
   
 }
}
