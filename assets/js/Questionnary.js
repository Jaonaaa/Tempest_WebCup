function createParagrapheDescription(data) {
  let title = document.querySelector(".title_center");
  let container = document.getElementById("container_questionnary");
  //

  title.style.opacity = 0;
  setTimeout(() => {
    title.innerHTML = `L'interprétation de votre rêve `;
    setTimeout(() => {
      title.removeAttribute("style");
    }, 100);
  }, 200);
  //
  // container.appendChild(createResponseRow("Freud ", "...."));
  container.appendChild(
    createResponseRow("Votre Horoscope du jour", userHoroscope)
  );

  container.appendChild(
    createResponseRow("Description rêve", data.description_reve)
  );
  container.appendChild(createConseilRow(data.conseil));

  let buttonBuy = document.createElement("a");
  container.appendChild(buttonBuy);
  buttonBuy.setAttribute("id", "button_buy_it");
  buttonBuy.setAttribute("href", base_url + "/UtilisateurCI/pay");
  buttonBuy.innerHTML = `

  Pour soutenir notre travail abonnez vous
  `;
}

async function createQuestionnaryBlock(oldContent) {
  let root = document.getElementById("root");
  let container = document.createElement("div");
  container.setAttribute("id", "container_questionnary");
  container.innerHTML = `
 <div class="title_center">Raconte nous ton rêve</div>
 <div class="questionnary_list">
    ${
      createRowQuestion(1, "Dans quelle catégorie tu décrirais ton rêve ?")
        .outerHTML
    }
 
    <div class="boxes_response">
    </div>
    </div>
 `;
  root.appendChild(container);
  await swictherPage(oldContent, container);
  await getAllCategoryDream().then((response) => {
    let boxesContainer = document.querySelector(".boxes_response");
    setTimeout(() => {
      response.forEach((boxData) => {
        boxesContainer.appendChild(createBoxResponseOne(boxData));
      });
      setUpBoxesResponse();
    }, 200);
  });
}

function createResponseRow(title, text) {
  let row = document.createElement("div");
  row.classList.add("response_row");
  row.classList.add("showUp");
  row.innerHTML = `
    <div class="title_interprete">
     ${title}
        </div>
        <div class="circle_index"></div>
        ${text}
`;
  return row;
}

function createConseilRow(text) {
  let conseil = document.createElement("div");
  conseil.classList.add("conseil_row");
  conseil.classList.add("showUp");
  conseil.innerHTML = `
            <div class="title_conseil">Petit conseil pour vous </div>
            <div class="text_conseil">
                ${text}
            </div>`;
  return conseil;
}

function createRowQuestion(num, text) {
  let row = document.createElement("div");
  row.classList.add("row_question");
  row.innerHTML = `
    <div class="num_question">
         ${num}
    </div>
    <div class="text_question">
        ${text}
    </div>
     `;
  return row;
}

function createBoxResponseOne(data) {
  let box_response_one = document.createElement("div");
  box_response_one.classList.add("box_response_one");
  box_response_one.setAttribute("id_reve", data.id_reve_categorie);
  box_response_one.innerHTML = `
  <img src="" alt="">
  <div class="text_response">${data.nom_reve_categorie}</div>
  `;
  return box_response_one;
}

function createBoxResponseDetails(data) {
  let box_response_one = document.createElement("div");
  box_response_one.classList.add("box_response_one");
  box_response_one.setAttribute("id_reve_categorie", data.id_reve_categorie);
  box_response_one.setAttribute("id_reve_detail", data.id_reve_detail);
  box_response_one.innerHTML = `
    <img src="" alt="">
    <div class="text_response">${data.nom_reve_detail}</div>
    `;
  return box_response_one;
}

