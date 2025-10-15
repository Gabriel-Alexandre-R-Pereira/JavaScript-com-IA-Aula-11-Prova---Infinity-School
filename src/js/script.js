const registrationForm = document.querySelector("#registration-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const phoneNumber = document.querySelector("#phone-number");
const userBirthday = document.querySelector("#user-birthday");
const userEmail = document.querySelector("#user-email");
const submitButton = document.querySelector("#submit-button");
const clearButton = document.querySelector("#clear-button");
const userList = document.querySelector("#user-list");

let newUser;
let newUsername;
let newPassword;
let newPhoneNumber;
let newUserBirthday;
let newUserEmail;

const submitNewUser = (submit) => {
    submit.preventDefault();

    if ((username.value.replaceAll(" ", "").length == 0) || (password.value.replaceAll(" ", "").length == 0) || (phoneNumber.value.replaceAll(" ", "").length == 0) || (userBirthday.value.replaceAll(" ", "").length == 0) || (userEmail.value.replaceAll(" ", "").length == 0)) {
        alert("ERRO! Todos os campos devem ser prenchidos.");
        console.log("ERRO! Todos os campos devem ser prenchidos.");
    } else {
        newUser = document.createElement("li");
        newUsername = document.createElement("h3");
        newPassword = document.createElement("p");
        newPhoneNumber = document.createElement("p");
        newUserBirthday = document.createElement("p");
        newUserEmail = document.createElement("p");

        newUsername.textContent = username.value;
        newPassword.textContent = `Senha: ${password.value}`;
        newPhoneNumber.textContent = `Número de celular: ${phoneNumber.value}`;
        newUserBirthday.textContent = `Data de Nascimento: ${userBirthday.value}`;
        newUserEmail.textContent = `E-mail: ${userEmail.value}`;

        userList.appendChild(newUser);
        newUser.appendChild(newUsername);
        newUser.appendChild(newPassword); // A senha não seria exposta assim, na verdade até onde seria guardada, no Banco de Dados, seria de maneira mais segura, porém deixo aqui a pedido da prova.
        newUser.appendChild(newPhoneNumber);
        newUser.appendChild(newUserBirthday);
        newUser.appendChild(newUserEmail);

        username.value = "";
        password.value = "";
        phoneNumber.value = "";
        userBirthday.value = "";
        userEmail.value = "";
    }
}

const clearList = () => {
    userList.innerHTML = "";
}

registrationForm.addEventListener("submit", submitNewUser);
clearButton.addEventListener("click", clearList);