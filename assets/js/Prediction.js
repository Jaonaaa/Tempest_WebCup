let cardsContainer = [
  {
    path: `${base_url}assets/image/services/b4.jpg`,
    title: "Voyager à travers vos rêves",
    subtitle: "",
  },
  {
    path: `${base_url}assets/image/services/b3.jpg`,
    title: "Explorons divers horizons",
    subtitle: "",
  },
  {
    path: `${base_url}assets/image/services/b1.jpg`,
    title: "Les rêves sont nos avenirs",
    subtitle: "",
  },
];
createImageSlide(cardsContainer);
setUpPrédiction();
setUpBtnSwitchImage();

function createImageSlide(cards) {
  let container = document.querySelector(".container_image");
  cards.forEach((card) => {
    container.innerHTML += `
    <div class="box_image"
    style="background-image:url(${card.path});">
    <div class="text_image">
        <div class="title_image">${card.title}</div>
        <div class="subtitle_image"> ${card.subtitle} </div>
    </div>
 </div>
    `;
  });
}

function setUpPrédiction() {
  let btnPlay = document.getElementById("btn_questionnary");
  btnPlay.addEventListener("click", () => {
    switchToPredictionQuestionnary();
  });
}
function switchToPredictionQuestionnary() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  let predictionContainer = document.querySelector(".prediction_container");
  createQuestionnaryBlock(predictionContainer);
}

function setUpBtnSwitchImage() {
  let index = 0;
  let btn_next = document.getElementById("after");
  let btn_before = document.getElementById("before");
  ///
  let cards = document.querySelectorAll(".box_image");
  ///
  btn_before.style.display = "none";
  btn_before.addEventListener("click", () => {
    if (index != 0) {
      index += 1;
      moveRight();
      btn_next.style.display = "flex";
    }
    if (index == 0) {
      btn_before.style.display = "none";
    }
  });
  btn_next.addEventListener("click", () => {
    if (index > -cards.length + 1) {
      index -= 1;
      moveLeft();
      btn_before.style.display = "flex";
    }
    if (index <= -cards.length + 1) {
      btn_next.style.display = "none";
    }
  });
}

function moveLeft() {
  let boxes = document.querySelectorAll(".box_image");
  boxes.forEach((box) => {
    let tranformValue = box.getAttribute("transXValue");
    if (tranformValue == null) {
      tranformValue = -100;
    } else {
      tranformValue = +tranformValue - 100;
    }
    box.setAttribute("transXValue", tranformValue);
    box.style.transform = `translateX(${tranformValue}%)`;
  });
}

function moveRight() {
  let boxes = document.querySelectorAll(".box_image");
  boxes.forEach((box) => {
    let tranformValue = box.getAttribute("transXValue");

    if (tranformValue == null) {
      tranformValue = 100;
    } else {
      tranformValue = +tranformValue + 100;
    }
    box.setAttribute("transXValue", tranformValue);

    box.style.transform = `translateX(${tranformValue}%)`;
  });
}
