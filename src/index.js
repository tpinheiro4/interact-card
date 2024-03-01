// Setando as variaveís

const nameInput = document.getElementById("name_input")
const monthInput = document.getElementById("month_input")
const yearInput = document.getElementById("year_input")
const cvcInput = document.getElementById("cvc_input")
const numberInput = document.getElementById("number_input")
const numberCard = document.getElementById("number_text")
const nameCard = document.getElementById("name_text")
const yearCard = document.getElementById("year_text")
const monthCard = document.getElementById("month_text")
const backCard = document.getElementById("cvc_text")
const confirmBtn = document.getElementById("confirm_button")


// Somente letras no input do nome
nameInput.addEventListener("input", function() {
    onlyLetter()

    if (this.value.length === 0) {
        nameCard.innerHTML = "Gilvany Ana Pinheiro";
    } else {
        nameCard.innerHTML = this.value
    }
    
})

function onlyLetter () {
    let value = nameInput.value
    value = value.replace(/[^a-zA-Z\s]/g, '');

    nameInput.value = value
}

// Validações e padrões de input

numberInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, '');
    
    if (this.value.length > 16) {
        this.value = this.value.slice(0, 16); // Limita a 16 dígitos
    }

    
    if (this.value.length === 0) {
        numberCard.innerHTML = "0000 0000 0000 0000";
    } else {
        numberCard.innerHTML = this.value;
    }
})


// Aceitar apenas 2 números nos inputs de data

yearInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '');

    const valor = parseInt(this.value);
    if (valor > 99) {
        this.value = "99"
    } else if (valor < 1) {
        this.value = 1
    }

    
    if (this.value.length === 0) {
        yearCard.innerHTML = "YY";
    } else {
        yearCard.innerHTML = this.value
    }
    
})


monthInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '');
    
    const valor = parseInt(this.value);
    if (valor < 0) {
        this.value = ""; 
    } else if (valor > 12) {
        this.value = 12; 
    }

    if (this.value.length === 0) {
        monthCard.innerHTML = "MM";
    } else {
        monthCard.innerHTML = this.value
    }

    
})

// Aceitar apenas 3 números no input de cvc

cvcInput.addEventListener("input", function() { 
    this.value = this.value.replace(/[^0-9]/g, '');
    
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3);
    }


    if (this.value.length === 0) {
        backCard.innerHTML = "000";
    } else {
        backCard.innerHTML = this.value
    }
    
}
)