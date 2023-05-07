export function animeLanding() {
  var textWrapper = document.querySelector(".header-title .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='character'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".text-wrapper .character",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i,
  });
}

export function landScrollTo() {
  let btn = document.querySelector(".header-bottom");
  let scroll = window.innerHeight;
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: scroll,
      behavior: "smooth",
    });
  });
}
