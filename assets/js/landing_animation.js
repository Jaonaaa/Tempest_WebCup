import { animeLanding, landScrollTo } from "./components/landing.js";

let textToShow = "My Dream";
let animationsCubeCount = 0;
placeStructure();
let container_animation = document.getElementById("root_animation");
createTextGhost(textToShow, container_animation);

// function to lauch
createMultipleCube(40);
animateMiddleExplosion();
createRandomEplosion();

///

function removeRootanimation() {
  let rootAnimation = anime({
    targets: container_animation,
    keyframes: [
      {
        scale: 2.5,
        width: window.innerHeight,
        height: window.innerHeight,
        borderRadius: ["0", "50%"],
        duration: 100,
      },
      {
        delay: 10,
        scale: ["0"],
        duration: 450,
        opacity: 1,
        easing: "easeOutExpo",
      },
    ],
  });
  rootAnimation.finished.then((e) => {
    container_animation.parentNode.removeChild(container_animation);
    document.querySelector(".header").innerHTML += `
      <h1 class="header-title">
        <span class="text-wrapper">
            <span class="letters">Fermez vos yeux et prédisons votre avenir</span>
        </span>
      </h1>
  `;
    window.setTimeout(() => {
      let btn = document.createElement("div");
      btn.classList.add("header-bottom");
      let icon = document.createElement("span");
      icon.classList.add("fas");
      icon.classList.add("fa-angle-down");

      btn.appendChild(icon);

      document.querySelector(".header").appendChild(btn);
      landScrollTo();
    }, 1800);
    animeLanding();
  });
}

function placeStructure() {
  let root_animation = document.createElement("div");
  root_animation.setAttribute("id", "root_animation");
  root_animation.innerHTML = `
  <div class="triangle"></div>
  <div class="presented">
        <span class="lettersP">Présenté par Tempest Corporation !!!</span>
      </div>
`;
  document.body.appendChild(root_animation);
}

function createMultipleCube(number) {
  for (let index = 0; index < number; index++) {
    container_animation.innerHTML += ` <div class="cube"></div>  `;
  }
}

function createRandomEplosion() {
  let cubes = document.querySelectorAll(".cube");
  let division = divideAnime(cubes.length, 4);
  let indexAlternance = 0;
  cubes.forEach((cube, index) => {
    let direction = getDirectionAlternace(indexAlternance);
    //
    if (index % division == 0) {
      indexAlternance++;
    }
    let Xtranslate = anime.random(140, window.innerWidth / 2 - 150);
    let Ytranslate = anime.random(100, window.innerHeight / 2 - 80);
    let scaleMax = 1.5;
    if (window.innerWidth < 768) {
      scaleMax = 1.4;
    }
    if (window.innerWidth < 568) {
      scaleMax = 1.3;
    }
    if (window.innerWidth < 468) {
      scaleMax = 1;
    }
    let scale = anime.random(0.5, scaleMax);
    animationCubes(
      cube,
      direction.x * Xtranslate,
      direction.y * Ytranslate,
      scale,
      cubes.length
    );
  });
}

function divideAnime(number, divisor) {
  let numberDiv = Math.floor(number / divisor);
  return numberDiv;
}

function animationCubes(target, X = 0, Y = 0, scale = 1, length) {
  let textSize = getTextWidth(
    `
        <h1 class ="ml11">
          <span class="text-wrapper">
            <span class="letters" >${textToShow}</span>
          </span>
        </h1> `,
    container_animation
  );

  let slideToLeft = -textSize / 2.1;
  let size = "3.5rem";
  let plusSlideRight = 60;
  let normaleSize = "2.5rem";
  ///
  if (window.innerWidth < 768) {
    slideToLeft = slideToLeft - 100;
    size = "3rem";
    normaleSize = "2.3rem";
    plusSlideRight = 80;
  }
  if (window.innerWidth < 568) {
    slideToLeft = slideToLeft + textSize / 4.3;
    size = "2.75rem";
    normaleSize = "2.1rem";
    plusSlideRight = 24;
  }
  if (window.innerWidth < 468) {
    slideToLeft = slideToLeft + textSize / 3.3;
    size = "2.3rem";
    normaleSize = "1.9rem";
    plusSlideRight = 10;
  }
  console.log(textSize + "  " + plusSlideRight);
  ///
  anime({
    targets: target,
    keyframes: [
      {
        translateX: X,
        translateY: Y,
        background: getComputedStyle(document.documentElement).getPropertyValue(
          "--bubble-color"
        ),
        duration: 2000,
        width: "4rem",
        height: "4rem",
        scale: [0, scale],
        rotate: function () {
          return anime.random(-360, 360);
        },
        delay: 1000,
      },
      {
        translateX: 0,
        translateY: 0,
        width: size,
        height: size,
        duration: 2000,
        scale: [scale],
        delay: 500,
      },
      {
        translateX: slideToLeft,
        translateY: 0,
        width: normaleSize,
        height: normaleSize,
        duration: 600,
        scale: [scale],
        easing: "easeOutCubic",
        delay: 100,
        rotate: 0,
      },
      {
        width: "0.1rem",
        height: "6.5rem",
        translateY: "-50%",
        duration: 500,
        scale: 1.7,
        borderRadius: ["50%", "0%"],
        easing: "easeOutCubic",
        delay: 100,
        rotate: 0,
      },
      {
        translateX: textSize / 2 + plusSlideRight,
        height: "6.5rem",
        translateY: "-50%",
        duration: 1600,
        easing: "easeOutExpo",
        endDelay: 600,
      },
      {
        translateX: slideToLeft,
        height: "6.5rem",
        translateY: "-50%",
        duration: 2000,
        delay: 1000,
        easing: "easeOutExpo",
      },
      {
        easing: "easeOutExpo",
        duration: 1000,
        opacity: 0,
        height: "0rem",
      },
    ],
    direction: "alternate",
    loop: false,
  });

  animationsCubeCount++;
  if (animationsCubeCount == length) {
    setTimeout(() => {
      createTextLading(container_animation, textToShow);
    }, 7000);
    setTimeout(() => {
      animatePresentationTag();
    }, 7600);
    setTimeout(() => {
      removeRootanimation();
    }, 12700);
  }
}

