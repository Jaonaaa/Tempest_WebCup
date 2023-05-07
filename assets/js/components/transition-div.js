const transformIntoSpan = () => {
  var textWrapper = document.querySelector(".ml9 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
};

const animateTextIn = () => {
  anime.timeline({ loop: false }).add({
    targets: ".transition-div .ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 5000,
    delay: (el, i) => 45 * (i + 1),
  });
};

export const animateTextOut = () => {
  anime.timeline({ loop: false }).add({
    targets: ".transition-div .ml9 .letter",
    scale: [1, 0],
    duration: 1500,
    elasticity: 5000,
    delay: (el, i) => 45 * (i + 1),
  });
};

export const createTransitionDiv = (text) => {
  let response = document.createElement("div");
  response.classList.add("transition-div");

  document.body.appendChild(response);

  window.setTimeout(() => {
    response.innerHTML = `
      <h1 class="ml9">
        <span class="text-wrapper">
          <span class="letters">${text}</span>
        </span>
      </h1>
    `;
    transformIntoSpan();
    animateTextIn();
  }, 700);
};
