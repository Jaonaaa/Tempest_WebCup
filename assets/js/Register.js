 // Register a new user

 /// THE PAGE CAME FROM UTILISATEURCI/REGISTER


 function register(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var idcountry = document.getElementById("selectedCountry").value;
    var dtn = document.getElementById("dtn").value;
    var debutnum = document.getElementById("debutnum").value;
    var num = document.getElementById("numero").value;
    var usernum = debutnum + num;
    var mdp = document.getElementById("mdp1").value;

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("log is ", this.responseText);
            if(this.responseText == 1){
                error.innerHTML = "Register failed again e";
            } else {
                window.location.href = 'index';
            }       
        }
    };       
    xhr.open('POST', 'register_user');
    xhr.setRequestHeader("Content-Type", "application/json");
    var data = {name: name, email: email, idCountry: idcountry, dtn: dtn, tempnum: num, num: usernum, mdp: mdp }; // Define the data object
    xhr.send(JSON.stringify(data)); // Send the data as a JSON string
}

// Add debut numero
function addInformation(){
    const toCharge = document.getElementById('debutnum');
    const countryID = document.getElementById('selectedCountry');       
    console.log(countryID.value);
            
    // Send AJAX request to Java servlet
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //  console.log("log is ", this.responseText);
            if(this.responseText == 1){
                alert("Error");
            } else {
                toCharge.value = this.responseText;
            }          
        }
    };       
  //  var trait = 'give_debut_number/' + countryID.value;
    xhr.open('GET', 'give_debut_number/' + countryID.value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

// MDP length
function checklenght() {
    var inp = document.getElementById("mdp1").value;
    var ans = document.getElementById("checklenght");
    var btn = document.getElementById("btn");
    var len = strLength(inp);

    if(len < 8){
        ans.style.color = "red";
        ans.innerText = "Short";
    } else {
        ans.style.color = 'green';
        ans.innerText = "Protected";           
    }
};

// MDP1 and MDP2 equality
function check_same(){
    var ans = document.getElementById("checklenght");
    var check = document.getElementById("checksame");
    ans.innerText = '';
    var inp1 = document.getElementById("mdp1").value;
    var inp2 = document.getElementById("mdp2").value;
    if(inp1 != inp2){
        check.style.color = 'red';
        check.innerText = 'Not the same';
    } else {
        check.innerHTML = '';
        btn.style.display = 'block';
    }
}

// Length of a string
function strLength(s) {
    var length = 0;
    while (s[length] !== undefined)
    length++;
    return length;
}