function animateMiddleExplosion() {
  let tri = document.querySelector(".triangle");
  anime({
    targets: tri,
    keyframes: [
      {
        scale: [1, 2],
        width: "0.4rem",
        height: "0.4rem",
        duration: 300,
        easing: "easeOutElastic(1, .8)",
      },
      {
        easing: "easeOutElastic(1, .8)",
        scale: 4,
        width: "1rem",
        height: "1rem",
        duration: 100,
        delay: 750,
        borderRadius: ["50%"],
      },
      {
        width: "10rem",
        height: "10rem",
        scale: 0,
        duration: 1000,
        delay: 1500,
        opacity: 0,
        easing: "linear",
      },
    ],
  });
}

function animatePresentationTag() {
  var textWrapper3 = document.querySelector(".presented .lettersP");
  textWrapper3.innerHTML = textWrapper3.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  document.querySelector(".presented").style.opacity = "1";
  anime.timeline({ loop: 1, direction: "alternate" }).add({
    targets: ".presented .letter",
    scale: [0, 1],
    duration: 800,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  });
  // .add({
  //   targets: ".presented",
  //   opacity: 0,
  //   duration: 800,
  //   easing: "easeOutExpo",
  //   delay: 700,
  // });
}

function createTextLading(container, text) {
  let content = document.createElement("h1");
  content.classList.add("ml11");
  content.innerHTML = `
    <span class="text-wrapper">
      <span class="line line1"></span>
      <span class="letters" >${text}</span>
    </span>
  `;
  container.appendChild(content);
  showText();
}

function getHeightSize() {
  let target = document.querySelector("#targetText");
  let height = target.getBoundingClientRect().height;
  return height;
}

function getTextWidth() {
  let target = document.querySelector("#targetText");

  if (target != undefined) {
    target.style.position = "absolute";
    return target.getBoundingClientRect().width;
  }
  return 0;
}

async function createTextGhost(text, container) {
  let element = document.createElement("div");
  element.setAttribute("id", "targetText");
  element.innerHTML = text;
  element.style.position = "absolute";
  element.style.opacity = 0;
  element.innerHTML = element.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  container.appendChild(element);
  return new Promise((resolve, reject) => {
    resolve(element.getBoundingClientRect().width);
  });
}

function showText() {
  ///
  let text = document.querySelector(".ml11");

  let minusTranslateY = 0;
  if (window.innerWidth < 768) {
    minusTranslateY = 10;
  }
  if (window.innerWidth < 568) {
    minusTranslateY = 15;
  }
  if (window.innerWidth < 468) {
    minusTranslateY = 20;
  }

  text.style.transform = `translateY(-${Math.floor(
    getHeightSize() / 3.4 - minusTranslateY
  )}px)`;

  var textWrapper = document.querySelector(".ml11 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ direction: "alternate", loop: 2 }).add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    endDelay: 690,
    delay: (el, i) => 34 * (i + 1),
  });
}

function randomDuo() {
  let result = anime.random(1, 10);
  if (result < 5) {
    return -1;
  } else {
    return 1;
  }
}

function getDirectionAlternace(index) {
  let result = null;
  // top right
  if (index == 0)
    result = {
      x: +1,
      y: +1,
    };
  // bottom right
  else if (index == 1)
    result = {
      x: +1,
      y: -1,
    };
  // bottom left
  else if (index == 2)
    result = {
      x: -1,
      y: -1,
    };
  // top left
  else if (index == 4)
    result = {
      x: -1,
      y: +1,
    };
  else
    result = {
      x: randomDuo(),
      y: randomDuo(),
    };
  return result;
}
