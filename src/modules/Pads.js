class Pads {
  togglePadPressedClass(pad) {
    pad.classList.contains("pad-pressed")
    ? pad.classList.remove("pad-pressed")
    : pad.classList.add("pad-pressed");
  }
  
  clearSelectedPads() {
    document.querySelectorAll(".pad-pressed").forEach(pad => {
      pad.classList.remove("pad-pressed");
    });
  }
  
  toggleStepPlayClass(step) {
    if (step === 0) {
      this.addStepPlayClass(step);
    }
    else if (step === 8) {
      this.removeStepPlayClass(step);    
    }
    else {
      this.removeStepPlayClass(step); 
      this.addStepPlayClass(step);
     };
  }
  
  addStepPlayClass(step) {
    document.querySelector(`#step-${step+1}`).classList.add("step-play");   
  }
  
  removeStepPlayClass(step) {
    document.querySelector(`#step-${step}`).classList.remove("step-play");
  }
}

export default Pads;