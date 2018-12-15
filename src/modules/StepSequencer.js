"use strict";

class StepSequencer {
  constructor() {
    this.audioContext = new AudioContext();
    this.steps = createStepTemplate();
    this.timeInput = 4000;
    this.stop = null;
    this.masterVolume = audioContext.createGain();

    this.elements = {}
    this.init()
  }

  init() {
    this.getElements()
    this.masterVolume.gain.value = 0.25;
    this.masterVolume.connect(audioContext.destination);

    this.registerEvents()
  }

  registerEvents() {
    this.elements.controls.addEventListener("click", (e) => {
      if (e.target.closest("#play")) {
        soundLoop(4000);
      } else if (e.target.closest("#stop")) {
        stop = true;
      } else if (e.target.closest("#delete")) {
        clearSelectedPads();
        addFalseValues(this.steps);
      } else if (e.target.closest("#time-signature")) {
        this.timeInput = 480000 / e.target.value;
      }

    })

    this.elements.pads.forEach(pad => {
      pad.addEventListener("click", () => {
        clickBehavior(pad);
      });
    });

    //EventListener add sound changing arrayValues
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        document
          .querySelector("#step-" + (i + 1))
          .children[j].addEventListener("click", () => {
            padToggle(i, j);
          });
      }
    }
  }

  play(step, time, tone) {
    let chord = [];
    for (let i = 0; i < 8; i++) {
      if (step[i]) {
        chord[i] = audioContext.createOscillator();
        chord[i].frequency.value = gmin[i];

        chord[i].type = tone;
        chord[i].connect(masterVolume);
        chord[i].start(audioContext.currentTime);
        chord[i].stop(audioContext.currentTime + time);
      }
    }
  };

  //add Sound to clicked Pads
  padToggle(row, line) {
    if (steps[row][line]) {
      steps[row][line] = false;
    } else {
      steps[row][line] = true;
    }
  };

  //Play ActionButton
  soundLoop(time) {
    if (stop) {
      stop = false;
      return;
    }

    for (let i = 0; i < 8; ++i) {
      let j = i;
      setTimeout(() => {
        stepPlayClasses(j);
        play(steps[j], time / 8000, this.elements.instrument.value);
      }, (time * j) / 8);
    }

    setTimeout(() => {
      stepPlayClasses(8);
    }, time);
    setTimeout(() => {
      soundLoop(this.timeInput);
    }, time);
  };

  getElements() {
    Object.assign(this.elements, {
      controls: document.querySelector("#controls"),
      play: document.querySelector("#play"),
      stop: document.querySelector("#stop"),
      delete: document.querySelector("#delete"),
      bpm: document.querySelector("#time-signature"),
      instrument = document.querySelector("#instruments"),
      pads: document.querySelectorAll(".pad")
    })
  }

  createStepTemplate() {
    let steps = new Array(8);
    for (let i = 0; i < 8; i++) {
      steps[i] = new Array(8);
    }

    return addFalseValues(steps);
  }

  // add boolean value to the steps array
  addFalseValues(steps) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        steps[i][j] = false;
      }
    }

    return steps;
  }
}



//Audio API
const gmin = [
  195.995,
  220,
  233.082,
  261.626,
  293.665,
  311.127,
  349.228,
  391.995
];



export default StepSequencer;
