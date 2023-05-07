animeInput();
function animeInput() {
  let inputs = document.querySelectorAll("input");
  let textAreas = document.querySelectorAll("textarea");
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      let text = input.value.trim();
      input.parentElement.classList.add("border_field");
    });
    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("border_field");
    });
  });
  textAreas.forEach((textarea) => {
    textarea.addEventListener("focus", () => {
      let text = textarea.value.trim();
      textarea.parentElement.classList.add("border_field");
    });
    textarea.addEventListener("blur", () => {
      textarea.parentElement.classList.remove("border_field");
    });
  });
}
