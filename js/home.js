let liChoice = document.querySelectorAll('.player-choice li');


let lenChoice = liChoice.length;
let cptChoice = 0;
let curChoice = null;
for (cptChoice =0; cptChoice < lenChoice; cptChoice ++){
    curChoice = liChoice[cptChoice];
    curChoice.addEventListener('click',updatePLayer);
}

function updatePLayer(){

    let target = 'playerOne';
    if(this.parentNode.className.indexOf('player1') == -1 ){
        target ='playerTwo';
    }
    
    document.getElementById(target).value = this.className; 
}


let mapChoice = document.querySelectorAll('.map-choice li');
let lenmapChoice = mapChoice.length;
let cptMap = 0;
let curMap = null;

for(cptMap = 0; cptMap<lenmapChoice; cptMap++){
    
    curMap = mapChoice[cptMap];
    curMap.addEventListener("click", updateMap);
}


function updateMap(){

    let mapTarget = 'map';
    console.log(this.className);
    document.getElementById(mapTarget).value = this.className;
    console.log(document.getElementById(mapTarget).value)

}
    