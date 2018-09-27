const everyPad = document.querySelectorAll(".pad");
everyPad.forEach(pad => {
  pad.addEventListener("click", () => {
    pad.classList.contains("pad-pressed")
      ? pad.classList.remove("pad-pressed")
      : pad.classList.add("pad-pressed");
  });
});
