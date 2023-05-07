import { listenControls } from "./control-listener.js";
import { animateTextOut, createTransitionDiv } from "./transition-div.js";

// Register
function register(){
  var name = document.getElementById("name-input").value;
  var fname = document.getElementById("first-name-input").value;
  var sexe = document.getElementById("sexe-select").value;
  var idstatus = document.getElementById("status-select").value;
  var email = document.getElementById("email-input").value;
  var idcountry = document.getElementById("selectedCountry").value;
  var dtn = document.getElementById("dtn").value;
  //var debutnum = document.getElementById("debutnum").value;
  var num = document.getElementById("numero").value;
 // var usernum = debutnum + num;
  var mdp = document.getElementById("password-input").value;
  var mdp1 = document.getElementById("password-confirm-input").value;

  if(mdp.length < 8){
    createSidePopUp("Merci de vous assurer que votre mot de passe contient au moins 8 caractères.", "error");
  } else if(mdp != mdp1){
      createSidePopUp("Merci de vous assurer que les mots de passe sont égaux.", "error");
  } else {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("log is ", this.responseText);
            if(this.responseText == 0){
              login();
              window.setTimeout(() => {
                createSidePopUp("Inscription réussie, veuillez vous connecter.", "good");
              }, 3000)
            } else {
              createSidePopUp("Il y a une erreur dans le remplissage des champs. Veuillez vérifier les informations que vous avez saisies et les corriger si nécessaire.", "error");
              // alert("Erreur dans le remplissage des champs");
                // alert(this.responseText);
            }       
        }
    };       
    xhr.open('POST', 'register_user');
    xhr.setRequestHeader("Content-Type", "application/json");
    var data = {name: name, fname: fname, status: idstatus, email: email, sexe: sexe, idCountry: idcountry, dtn: dtn, num: num, mdp: mdp }; // Define the data object
    xhr.send(JSON.stringify(data)); // Send the data as a JSON string
  }
}

function user_check(){
  var email = document.getElementById("email-input").value;
  var mdp = document.getElementById("password-input").value;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          if(this.responseText == 1){
            //alert("Error");
            createSidePopUp("Email ou mot de passe invalide.", "error");
          } else {
              var redirect = 'index';
              window.location.href = redirect;
          }       
      }
  };       
  var trait = 'checkuser';
  xhr.open('POST', trait);
  xhr.setRequestHeader("Content-Type", "application/json");
  var data = { email: email, mdp: mdp }; // Define the data object
  xhr.send(JSON.stringify(data)); // Send the data as a JSON string
}

function listenItems() {
  const items = document.querySelectorAll(".item");
  const controlContainers = document.querySelectorAll(".controls-container");
  const formBtnClicks = document.querySelectorAll(".form-btn-click");
  formBtnClicks.forEach((btnClick) => {
    btnClick.addEventListener("click", () => {
      let parent = btnClick.parentElement;
      let recentActiveIndex = 0;
      for (let index = 0; index < controlContainers.length; index++) {
        if (controlContainers[index].classList.contains("active")) {
          recentActiveIndex = index;
        }
      }

      items[recentActiveIndex].classList.remove("active");
      items[recentActiveIndex + 1].classList.add("active");
      parent.animate(
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
        parent.classList.remove("active");
        controlContainers[recentActiveIndex + 1].style.opacity = 0;
        controlContainers[recentActiveIndex + 1].classList.add("active");
        controlContainers[recentActiveIndex + 1].animate(
          [
            {
              opacity: 1,
            },
          ],
          {
            duration: 300,
            fill: "forwards",
          }
        );
      }, 300);
    });
  });
}

