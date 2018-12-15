class Pads {
  togglePadPressed(pad) {
    pad.classList.contains("pad-pressed")
    ? pad.classList.remove("pad-pressed")
    : pad.classList.add("pad-pressed");
  }
  
  clearSelectedPads() {
    document.querySelectorAll(".pad-pressed").forEach(pad => {
      pad.classList.remove("pad-pressed");
    });
  }
  
  toogleStepPlayClass(step) {
    if (step === 0) {
      addStepPlayClass(step);
    }
    else if (step === 8) {
      removeStepPlayClass(step);    
    }
    else {
      removeStepPlayClass(step); 
      addStepPlayClasses(step);
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