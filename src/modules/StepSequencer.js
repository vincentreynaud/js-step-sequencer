"use strict";
import Pads from "./Pads";

class StepSequencer {
  constructor() {
    this.audioContext = new AudioContext();
    this.timeInput = 4000;
    this.scale = this.getScale();
    this.masterVolume = this.audioContext.createGain();
    this.steps = this.createStepTemplate();
    this.pads = new Pads();
    this.stop = null;

    this.elements = {}
    this.init()
  }

  init() {
    this.getElements()
    this.masterVolume.gain.value = 0.25;
    this.masterVolume.connect(this.audioContext.destination);

    this.registerEvents()
  }

  registerEvents() {
    this.elements.controls.addEventListener("click", (e) => {
      // replace by switch statement
      if (e.target.closest("#play")) {
        this.playSequence(this.timeInput);
      } else if (e.target.closest("#stop")) {
        // create toogleStopBtn method
        this.stop = true;
      } else if (e.target.closest("#delete")) {
        this.clearSelectedPads();
        this.addFalseValues(this.steps);
      } else if (e.target.closest("#time-signature")) {
        // write setTimeInput method
        this.timeInput = 480000 / e.target.value;
      }
    });

    this.elements.pads.forEach(pad => {
      pad.addEventListener("click", () => {
        this.pads.togglePadPressed(pad);
      });
    });

    // EventListener add sound changing arrayValues
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        document
          .querySelector("#step-" + (i + 1))
          .children[j].addEventListener("click", () => {
            this.padToggle(i, j);
          });
      }
    }
  }

  // rename
  padToggle(row, line) {
    if (this.steps[row][line]) {
      this.steps[row][line] = false;
    } else {
      this.steps[row][line] = true;
    }
  };

  playSequence(time) {
    if (this.stop) {
      this.stop = false;
      return;
    }

    for (let i = 0; i < 8; ++i) {
      let j = i;
      setTimeout(() => {
        this.pads.toggleStepPlayClass(j);
        this.play(this.steps[j], time / 8000, this.elements.instrument.value);
      }, (time * j) / 8);
    }

    setTimeout(() => {
      this.pads.toggleStepPlayClass(8);
    }, time);

    setTimeout(() => {
      this.playSequence(this.timeInput);
    }, time);
  };

  play(step, time, tone) {
    let chord = [];
    for (let i = 0; i < 8; i++) {
      if (step[i]) {
        chord[i] = this.audioContext.createOscillator();
        chord[i].frequency.value = this.scale[i];

        chord[i].type = tone;
        chord[i].connect(this.masterVolume);
        chord[i].start(this.audioContext.currentTime);
        chord[i].stop(this.audioContext.currentTime + time);
      }
    }
  };

  getElements() {
    Object.assign(this.elements, {
      controls: document.querySelector("#controls"),
      play: document.querySelector("#play"),
      stop: document.querySelector("#stop"),
      delete: document.querySelector("#delete"),
      bpm: document.querySelector("#time-signature"),
      instrument: document.querySelector("#instrument"),
      pads: document.querySelectorAll(".pad")
    })
  }

  createStepTemplate() {
    let steps = new Array(8);
    for (let i = 0; i < 8; i++) {
      steps[i] = new Array(8);
    }

    return this.addFalseValues(steps);
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

  getScale() {
    const gmin = [ 195.995, 220, 233.082, 261.626, 293.665, 311.127, 349.228, 391.995 ];
    return gmin
  }
}

export default StepSequencer;