function listenBacks() {
  const items = document.querySelectorAll(".item");
  const controlContainers = document.querySelectorAll(".controls-container");
  const formBtnClicks = document.querySelectorAll(".back-btn");
  formBtnClicks.forEach((btnClick) => {
    btnClick.addEventListener("click", () => {
      let parent = btnClick.parentElement;
      let recentActiveIndex = 0;
      for (let index = 0; index < controlContainers.length; index++) {
        if (controlContainers[index].classList.contains("active")) {
          recentActiveIndex = index;
        }
      }
      console.log(parent);

      items[recentActiveIndex].classList.remove("active");
      items[recentActiveIndex - 1].classList.add("active");
      parent.animate(
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
        parent.classList.remove("active");
        controlContainers[recentActiveIndex - 1].style.opacity = 0;
        controlContainers[recentActiveIndex - 1].classList.add("active");
        controlContainers[recentActiveIndex - 1].animate(
          [
            {
              opacity: 1,
            },
          ],
          {
            duration: 300,
            fill: "forwards",
          }
        );
      }, 300);
    });
  });
}

let innerLogin = `
  <form action="" id="login-form" class="form">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="form-logo"
      viewBox="0 0 143.2 37.735"
    >
      <g transform="translate(-25.5 -4.425)">
        <g transform="translate(26.5 5.425)">
          <path
            d="M17.472,36.97h0a1,1,0,0,1-1-1L16.5,15.843,9.55,27.143A1,1,0,0,1,7.7,26.619v-5.49l-.062-4.571A2.825,2.825,0,0,0,7.155,15c-.736-1.092-1.439-1.679-2.035-1.7-.669-.023-1.365.685-1.831,1.282A3.759,3.759,0,0,0,2.5,16.9V35.97a1,1,0,1,1-2,0V16.9a5.767,5.767,0,0,1,1.213-3.541,4.355,4.355,0,0,1,3.477-2.05c1.3.045,2.484.889,3.623,2.579a4.817,4.817,0,0,1,.823,2.647L9.7,21.109s0,.009,0,.014v1.963l6.956-11.309a1,1,0,0,1,1.852.525l-.033,23.67A1,1,0,0,1,17.472,36.97Z"
            transform="translate(-1.5 -10.574)"
          />
          <path
            d="M56.383,45.679c-.71,0-4.62-.119-7.246-2.659a8.07,8.07,0,0,1-2.357-5.985c-.028-3.494.892-6.062,2.737-7.631a6.291,6.291,0,0,1,3.5-1.464h.013l.07,0c.025,0,.068-.005.121-.005h2.828c.248,0,3.323,0,5.077,1.916a4.8,4.8,0,0,1,1.145,3.915,4.912,4.912,0,0,1-1.268,2.911,5.38,5.38,0,0,1-2.223,1.393,8.7,8.7,0,0,1-3.139.416H52.5a1,1,0,0,1,0-2h3.177l.076,0a6.619,6.619,0,0,0,2.379-.311,2.912,2.912,0,0,0,2.153-2.622,2.851,2.851,0,0,0-.63-2.353c-1.169-1.275-3.554-1.268-3.578-1.267H53.246l-.053,0c-1.358.136-4.462,1.1-4.413,7.087a6.151,6.151,0,0,0,1.739,4.555c2.224,2.159,5.885,2.105,5.922,2.1a1,1,0,0,1,.05,2Z"
            transform="translate(-25.733 -19.282)"
          />
          <g transform="translate(41.906 9.965)">
            <path
              d="M98.5,46.389a1,1,0,0,1-1-1V35.881a4.6,4.6,0,0,0-1.445-3.641c-1.629-1.46-4.229-1.654-5.587-1.645V45.27a1,1,0,0,1-2,0V29.64a1,1,0,0,1,.891-.994c.207-.023,5.1-.523,8.03,2.1a6.573,6.573,0,0,1,2.11,5.13v9.508A1,1,0,0,1,98.5,46.389Z"
              transform="translate(-89.47 -29.595)"
            />
            <path
              d="M117.622,46.389a1,1,0,0,1-1-1V35.881a4.6,4.6,0,0,0-1.445-3.641c-1.629-1.46-4.229-1.654-5.587-1.645V45.27a1,1,0,1,1-2,0V29.64a1,1,0,0,1,.891-.994c.207-.023,5.1-.523,8.03,2.1a6.573,6.573,0,0,1,2.11,5.13v9.508A1,1,0,0,1,117.622,46.389Z"
              transform="translate(-99.482 -29.595)"
            />
          </g>
          <path
            d="M7.588-1A8.588,8.588,0,1,1-1,7.588,8.6,8.6,0,0,1,7.588-1Zm0,15.177A6.588,6.588,0,1,0,1,7.588,6.6,6.6,0,0,0,7.588,14.177Z"
            transform="translate(65.743 10.105)"
          />
          <path
            d="M183.453,46.75a1,1,0,0,1-1-1V32.093a4.24,4.24,0,0,1,.7-3.092,2.522,2.522,0,0,1,2-.87h10.38a1,1,0,0,1,.16.013,2.512,2.512,0,0,1,2.329,2.428,1,1,0,1,1-2,.1c-.011-.213-.022-.434-.58-.542H185.154c-.336,0-.435.116-.478.166a2.416,2.416,0,0,0-.235,1.571.95.95,0,0,1,.012.155V45.75A1,1,0,0,1,183.453,46.75Z"
            transform="translate(-96.756 -19.387)"
          />
          <path
            d="M0,17.4a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V16.4A1,1,0,0,1,0,17.4Z"
            transform="translate(106.195 9.962)"
          />
          <g transform="translate(110.992)">
            <path
              d="M244.5,33.529a1,1,0,0,1-1-1V9.5a1,1,0,0,1,2,0V31.072l6.739-2.6a1,1,0,0,1,.719,1.866l-8.1,3.119A1,1,0,0,1,244.5,33.529Z"
              transform="translate(-239.736 -5.689)"
            />
            <path
              d="M239.264,5.82A1,1,0,0,1,238.692,4l2.152-1.5H234.5a1,1,0,0,1,0-2h9.527a1,1,0,0,1,.572,1.82l-4.764,3.32A1,1,0,0,1,239.264,5.82Z"
              transform="translate(-234.5 -1.5)"
            />
          </g>
          <g transform="translate(126.985 16.088)">
            <path
              d="M273.8,43.22a1,1,0,0,1-.677-.264l-7.3-6.72a1,1,0,1,1,1.355-1.471l6.6,6.079,6.239-6.061a1,1,0,0,1,1.394,1.435l-6.918,6.72A1,1,0,0,1,273.8,43.22Z"
              transform="translate(-266.5 -35.5)"
            />
            <path
              d="M0,18.309H-.015A1,1,0,0,1-1,17.294L-.732-.015A1,1,0,0,1,.284-1,1,1,0,0,1,1.268.015L1,17.325A1,1,0,0,1,0,18.309Z"
              transform="translate(6.839 2.338)"
            />
          </g>
          <circle
            cx="0.877"
            cy="0.877"
            r="0.877"
            transform="translate(105.189 5.932)"
          />
          <path
            d="M.877-1A1.877,1.877,0,1,1-1,.877,1.879,1.879,0,0,1,.877-1Z"
            transform="translate(105.189 5.932)"
          />
        </g>
      </g>
    </svg>
    <h1 class="form-title">Ravis de vous retrouver</h1>
    <div class="controls-container active">
      <div class="control">
        <label for="email-input" class="label">Adresse e-mail </label>
        <input
          type="email"
          autocomplete="off"
          name=""
          id="email-input"
          class="input"
        />
      </div>
      <div class="control">
        <label for="password-input" class="label">Mot de passe </label>
        <input
          type="password"
          autocomplete="off"
          name=""
          id="password-input"
          class="input"
        />
      </div>
      <input type=submit value="Connexion" class="form-btn" />
      <p class="switch-form">Creer un compte</p>
    </div>
  </form>
`;
let innerSignup = `
  <form action="" id="signup-form" class="form">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="form-logo"
      viewBox="0 0 143.2 37.735"
    >
      <g transform="translate(-25.5 -4.425)">
        <g transform="translate(26.5 5.425)">
          <path
            d="M17.472,36.97h0a1,1,0,0,1-1-1L16.5,15.843,9.55,27.143A1,1,0,0,1,7.7,26.619v-5.49l-.062-4.571A2.825,2.825,0,0,0,7.155,15c-.736-1.092-1.439-1.679-2.035-1.7-.669-.023-1.365.685-1.831,1.282A3.759,3.759,0,0,0,2.5,16.9V35.97a1,1,0,1,1-2,0V16.9a5.767,5.767,0,0,1,1.213-3.541,4.355,4.355,0,0,1,3.477-2.05c1.3.045,2.484.889,3.623,2.579a4.817,4.817,0,0,1,.823,2.647L9.7,21.109s0,.009,0,.014v1.963l6.956-11.309a1,1,0,0,1,1.852.525l-.033,23.67A1,1,0,0,1,17.472,36.97Z"
            transform="translate(-1.5 -10.574)"
          />
          <path
            d="M56.383,45.679c-.71,0-4.62-.119-7.246-2.659a8.07,8.07,0,0,1-2.357-5.985c-.028-3.494.892-6.062,2.737-7.631a6.291,6.291,0,0,1,3.5-1.464h.013l.07,0c.025,0,.068-.005.121-.005h2.828c.248,0,3.323,0,5.077,1.916a4.8,4.8,0,0,1,1.145,3.915,4.912,4.912,0,0,1-1.268,2.911,5.38,5.38,0,0,1-2.223,1.393,8.7,8.7,0,0,1-3.139.416H52.5a1,1,0,0,1,0-2h3.177l.076,0a6.619,6.619,0,0,0,2.379-.311,2.912,2.912,0,0,0,2.153-2.622,2.851,2.851,0,0,0-.63-2.353c-1.169-1.275-3.554-1.268-3.578-1.267H53.246l-.053,0c-1.358.136-4.462,1.1-4.413,7.087a6.151,6.151,0,0,0,1.739,4.555c2.224,2.159,5.885,2.105,5.922,2.1a1,1,0,0,1,.05,2Z"
            transform="translate(-25.733 -19.282)"
          />
          <g transform="translate(41.906 9.965)">
            <path
              d="M98.5,46.389a1,1,0,0,1-1-1V35.881a4.6,4.6,0,0,0-1.445-3.641c-1.629-1.46-4.229-1.654-5.587-1.645V45.27a1,1,0,0,1-2,0V29.64a1,1,0,0,1,.891-.994c.207-.023,5.1-.523,8.03,2.1a6.573,6.573,0,0,1,2.11,5.13v9.508A1,1,0,0,1,98.5,46.389Z"
              transform="translate(-89.47 -29.595)"
            />
            <path
              d="M117.622,46.389a1,1,0,0,1-1-1V35.881a4.6,4.6,0,0,0-1.445-3.641c-1.629-1.46-4.229-1.654-5.587-1.645V45.27a1,1,0,1,1-2,0V29.64a1,1,0,0,1,.891-.994c.207-.023,5.1-.523,8.03,2.1a6.573,6.573,0,0,1,2.11,5.13v9.508A1,1,0,0,1,117.622,46.389Z"
              transform="translate(-99.482 -29.595)"
            />
          </g>
          <path
            d="M7.588-1A8.588,8.588,0,1,1-1,7.588,8.6,8.6,0,0,1,7.588-1Zm0,15.177A6.588,6.588,0,1,0,1,7.588,6.6,6.6,0,0,0,7.588,14.177Z"
            transform="translate(65.743 10.105)"
          />
          <path
            d="M183.453,46.75a1,1,0,0,1-1-1V32.093a4.24,4.24,0,0,1,.7-3.092,2.522,2.522,0,0,1,2-.87h10.38a1,1,0,0,1,.16.013,2.512,2.512,0,0,1,2.329,2.428,1,1,0,1,1-2,.1c-.011-.213-.022-.434-.58-.542H185.154c-.336,0-.435.116-.478.166a2.416,2.416,0,0,0-.235,1.571.95.95,0,0,1,.012.155V45.75A1,1,0,0,1,183.453,46.75Z"
            transform="translate(-96.756 -19.387)"
          />
          <path
            d="M0,17.4a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V16.4A1,1,0,0,1,0,17.4Z"
            transform="translate(106.195 9.962)"
          />
          <g transform="translate(110.992)">
            <path
              d="M244.5,33.529a1,1,0,0,1-1-1V9.5a1,1,0,0,1,2,0V31.072l6.739-2.6a1,1,0,0,1,.719,1.866l-8.1,3.119A1,1,0,0,1,244.5,33.529Z"
              transform="translate(-239.736 -5.689)"
            />
            <path
              d="M239.264,5.82A1,1,0,0,1,238.692,4l2.152-1.5H234.5a1,1,0,0,1,0-2h9.527a1,1,0,0,1,.572,1.82l-4.764,3.32A1,1,0,0,1,239.264,5.82Z"
              transform="translate(-234.5 -1.5)"
            />
          </g>
          <g transform="translate(126.985 16.088)">
            <path
              d="M273.8,43.22a1,1,0,0,1-.677-.264l-7.3-6.72a1,1,0,1,1,1.355-1.471l6.6,6.079,6.239-6.061a1,1,0,0,1,1.394,1.435l-6.918,6.72A1,1,0,0,1,273.8,43.22Z"
              transform="translate(-266.5 -35.5)"
            />
            <path
              d="M0,18.309H-.015A1,1,0,0,1-1,17.294L-.732-.015A1,1,0,0,1,.284-1,1,1,0,0,1,1.268.015L1,17.325A1,1,0,0,1,0,18.309Z"
              transform="translate(6.839 2.338)"
            />
          </g>
          <circle
            cx="0.877"
            cy="0.877"
            r="0.877"
            transform="translate(105.189 5.932)"
          />
          <path
            d="M.877-1A1.877,1.877,0,1,1-1,.877,1.879,1.879,0,0,1,.877-1Z"
            transform="translate(105.189 5.932)"
          />
        </g>
      </g>
    </svg>
    <h1 class="form-title">Bienvenue sur Memority</h1>
    <div class="list-sequence">
      <div target="first" class="item active">1</div>
      <div target="second" class="item">2</div>
      <div target="third" class="item">3</div>
    </div>
    <div class="controls-container active" name="first">
      <div class="control">
        <label for="name-input" class="label">Nom</label>
        <input
          type="text"
          autocomplete="off"
          name="name"
          id="name-input"
          class="input"
        />
      </div>
      <div class="control">
        <label for="first-name-input" class="label">Prenom </label>
        <input
          type="text"
          autocomplete="off"
          name="first-name"
          id="first-name-input"
          class="input"
        />
      </div>
      <div class="select-control">
        <span class="select-title">Sexe</span>
        <select class="select" name="idSexe" id="sexe-select">
          <option class="option" value="0">Femme</option>
          <option class="option" value="1">Homme</option>
        </select>
      </div>
      <div class="select-control">
        <span class="select-title"> Relation amoureuse </span>
        <select class="select" name="idstatus" id="status-select">
          <option class="option" value="1">Célibataire</option>
          <option class="option" value="2">En couple</option>
          <option class="option" value="3">Marié(e)</option>
        </select>
      </div>
      <button type="button" class="form-btn form-btn-click">Suivant</button>
    </div>
    <div class="controls-container" name="second">
      <div class="select-control">
        <span class="select-title">Date de naissance</span>
        <input type="date" id="dtn"  name="birth-date" class="select select-input" />
      </div>
      <div class="select-control">
        <span class="select-title">Pays d'origine</span>
        <select class="select" id="selectedCountry" name="idPays">
        </select>
      </div>
      <div class="control">
        <label for="telephone-input" class="label">Telephone </label>
        <input
          type="tel"
          autocomplete="off"
          name="telephone"
          id="numero"
          class="input"
        />
      </div>
      <button type="button" class="form-btn form-btn-click">Suivant</button>
      <div class="back-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.504 30.705">
          <path
            id="Icon_awesome-arrow-left"
            data-name="Icon awesome-arrow-left"
            d="M18.105,31.3l-1.561,1.561a1.681,1.681,0,0,1-2.384,0L.492,19.2a1.681,1.681,0,0,1,0-2.384L14.161,3.143a1.681,1.681,0,0,1,2.384,0L18.105,4.7a1.689,1.689,0,0,1-.028,2.412L9.6,15.188H29.813A1.683,1.683,0,0,1,31.5,16.875v2.25a1.683,1.683,0,0,1-1.687,1.688H9.6l8.473,8.072A1.677,1.677,0,0,1,18.105,31.3Z"
            transform="translate(0.004 -2.647)"
          />
        </svg>
      </div>
    </div>
    <div class="controls-container" name="third">
      <div class="control">
        <label for="email-input" class="label">Adresse e-mail </label>
        <input
          type="email"
          autocomplete="off"
          name="email"
          id="email-input"
          class="input"
        />
      </div>
      <div class="control">
        <label for="password-input" class="label">Mot de passe (au moins 8 caractères) </label>
        <input
          type="password"
          autocomplete="off"
          name="password"
          id="password-input"
          class="input"
        />
      </div>
      <div class="control">
        <label for="password-confirm-input" class="label"
          >Confirmer le mot de passe
        </label>
        <input
          type="password"
          autocomplete="off"
          name="password-confirm"
          id="password-confirm-input"
          class="input"
        />
      </div>
        <input type="submit" value="Inscription" class="form-btn" />
        <div class="back-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.504 30.705">
          <path
            id="Icon_awesome-arrow-left"
            data-name="Icon awesome-arrow-left"
            d="M18.105,31.3l-1.561,1.561a1.681,1.681,0,0,1-2.384,0L.492,19.2a1.681,1.681,0,0,1,0-2.384L14.161,3.143a1.681,1.681,0,0,1,2.384,0L18.105,4.7a1.689,1.689,0,0,1-.028,2.412L9.6,15.188H29.813A1.683,1.683,0,0,1,31.5,16.875v2.25a1.683,1.683,0,0,1-1.687,1.688H9.6l8.473,8.072A1.677,1.677,0,0,1,18.105,31.3Z"
            transform="translate(0.004 -2.647)"
          />
        </svg>
        </div>
    </div>
    <p class="switch-form">J'ai deja un compte</p>
  </form>
`;

