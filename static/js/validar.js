const form = document.querySelector("#formulario")
const nameInput =  document.querySelector("#name")
const emailInput = document.querySelector("#email")
const cityInput = document.querySelector("#city")
const gameInput = document.querySelector("#games")
const bdInput = document.querySelector("#birthday")

console.log(form, nameInput, emailInput, cityInput, gameInput)

form.addEventListener("submit", (event) =>{
  event.preventDefault();
  //verificando se os campos estão vazio
  if (nameInput.value ==="" || emailInput.value === "" || cityInput.value === "" || gameInput.value === ""
  || bdInput.value === ""){

    alert("Preencha todos os campos!")
  }

  //form completamente preenchido
  form.submit();
})