async function getAllCategoryDream() {
  let xhr = getTheBoy();
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var retour = JSON.parse(xhr.responseText);
          if (retour.status == "error") {
            createSidePopUp(retour.detail, "error");
            reject(retour.detail);
          } else {
            resolve(retour);
          }
        } else {
          console.log(xhr.status);
        }
      }
    };
    xhr.addEventListener("error", function (event) {
      alert("Oups! Quelque chose s'est mal passé  .");
    });
    xhr.open("POST", `${base_url}index.php/ReveCI/get_reve_categorie`, true);
    xhr.send(null);
  });
}

async function getDetailsCategory(idCategory) {
  let xhr = getTheBoy();
  let formData = new FormData();
  formData.append("id_categorie", idCategory);
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var retour = JSON.parse(xhr.responseText);
          if (retour.status == "error") {
            createSidePopUp(retour.detail, "error");
            reject(retour.detail);
          } else {
            resolve(retour);
          }
        } else {
          console.log(xhr.status);
        }
      }
    };
    xhr.addEventListener("error", function (event) {
      alert("Oups! Quelque chose s'est mal passé  .");
    });
    xhr.open("POST", `${base_url}index.php/ReveCI/get_reve_detail`, true);
    xhr.send(formData);
  });
}

function getDescription(id_reve) {
  let xhr = getTheBoy();
  let formData = new FormData();
  formData.append("id_reve_detail", id_reve);
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var retour = JSON.parse(xhr.responseText);
          console.log(retour);
          if (retour.status == "error") {
            createSidePopUp(retour.detail, "error");
            reject(retour.detail);
          } else {
            resolve(retour);
          }
        } else {
          console.log(xhr.status);
        }
      }
    };
    xhr.addEventListener("error", function (event) {
      alert("Oups! Quelque chose s'est mal passé  .");
    });
    xhr.open("POST", `${base_url}index.php/ReveCI/get_reve`, true);
    xhr.send(formData);
  });
}

function setUpBoxesResponse() {
  let questionnaryList = document.querySelector(".questionnary_list");
  let boxes = document.querySelectorAll(".box_response_one");
  boxes.forEach((box) => {
    let idCategory = box.getAttribute("id_reve");
    box.addEventListener("click", async () => {
      await removeInnerQuestionnary();

      getDetailsCategory(idCategory).then(async (category) => {
        setTimeout(() => {
          removeLoader();
        }, 200);
        setTimeout(() => {
          questionnaryList.appendChild(
            createRowQuestion(2, "Donne un peu plus de détails s'il-te-plait ")
          );
          arrangeBoxesResponseDetails(category);
        }, 500);
      });
    });
  });
}

function setUpBoxesResponseTwo() {
  let questionnaryList = document.querySelector(".questionnary_list");
  let boxes = document.querySelectorAll(".box_response_one");
  boxes.forEach((box) => {
    let id = box.getAttribute("id_reve_detail");
    box.addEventListener("click", async () => {
      await removeInnerQuestionnary();
      getDescription(id).then(async (description) => {
        await removeLoader();
        setTimeout(() => {
          createParagrapheDescription(description);
        }, 220);
      });
    });
  });
}
/**
 *
 * @param {Array} data
 */
function arrangeBoxesResponseDetails(data) {
  let questionnaryList = document.querySelector(".questionnary_list");
  let boxes = document.createElement("div");
  boxes.classList.add("boxes_response");

  data.forEach((box) => {
    let responseBox = createBoxResponseDetails(box);
    boxes.appendChild(responseBox);
  });
  questionnaryList.appendChild(boxes);
  setUpBoxesResponseTwo();
}
async function removeLoader() {
  let loader = document.querySelector("spining-dots");
  loader.style.opacity = 0;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      loader.parentElement.removeChild(loader);
      resolve(0);
    }, 210);
  });
}

async function removeInnerQuestionnary() {
  let questionnaryList = document.querySelector(".questionnary_list");
  questionnaryList.style.opacity = 0;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      questionnaryList.innerHTML = "";
      questionnaryList.removeAttribute("style");
      questionnaryList.innerHTML = `
        <spining-dots class="loading" circle="2" borderWidth="3" width="130">
        </spining-dots > 
        `;
      resolve(0);
    }, 300);
  });
}