function listenSwitcher(foo) {
  let element = document.querySelector(".switch-form");
  element.addEventListener("click", foo);
}

let formContainer = document.querySelector(".form-cotnainer");
function login() {
  createTransitionDiv("Connexion");
  window.setTimeout(() => {
    let transitionDiv = document.querySelector(".transition-div");
    transitionDiv.classList.add("on-left-origin");
    formContainer.innerHTML = innerLogin;
    listenSwitcher(() => signup());
    listenControls();
    animateTextOut();
    document.querySelector(".form").addEventListener("submit", (e) => {
      e.preventDefault();
      user_check();
    })
    window.setTimeout(() => {
      transitionDiv.animate(
        [
          {
            transform: "scaleX(0)",
          },
        ],
        {
          duration: 500,
          fill: "forwards",
          easing: "ease",
        }
      );
      window.setTimeout(() => {
        document.body.removeChild(transitionDiv);
      }, 500);
    }, 1200);
  }, 1900);
}

function signup() {
  createTransitionDiv("Inscription");
  window.setTimeout(() => {
    let transitionDiv = document.querySelector(".transition-div");
    transitionDiv.classList.add("on-left-origin");
    formContainer.innerHTML = innerSignup;
    listenSwitcher(() => login());
    listenControls();
    listenItems();
    listenBacks();
    animateTextOut();
    var pays = null;

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          pays = JSON.parse(this.responseText);
          console.log(pays);
          const select = document.getElementById("selectedCountry");
          for (let i = 0; i < pays.length; i++) {
            const option = document.createElement("option");
            option.value = pays[i].id_pays;
            option.textContent = pays[i].nom_pays;
            select.appendChild(option);
          }

        }
    };       
    xhr.open('GET', 'tous_pays');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

    document.querySelector(".form").addEventListener("submit", (e) => {
      e.preventDefault();
      register();
    })
    window.setTimeout(() => {
      transitionDiv.animate(
        [
          {
            transform: "scaleX(0)",
          },
        ],
        {
          duration: 500,
          fill: "forwards",
          easing: "ease",
        }
      );
      window.setTimeout(() => {
        document.body.removeChild(transitionDiv);
      }, 500);
    }, 1200);
  }, 1900);
}

login();
