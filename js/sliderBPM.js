//SliderBMP
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = () => {
  output.innerHTML = this.value;
};
