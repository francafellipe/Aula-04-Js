let randomNumber = Math.round(Math.random() * 10)

let tentativas = 1

function handleClick(event) {
    event.preventDefault()
    const inputNumber = document.querySelector('#inputNumber') //cria uma variavel inputNumber =documento.queroq ue encontre a no html o Inputnumber
    console.log(inputNumber.value)

    if (inputNumber.value == randomNumber){
        document.querySelector('.screen1').classList.toggle("hide")
        document.querySelector('.screen2').classList.toggle("hide")
        document.querySelector('.tentativas').innerText = `Acertou em ${tentativas}`

    } else {
        tentativas ++
        document.querySelector('.screen1 p').innerText = `Você Errou Tente novamente`
    }

}

function restart(event) {
    location.reload(event)
    document.querySelector('.screen2').classList.add("hide")
    document.querySelector('.screen1').classList.remove("hide")

    document.querySelector('#inputNumber').value = ""
    document.querySelector('.scree1 p ').innerText = ""

}

const input = document.querySelector("#inputNumber");

input.addEventListener("keypress", function(e) {

    if(e > "10" || e < "10" ) {
        e.preventDefault();
    }
  
});