// require('bootstrap');

import StepSequencer from "./modules/StepSequencer";

//SliderBMP
const slider = document.getElementById("time-signature");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = () => {
  output.innerHTML = this.value;
};

const sequencer = new StepSequencer();