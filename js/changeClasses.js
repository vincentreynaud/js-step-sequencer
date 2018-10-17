//Classes

//Click Pads
const clickBehavior = (pad) => {
  pad.classList.contains("pad-pressed")
  ? pad.classList.remove("pad-pressed")
  : pad.classList.add("pad-pressed");
}

//ClearButton
const clearSelectedPads = () => {
  document.querySelectorAll(".pad-pressed").forEach(pad => {
    pad.classList.remove("pad-pressed");
  });
}

// PlayButtonAction
const stepPlayClasses = (step) => {
  if (step === 0) {
    addStepPlayClasses(step);
  }
  else if (step === 8) {
    deleteStepPlayClasses(step);    
  }
  else {
    deleteStepPlayClasses(step); 
    addStepPlayClasses(step);
   };
}

const addStepPlayClasses = (step) => {
  document.querySelector(`#step-${step+1}`).classList.add("step-play");   
}

const deleteStepPlayClasses = (step) => {
  document.querySelector(`#step-${step}`).classList.remove("step-play");
}
