function createHider() {
  let hiderExistant = document.getElementById("hider");
  if (hiderExistant != undefined) {
    return 0;
  }
  let hider = document.createElement("div");
  hider.setAttribute("id", "hider");
  setUpHider(hider);
  document.body.appendChild(hider);
}
var styleHider = new CSSStyleSheet();
styleHider.replaceSync(`
  #hider {
    background-color: #0000003b;
    z-index: 6;
    transition: all 0.2s ease-in-out;
    width: 100%;
    position: fixed;
    top: 0;
  }
  `);

function setUpHider(hider) {
  let heightMax = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  hider.style.height = heightMax + "px";
  resizeHider(hider);
  hider.addEventListener("click", () => {
    hider.style.opacity = 0;
    removeMiddlePopUp();
    setTimeout(() => {
      document.body.removeChild(hider);
    }, 200);
  });
}

function removeHider() {
  let hider = document.getElementById("hider");
  if (hider != undefined) {
    hider.style.opacity = 0;
    removeMiddlePopUp();
    setTimeout(() => {
      document.body.removeChild(hider);
    }, 200);
  }
}

function resizeHider(hider) {
  window.addEventListener("resize", () => {
    let heightMax = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    hider.style.height = heightMax + "px";
  });
  window.addEventListener("scroll", () => {
    let heightMax = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    hider.style.height = heightMax + "px";
  });
}
