const everyPad = document.querySelectorAll(".pad");
everyPad.forEach(pad => {
  pad.addEventListener("click", () => {
    pad.classList.contains("pad-pressed")
      ? pad.classList.remove("pad-pressed")
      : pad.classList.add("pad-pressed");
  });
});

const clearSelectedPads = () => {
  document.querySelectorAll(".pad-pressed").forEach(pad => {
    pad.classList.remove("pad-pressed");
  });
}

const stepPlayClasses = (step) => {
  document.querySelector(`#step-${step}`).classList.add("step-play");   
  if (step === 1){deleteStepPlayClasses(9)}
  else {deleteStepPlayClasses(step)};
}

const deleteStepPlayClasses = (step) => {
  document.querySelector(`#step-${step-1}`).classList.remove("step-play");
}