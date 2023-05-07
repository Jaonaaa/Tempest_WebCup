function getPsy() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://tempest.madagascar.webcup.hodi.host/PsyCI/");
  xhr.send(null);

  return new Promise((resolve) => {
    xhr.addEventListener("load", () => {
      resolve(JSON.parse(xhr.responseText));
    });
  });
}

let base_url = `https://tempest.madagascar.webcup.hodi.host/`;
let index = 0;
async function createPub() {
  let tableau = await getPsy();
  console.log(tableau);
  let len = tableau.length;

  let reponse = document.createElement("div");
  reponse.classList.add("pub");
  console.log(tableau[index % len]);

  reponse.innerHTML = `
    <span class="close-icon fas fa-plus"></span>
    <div class="left-pub">
        <img src="${base_url}assets/image/avatar.png" class="left-image">
    </div>
    <div class="right-pub">
        <h1 class="person-name">${tableau[index % len].nom_psy}</h1>
        <p class="person-mail">${tableau[index % len].email_psy}</p>
        <p class="pub-text">"${tableau[index % len].descri_cauchemar}"</p>
        <p class="rate">${tableau[index % len].avis}</p>
        <button class="consult">Consulter</button>
    </div>
  `;

  document.body.appendChild(reponse);

  index++;
  let close = document.querySelector(".close-icon");
  close.addEventListener("click", () => {
    close.parentElement.animate(
      [
        {
          opacity: 0,
        },
      ],
      {
        duration: 300,
        fill: "forwards",
      }
    );

    window.setTimeout(() => {
      document.body.removeChild(close.parentElement);
    }, 400);
  });

  window.setTimeout(() => {
    document.querySelectorAll(".pub").forEach((pub) => {
      document.body.removeChild("pub");
    });
    createPub();
  }, 45000);
}

window.setTimeout(() => {
  createPub();
}, 45000);

document.querySelector(".hamburger-icon").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.remove("hidden");
});

document.getElementById("close-sidebar").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.add("hidden");
});

document.querySelectorAll(".link-accueil").forEach((linkAccueil) => {
  linkAccueil.addEventListener("click", () => {
    window.location = base_url;
  });
});

document.querySelectorAll(".link-prediction").forEach((linkAccueil) => {
  linkAccueil.addEventListener("click", () => {
    window.location = base_url + "ReveCI";
  });
});

document.querySelectorAll(".link-deco").forEach((linkAccueil) => {
  linkAccueil.addEventListener("click", () => {
    window.location = base_url + "UtilisateurCI/deconnect";
  });
});
