let gmin = [195.995, 220, 233.082, 261.626, 293.665, 311.127, 349.228, 391.995];

let steps = new Array(8);
for(let i = 0 ; i < 8 ; i++){
  steps[i] = new Array(8);
}
addFalseValues();

let sounds = new AudioContext(), tinput = 4000, stop;

function play(step, time) {
  let chord = [];
  for (let i = 0; i < 8; i++) {

    if (step[i]) {
      chord[i] = sounds.createOscillator();
      chord[i].frequency.value = gmin[i];

      chord[i].type = "sine";
      chord[i].connect(sounds.destination);
      chord[i].start(sounds.currentTime);
      chord[i].stop(sounds.currentTime + time);
    };
  }
}

function soundToggle(line, row) {
  if (steps[row][line]) {
    steps[row][line] = false;
  } 
  else {
    steps[row][line] = true;
  };
}

function soundloop(time) {
  if (stop) {
    stop = false;
    return;
  };

  for (i = 0; i < 8; ++i) {
    let j = i;
    setTimeout(function () { stepPlayClasses(j); play(steps[j], time / 8000) }, time * j / 8);
  }

  setTimeout(function () { stepPlayClasses(8) }, time);
  setTimeout(function () { soundloop(tinput) }, time);
}

function addFalseValues () {
  for(let i = 0 ; i < 8 ; i++){
    for(let j = 0 ; j < 8 ; j++){
    steps[i][j] = false;
    }
  }
}

document.querySelector("#play").addEventListener("click", function () { soundloop(4000) });
document.querySelector("#stop").addEventListener("click", function () { stop = true });
document.querySelector("#trash").addEventListener("click" , function(){ clearSelectedPads(); addFalseValues() });
document.querySelector("#myRange").addEventListener("input", function (e) { tinput = 480000 / (e.target.value) });

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    document.querySelector("#step-" + (i + 1)).children[j].addEventListener("click", function () { soundToggle(j, i) });
  }
}

