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
  if(step === 1){deleteStepPlayClasses(9)}
  else {deleteStepPlayClasses(step)};
}

const deleteStepPlayClasses = (step) => {
  document.querySelector(`#step-${step-1}`).classList.remove("step-play");
}

const stepBarloop = (time) => { if(stop) {return};
  stepPlayClasses(1);
  setTimeout(function(){stepPlayClasses(2)},time/8);
  setTimeout(function(){stepPlayClasses(3)},time * 2/8);
  setTimeout(function(){stepPlayClasses(4)},time * 3/8);
  setTimeout(function(){stepPlayClasses(5)},time * 4/8);
  setTimeout(function(){stepPlayClasses(6)},time * 5/8);
  setTimeout(function(){stepPlayClasses(7)},time * 6/8);
  setTimeout(function(){stepPlayClasses(8)},time * 7/8);
  setTimeout(function(){stepBarloop(tinput)} , time);
}

document.querySelector("#play").addEventListener("click" , function(){stepBarloop(4000)});