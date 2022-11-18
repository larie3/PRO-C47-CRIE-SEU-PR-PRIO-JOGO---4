var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;


var form, player, game;
var player1,player2,players;
var paredes,parede1,parede2,parede3,parede4,parede5,parede7,parede8,parede9,parede10,parede11,parede12;
var chaves,chave1,chave2,chave3,chave4;
var cadeado;
function preload(){

}


function setup(){
  canvas = createCanvas(1200,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  drawSprite;
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
