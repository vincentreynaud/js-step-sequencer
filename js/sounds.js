


let gmin = [195.995 , 220 , 233.082 , 261.626 , 293.665 , 311.127 , 349.228 , 391.995]

let steps = [
[false , false , false , false , false , false , false , false],
[false , false , false , false , false , false , false , false],
[false , false , false , false , false , false , false , false],
[false , false , false , false , false , false , false , false],
[false , false , false , false , false , false , false , false],
[false , false , false , false , false , false , false , false],
[false , false , false , false , false , false , false , false],
[false , false , false , false , false , false , false , false]
]

let sounds = new AudioContext();
let tinput = 4000;
let stop;

function play(step , time){
let chord = [];

  for (let i = 0 ; i < 8 ; i++) {

    if(step[i]){
      chord[i] = sounds.createOscillator();
      chord[i].frequency.value = gmin[i];

      chord[i].type = "sine";
      chord[i].connect(sounds.destination);
      chord[i].start(sounds.currentTime);
      chord[i].stop(sounds.currentTime + time);
    }
  }

}

function soundToggle(line , row){
  if(steps[row][line]){
    steps[row][line] = false;
  }else{
    steps[row][line] = true;
  }

}

    function soundloop(time){
      if(stop){
        stop = false;
        return
      }
      play(steps[0] , time/8000);
      setTimeout(function(){play(steps[1] , time/8000)},time/8);
      setTimeout(function(){play(steps[2] , time/8000)},time * 2/8);
      setTimeout(function(){play(steps[3] , time/8000)},time * 3/8);
      setTimeout(function(){play(steps[4] , time/8000)},time * 4/8);
      setTimeout(function(){play(steps[5] , time/8000)},time * 5/8);
      setTimeout(function(){play(steps[6] , time/8000)},time * 6/8);
      setTimeout(function(){play(steps[7] , time/8000)},time * 7/8);
      setTimeout(function(){soundloop(tinput)} , time);

    }


document.querySelector("#play").addEventListener("click" , function(){soundloop(4000)});
document.querySelector("#stop").addEventListener("click" , function(){stop = true});
document.querySelector("#trash").addEventListener("click" , function(){
  for(let i = 0 ; i < 8 ; i++){
    for(let j = 0 ; j < 8 ; j++){
      steps[i][j] = false;
    }
  }
})

for (let i = 0 ; i < 8 ; i++){
  for (let j = 0 ; j < 8 ; j++){
    document.querySelector("#step-" + (i + 1)).children[j].addEventListener( "click" , function() { soundToggle(j , i) } );
  }
}

document.querySelector("#myRange").addEventListener("input", function(e){tinput = 480000/(e.target.value)})