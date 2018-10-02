//Create Default Array Values
let steps = new Array(8);
for(let i = 0 ; i < 8 ; i++){
  steps[i] = new Array(8);
}
addFalseValues();

//Audio API
let gmin = [195.995, 220, 233.082, 261.626, 293.665, 311.127, 349.228, 391.995];

let sounds = new AudioContext(), tinput = 4000, stop;

let instrument = "sine";

function play(step, time, tone) {
  let chord = [];
  for (let i = 0; i < 8; i++) {

    if (step[i]) {
      chord[i] = sounds.createOscillator();
      chord[i].frequency.value = gmin[i];

      chord[i].type = tone;
      chord[i].connect(sounds.destination);
      chord[i].start(sounds.currentTime);
      chord[i].stop(sounds.currentTime + time);
    };
  }
}

//add Sound to clicked Pads
function soundToggle(line, row) {
  if (steps[row][line]) {
    steps[row][line] = false;
  } 
  else {
    steps[row][line] = true;
  };
}

//Play ActionButton
function soundloop(time) {
  if (stop) {
    stop = false;
    return;
  };

  for (i = 0; i < 8; ++i) {
    let j = i;
    setTimeout(function () { stepPlayClasses(j); play(steps[j], time / 8000, instrument) }, time * j / 8);
  }

  setTimeout(function () { stepPlayClasses(8) }, time);
  setTimeout(function () { soundloop(tinput) }, time);
}

//add False Value to the Array
function addFalseValues () {
  for(let i = 0 ; i < 8 ; i++){
    for(let j = 0 ; j < 8 ; j++){
    steps[i][j] = false;
    }
  }
}

//EventListeners
document.querySelector("#play").addEventListener("click", function () { soundloop(4000) });
document.querySelector("#stop").addEventListener("click", function () { stop = true });
document.querySelector("#trash").addEventListener("click", function () { clearSelectedPads(); addFalseValues() });
document.querySelector("#myRange").addEventListener("input", function (e) { tinput = 480000 / (e.target.value) });
document.querySelectorAll(".pad").forEach( pad => { pad.addEventListener("click", () =>{ clickBehavior(pad) }); });

//EventListener add sound changing arrayValues
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    document.querySelector("#step-" + (i + 1)).children[j].addEventListener("click", function () { soundToggle(j, i) });
  }
}

//EventListener select instruments changing the tone
var selectInstrument = document.getElementById("instruments");
  selectInstrument.addEventListener("change", function() {
    if (selectInstrument.value === "Synth"){
      instrument="sine";
    }
    else if (selectInstrument.value === "Orchestra"){
      instrument="sawtooth";
    };
  });
