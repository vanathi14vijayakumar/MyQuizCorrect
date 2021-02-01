var canvas;
var gameStage = 0,db
var playerCounter =0
var allPlayers,player,game,game1,form

function setup(){
  canvas = createCanvas(850,400);
  db = firebase.database();
  game = new Quiz
 
  game.getState()
  game.start()

}


function draw(){
  background("pink");
  

  if(playerCounter ==4){
    game.update(1)
  }
  
  if(gameStage ==1){
    clear ()
    game.play()
  }
  
}
