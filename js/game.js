get = $_GET();

let map = get.map;


let player1Name = getObjectValue(get,'playerOneName','Jackie');
let player2Name = getObjectValue(get,'playerTwoName','Michel');
let player1Class = getObjectValue(get,'playerOne','naruto');
let player2Class = getObjectValue(get,'playerTwo','sasuke');
let mapChoiced = getObjectValue(get,'map','forest');

// mapChoice(map);


let player2 = new Player(player1Name,'PlayerTwo',player1Class,2);
let player1 = new Player(player2Name,'PlayerOne',player2Class,2);



let winner = null;
let loser = null;
let playAgain = document.getElementById('Play-again');
document.addEventListener('keyup',play);
playAgain.addEventListener('click', refreshGame);
document.addEventListener('keypress', keyPress);

let background = new BackgroundMap(mapChoiced,'Scene');

// function mapChoice(mapChoiced){
//     let scene = document.getElementById('Scene');
//     scene.classList.add(mapChoiced);
// }

// let div = document.getElementById('Scene');
// div.classList.add(map);
        

function play(e){
        // winner = null;
        // loser = null;
        let codeValid = false;

    if (e.code == "KeyA"){
        codeValid = true;
        player2.dom.classList.add('playing');
        if(winner){
            return;
        }
        
        winner = player2;
        loser = player1;
    }
    else if (e.code == "Numpad6"){
        codeValid = true;
        player1.dom.classList.add('playing');
        if(winner){
            return;
        }
        winner = player1;
        loser = player2;
    }
    if(!codeValid){
        return;
    }
   winner.dom.classList.add('winner');
    
    loser.life.damage();
    if(loser.life.isDead()){
        loser.dom.classList.add('loser');
        playAgain.display = "block";
        playAgain.classList ='Play-again-show';
        // Test pour essayer d'arreter l'annimation
        loser.classList.add='stop-animation';
        winner.classList.add ='stop-abulation';

    }else{
        setTimeout(refresh,500);
        loser.dom.classList.add('damage');
    }
  
    
}





function refresh(){

    player1.dom.classList.remove('winner');
    player1.dom.classList.remove('loser');
    player1.dom.classList.remove('playing');
    player1.dom.classList.remove('damage');
    

    player2.dom.classList.remove('winner');
    player2.dom.classList.remove('loser');
    player2.dom.classList.remove('playing');
    player2.dom.classList.remove('damage');
    
    // playAgain.style.display ='none';



    playAgain.classList.remove('Play-again-show');

    winner = null;
    loser = null;


}
function refreshGame(){
    refresh();
    player2.life.initLife();
    player1.life.initLife();
}

function keyPress(e){
    if(e.code =="Space"){
        refreshGame();
    }
}