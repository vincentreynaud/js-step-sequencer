//SliderBMP
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = () => {
  output.innerHTML = this.value;
};
