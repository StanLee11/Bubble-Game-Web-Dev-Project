
var timer= 60;
var score= 0;
var newHit= 0;


document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickedNum = (Number(details.target.textContent));
    if(clickedNum === newHit){
        increaseScore();
        bubbleMake();
        getNewHit();

    }
 
 });
 
function getNewHit(){
    newHit= Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent= newHit;
    
}

function  bubbleMake(){
    var clutter = ""
  for(var i =1; i<=150; i++){
    var rn = Math.floor(Math.random() *10);
   clutter += `<div id="bubble">${rn}</div>` ;
  }              

  document.querySelector("#pbtm").innerHTML = clutter ;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
          timer--;  
          document.querySelector(".timerval").textContent = timer;
        } else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
        }
    }
   , 1000)
}

function increaseScore(){
    score += 10;
    document.querySelector(".scoreval").textContent = score;
}


runTimer();
bubbleMake();
getNewHit();