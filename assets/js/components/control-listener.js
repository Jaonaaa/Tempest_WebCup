export const listenControls = () => {
  let controls = document.querySelectorAll(".control");
  controls.forEach((control) => {
    let input = control.querySelector("input");
    let label = control.querySelector("label");

    input.addEventListener("focus", () => {
      label.classList.add("on-top");
    });
    input.addEventListener("blur", () => {
      if (!input.value) {
        label.classList.remove("on-top");
      }
    });
  });
};
