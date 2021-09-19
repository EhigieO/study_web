let loginEmail = document.getElementById("emailOne")
let loginPassword = document.getElementById("passwordLogin")
let loginSubmit = document.getElementById("submitOne")

let regEmail = document.getElementById("email")
let regFirstName = document.getElementById("firstname")
let regLastName = document.getElementById("lastname")
let regPassword = document.getElementById("password")
let regConfirmPassword = document.getElementById("confirmPassword")
let regSubmit = document.getElementById("submitTwo")

let registration

regSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    if (regEmail.value === "" || regFirstName.value === "" || regPassword.value === "" ||
        regLastName.value === "" || regConfirmPassword.value === ""){
        alert("Fill in all required details")
    }
    if (regPassword.value !== regConfirmPassword.value){
        alert("Password mismatch")
    }
    const regDetails = {
        "email" : regEmail.value,
        "firstName": regFirstName.value,
        "lastName": regLastName.value,
        "password": regPassword.value,
        "confirmPassword": regConfirmPassword.value,
    }
    registration = JSON.stringify(regDetails)
    localStorage.setItem(registration.name, registration)


})

loginSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    if((loginPassword.value === JSON.parse(localStorage.getItem(registration.name)).password) && loginEmail.value ===
        JSON.parse(localStorage.getItem(registration.name)).email){
        console.log(JSON.parse(localStorage.getItem(registration.name)))
    }

})

