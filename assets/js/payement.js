createPopUpPayement();
function createPopUpPayement() {
  let content = document.createElement("div");
  content.classList.add("container_payement_pop_up");
  content.innerHTML = `
  <div class="title_pop_up">Payement</div>
  <div class="sec_title_pop_up">
      Méthode de payement
  </div>
  <div class="sec_subtitle_pop_up">
      Choisisser une méthode de payement
  </div>
  <div class="row_cards">
      <div class="card_pay" id-card="1">
          <img src="${base_url}assets/image/amazon.png" alt="">
      </div>
      <div class="card_pay"id-card="2">
      <img src="${base_url}assets/image/paypal.png" alt="">
      </div>
      <div class="card_pay" id-card="3">
          <img src="${base_url}assets/image/mastercard.png" alt="">
      </div>
      <div class="card_pay" id-card="4">
      <img src="${base_url}assets/image/visa.png" alt="">

      </div>
  </div>
  <div class="sec_title_pop_up">
      Information sur votre carte de crédit
  </div>
  <div class="sec_subtitle_pop_up">
      Veuiller entrer le numéro de votre carte
  </div>
  <div class="input_p">
      <div class="placeholder">Numéro de la carte</div>
      <div class="field">
          <input type="number" placeholder="1234-5678-9012-3456" class="input_field email_input">
      </div>
  </div>

    
  <div class="button_buy validBtn">
      Acheter <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16.015" height="11.526" viewBox="0 0 16.015 11.526">
              <path id="Icon_awesome-opencart" data-name="Icon awesome-opencart"
                  d="M10.593,12.192a1.144,1.144,0,1,1-1.141-1.146,1.137,1.137,0,0,1,1.141,1.146ZM4.239,11.046a1.144,1.144,0,1,0,1.146,1.146A1.143,1.143,0,0,0,4.239,11.046Zm7.3-6.757C3.976,4.289,2.049,3.969,0,1.807.861,3.1,1.334,5.533,9.336,5.416c8.341-.125,3.253,2.155,1.772,4.727C15.78,5.971,19.1,4.289,11.539,4.289Z"
                  transform="translate(0 -1.807)" fill="#f0f0f0" />
          </svg>
      </div>
  </div>
  `;
  //   <div class="placeholder">Totale à payer</div>
  //   <div class="row_convertisseur">
  //       <div class="price_abonne">
  //           <div class="unite"> $ </div>
  //           <div class="price_value"> 50</div>
  //       </div>
  //       <div class="arrow">
  //           <svg xmlns="http://www.w3.org/2000/svg" width="70.266" height="11.82" viewBox="0 0 70.266 11.82">
  //               <g id="Groupe_55" data-name="Groupe 55" transform="translate(-229.1 -703)">
  //                   <path id="Tracé_182" data-name="Tracé 182" d="M0,0H67.569"
  //                       transform="translate(230.1 709.332)" fill="none" stroke="#00c79f" stroke-linecap="round"
  //                       stroke-width="2" />
  //                   <path id="Polygone_1" data-name="Polygone 1" d="M5.91,0l5.91,13.509H0Z"
  //                       transform="translate(299.366 703) rotate(90)" fill="#2dcaaa" />
  //               </g>
  //           </svg>
  //       </div>
  //   //   <div class="price_abonne">
  //   //           <div class="price_value"> 50</div>
  //   //           <div class="unite"> Ar </div>
  //   //       </div>
  //   //       <div class="text">
  //   //           en
  //   //       </div>
  //   //       <select name="monnai" id="monnai">
  //   //           <option value="1">Bitcoin</option>
  //   //       </select>
  //   //   </div>
  let button_buy = document.querySelector(".button_buy");
  button_buy.addEventListener("click", () => {
    createMiddlePopUp(content);
    setTimeout(() => {
      setUpForm();
    }, 200);
  });
}

function setUpForm() {
  let cards = document.querySelectorAll(".card_pay");
  console.log(cards);
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log(card);
      if (card.classList.contains("on_card")) {
        card.classList.remove("on_card");
      } else {
        card.classList.add("on_card");
      }
    });
  });
  let btn = document.querySelector(".validBtn");
  btn.addEventListener("click", () => {
    createSidePopUp("Achat Effectué", "good");
    removeHider();
    setTimeout(() => {
      window.location = base_url + "reveCI";
    }, 2000);
  });
}
