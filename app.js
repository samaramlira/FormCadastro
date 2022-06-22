const form = document.getElementById("form");
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const celular = document.getElementById("celular");
const estaca = document.getElementById("estaca");
const alas = document.getElementById("alas");
const ala01 = document.getElementById("ala01");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nomeValue = nome.value;
  const sobrenomeValue = sobrenome.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;
  const celularValue = celular.value;
  const estacaValue = estaca.value;
  const alasValue = alas.value;

  if (nomeValue === "") {
    setErrorFor(nome, "O nome é obrigatório");
  } else {
    setSuccessFor(nome);
  }

  if (sobrenomeValue === "") {
    setErrorFor(sobrenome, "O sobrenome é obrigatório");
  } else {
    setSuccessFor(sobrenome);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória");
  } else if ((passwordValue.length >= 8) && (passwordValue.match(/[0-9.]+/))) {
    setSuccessFor(password);
  } else {
    setErrorForPassword(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não correspondem");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  if (celularValue === "") {
    setErrorFor(celular, "O celular é obrigatório");
  } else if (celularValue.length < 11) {
    setErrorFor(celular, "Insira um número de celular válido com DDD.");
  } else {
    setSuccessFor(celular);
  }

  if (estacaValue === "") {
    setErrorFor(estaca, "O nome da estaca é obrigatório");
  } else {
    setSuccessFor(estaca);
  }

  if (alasValue === "") {
    setErrorFor(alas, "A quantidade de alas é obrigatório");
  } 
  else if (alasValue === "1") {
    createInputAla1();
  } else if (alasValue === "2") {
    createInputAla2();
  } else if (alasValue === "3") {
    createInputAla3();
  } else if (alasValue === "4") {
    createInputAla4();
  } else if (alasValue === "5") {
    createInputAla5();
  } else if (alasValue === "6") {
    createInputAla6();
  } else if (alasValue === "7") {
    createInputAla7();
  } else if (alasValue === "8") {
    createInputAla8();
  } else if (alasValue === "9") {
    createInputAla9();
  } else if (alasValue === "10") {
    createInputAla10();
  } else {
    setSuccessFor(alas);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

//Mensagem de erro
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}
function setErrorForPassword(input) {
  const formControl1 = input.parentElement;
  
  // Adiciona a classe de erro
  formControl1.className = "form-control errorpassword";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}
//função de 1 ala
function createInputAla1(){
  var elemento = document.createElement('input');
  elemento.setAttribute('type', 'text');
  elemento.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento.setAttribute('id', 'ala1');
  ala01.appendChild(elemento);
}
//função 2 alas 
function createInputAla2(){
  var elemento = document.createElement('input');
  elemento.setAttribute('type', 'text');
  elemento.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento.setAttribute('id', 'ala1');
  ala01.appendChild(elemento);

  var elemento2 = document.createElement('input');
  elemento2.setAttribute('type', 'text');
  elemento2.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento2.setAttribute('id', 'ala2');
  ala01.appendChild(elemento2);
}
//função de 3 alas
function createInputAla3(){
  var elemento = document.createElement('input');
  elemento.setAttribute('type', 'text');
  elemento.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento.setAttribute('id', 'ala1');
  ala01.appendChild(elemento);

  var elemento2 = document.createElement('input');
  elemento2.setAttribute('type', 'text');
  elemento2.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento2.setAttribute('id', 'ala2');
  ala01.appendChild(elemento2);

  var elemento3 = document.createElement('input');
  elemento3.setAttribute('type', 'text');
  elemento3.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento3.setAttribute('id', 'ala3');
  ala01.appendChild(elemento3);
}
//função de 4 alas
function createInputAla4(){
  var elemento = document.createElement('input');
  elemento.setAttribute('type', 'text');
  elemento.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento.setAttribute('id', 'ala1');
  ala01.appendChild(elemento);

  var elemento2 = document.createElement('input');
  elemento2.setAttribute('type', 'text');
  elemento2.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento2.setAttribute('id', 'ala2');
  ala01.appendChild(elemento2);

  var elemento3 = document.createElement('input');
  elemento3.setAttribute('type', 'text');
  elemento3.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento3.setAttribute('id', 'ala3');
  ala01.appendChild(elemento3);

  var elemento4 = document.createElement('input');
  elemento4.setAttribute('type', 'text');
  elemento4.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento4.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento4);
}
//função 5 alas
function createInputAla5(){
  var elemento = document.createElement('input');
  elemento.setAttribute('type', 'text');
  elemento.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento.setAttribute('id', 'ala1');
  ala01.appendChild(elemento);

  var elemento2 = document.createElement('input');
  elemento2.setAttribute('type', 'text');
  elemento2.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento2.setAttribute('id', 'ala2');
  ala01.appendChild(elemento2);

  var elemento3 = document.createElement('input');
  elemento3.setAttribute('type', 'text');
  elemento3.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento3.setAttribute('id', 'ala3');
  ala01.appendChild(elemento3);

  var elemento4 = document.createElement('input');
  elemento4.setAttribute('type', 'text');
  elemento4.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento4.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento4);

  var elemento5 = document.createElement('input');
  elemento5.setAttribute('type', 'text');
  elemento5.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento5.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento5);
}
//função de 6 alas
function createInputAla6(){
  var elemento = document.createElement('input');
  elemento.setAttribute('type', 'text');
  elemento.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento.setAttribute('id', 'ala1');
  ala01.appendChild(elemento);

  var elemento2 = document.createElement('input');
  elemento2.setAttribute('type', 'text');
  elemento2.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento2.setAttribute('id', 'ala2');
  ala01.appendChild(elemento2);

  var elemento3 = document.createElement('input');
  elemento3.setAttribute('type', 'text');
  elemento3.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento3.setAttribute('id', 'ala3');
  ala01.appendChild(elemento3);

  var elemento4 = document.createElement('input');
  elemento4.setAttribute('type', 'text');
  elemento4.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento4.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento4);

  var elemento5 = document.createElement('input');
  elemento5.setAttribute('type', 'text');
  elemento5.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento5.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento5);

  var elemento6 = document.createElement('input');
  elemento6.setAttribute('type', 'text');
  elemento6.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento6.setAttribute('id', 'ala6'); 
  ala01.appendChild(elemento6);
}
//função de 7 alas
function createInputAla7(){
  var elemento = document.createElement('input');
  elemento.setAttribute('type', 'text');
  elemento.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento.setAttribute('id', 'ala1');
  ala01.appendChild(elemento);

  var elemento2 = document.createElement('input');
  elemento2.setAttribute('type', 'text');
  elemento2.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento2.setAttribute('id', 'ala2');
  ala01.appendChild(elemento2);

  var elemento3 = document.createElement('input');
  elemento3.setAttribute('type', 'text');
  elemento3.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento3.setAttribute('id', 'ala3');
  ala01.appendChild(elemento3);

  var elemento4 = document.createElement('input');
  elemento4.setAttribute('type', 'text');
  elemento4.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento4.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento4);

  var elemento5 = document.createElement('input');
  elemento5.setAttribute('type', 'text');
  elemento5.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento5.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento5);

  var elemento6 = document.createElement('input');
  elemento6.setAttribute('type', 'text');
  elemento6.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento6.setAttribute('id', 'ala6'); 
  ala01.appendChild(elemento6);

  var elemento7 = document.createElement('input');
  elemento7.setAttribute('type', 'text');
  elemento7.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento7.setAttribute('id', 'ala7'); 
  ala01.appendChild(elemento7);
}
//função de 8 alas
function createInputAla8(){
  var elemento = document.createElement('input');
  elemento.setAttribute('type', 'text');
  elemento.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento.setAttribute('id', 'ala1');
  ala01.appendChild(elemento);

  var elemento2 = document.createElement('input');
  elemento2.setAttribute('type', 'text');
  elemento2.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento2.setAttribute('id', 'ala2');
  ala01.appendChild(elemento2);

  var elemento3 = document.createElement('input');
  elemento3.setAttribute('type', 'text');
  elemento3.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento3.setAttribute('id', 'ala3');
  ala01.appendChild(elemento3);

  var elemento4 = document.createElement('input');
  elemento4.setAttribute('type', 'text');
  elemento4.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento4.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento4);

  var elemento5 = document.createElement('input');
  elemento5.setAttribute('type', 'text');
  elemento5.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento5.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento5);

  var elemento6 = document.createElement('input');
  elemento6.setAttribute('type', 'text');
  elemento6.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento6.setAttribute('id', 'ala6'); 
  ala01.appendChild(elemento6);

  var elemento7 = document.createElement('input');
  elemento7.setAttribute('type', 'text');
  elemento7.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento7.setAttribute('id', 'ala7'); 
  ala01.appendChild(elemento7);

  var elemento8 = document.createElement('input');
  elemento8.setAttribute('type', 'text');
  elemento8.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento8.setAttribute('id', 'ala8'); 
  ala01.appendChild(elemento8);
}
//função de 9 alas
function createInputAla9(){
  var elemento = document.createElement('input');
  elemento.setAttribute('type', 'text');
  elemento.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento.setAttribute('id', 'ala1');
  ala01.appendChild(elemento);

  var elemento2 = document.createElement('input');
  elemento2.setAttribute('type', 'text');
  elemento2.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento2.setAttribute('id', 'ala2');
  ala01.appendChild(elemento2);

  var elemento3 = document.createElement('input');
  elemento3.setAttribute('type', 'text');
  elemento3.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento3.setAttribute('id', 'ala3');
  ala01.appendChild(elemento3);

  var elemento4 = document.createElement('input');
  elemento4.setAttribute('type', 'text');
  elemento4.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento4.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento4);

  var elemento5 = document.createElement('input');
  elemento5.setAttribute('type', 'text');
  elemento5.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento5.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento5);

  var elemento6 = document.createElement('input');
  elemento6.setAttribute('type', 'text');
  elemento6.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento6.setAttribute('id', 'ala6'); 
  ala01.appendChild(elemento6);

  var elemento7 = document.createElement('input');
  elemento7.setAttribute('type', 'text');
  elemento7.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento7.setAttribute('id', 'ala7'); 
  ala01.appendChild(elemento7);

  var elemento8 = document.createElement('input');
  elemento8.setAttribute('type', 'text');
  elemento8.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento8.setAttribute('id', 'ala8'); 
  ala01.appendChild(elemento8);

  var elemento9 = document.createElement('input');
  elemento9.setAttribute('type', 'text');
  elemento9.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento9.setAttribute('id', 'ala9'); 
  ala01.appendChild(elemento9);
}
//função de 10 alas
function createInputAla10(){
  var elemento = document.createElement('input');
  elemento.setAttribute('type', 'text');
  elemento.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento.setAttribute('id', 'ala1');
  ala01.appendChild(elemento);

  var elemento2 = document.createElement('input');
  elemento2.setAttribute('type', 'text');
  elemento2.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento2.setAttribute('id', 'ala2');
  ala01.appendChild(elemento2);

  var elemento3 = document.createElement('input');
  elemento3.setAttribute('type', 'text');
  elemento3.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento3.setAttribute('id', 'ala3');
  ala01.appendChild(elemento3);

  var elemento4 = document.createElement('input');
  elemento4.setAttribute('type', 'text');
  elemento4.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento4.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento4);

  var elemento5 = document.createElement('input');
  elemento5.setAttribute('type', 'text');
  elemento5.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento5.setAttribute('id', 'ala4'); 
  ala01.appendChild(elemento5);

  var elemento6 = document.createElement('input');
  elemento6.setAttribute('type', 'text');
  elemento6.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento6.setAttribute('id', 'ala6'); 
  ala01.appendChild(elemento6);

  var elemento7 = document.createElement('input');
  elemento7.setAttribute('type', 'text');
  elemento7.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento7.setAttribute('id', 'ala7'); 
  ala01.appendChild(elemento7);

  var elemento8 = document.createElement('input');
  elemento8.setAttribute('type', 'text');
  elemento8.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento8.setAttribute('id', 'ala8'); 
  ala01.appendChild(elemento8);

  var elemento9 = document.createElement('input');
  elemento9.setAttribute('type', 'text');
  elemento9.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento9.setAttribute('id', 'ala9'); 
  ala01.appendChild(elemento9);

  var elemento10 = document.createElement('input');
  elemento10.setAttribute('type', 'text');
  elemento10.setAttribute('placeholder', 'Nome da ala ou ramo');
  elemento10.setAttribute('id', 'ala10'); 
  ala01.appendChild(elemento10);
}

//Ver e esconder senha
const senha = document.getElementById("password");
const btn = document.getElementById("verSenha");

btn.onclick = () => 
{
  if (senha.type === 'password') {
      senha.type = 'text'
      btn.src = 'imagens/ocultar.png'
  } else {
    senha.type = 'password'
    btn.src = 'imagens/mostrar.png'
  }
}

const confirmSenha = document.getElementById("password-confirmation");
const btn2 = document.getElementById("verConfirmSenha");

btn2.onclick = () => 
{
  if (confirmSenha.type === 'password') {
      confirmSenha.type = 'text'
      btn2.src = 'imagens/ocultar.png'
  } else {
    confirmSenha.type = 'password'
    btn2.src = 'imagens/mostrar.png'
  }
}