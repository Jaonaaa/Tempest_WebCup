function getTheBoy() {
  let xhr;
  try {
    xhr = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e2) {
      try {
        xhr = new XMLHttpRequest();
      } catch (e3) {
        xhr = false;
      }
    }
  }
  return xhr;
}

/**
 *
 * @param {HTMLElement} oldContent
 * @param {HTMLElement} newContent
 */
async function swictherPage(oldContent, newContent) {
  let root = document.getElementById("root");
  oldContent.style.opacity = 0;
  oldContent.style.transform = "translateY(-100%)";

  newContent.style.transform = "translateX(100%)";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      root.removeChild(oldContent);
      root.appendChild(newContent);
      setTimeout(() => {
        newContent.removeAttribute("style");
        resolve(1);
      }, 200);
    }, 210);
  });
}
