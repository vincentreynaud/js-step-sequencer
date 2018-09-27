const everyPad = document.querySelectorAll(".pad");
everyPad.forEach(pad => {
  pad.addEventListener("click", () => {
    pad.classList.contains("pad-pressed")
      ? pad.classList.remove("pad-pressed")
      : pad.classList.add("pad-pressed");
  });
});

function clearSelectedPads() {
  document.querySelectorAll(".pad-pressed").forEach(pad => {
    pad.classList.remove("pad-pressed");
  });
}