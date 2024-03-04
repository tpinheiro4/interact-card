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
const cardForm = document.getElementById("card_form")
const thanksMsg = document.getElementById("thanks_msg")
const continueBtn = document.getElementById("continue_btn")
const errorInput = document.querySelector(".error-input")


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

    const formattedValue = this.value.replace(/(\d{4})/g, '$1 ').trim();

    if (this.value.length > 16) {
        this.value = this.value.slice(0, 16);
    } 

    if (formattedValue.length === 0) {
        numberCard.innerHTML = "0000 0000 0000 0000";
    } else {
        numberCard.innerHTML = formattedValue;
    }
})

numberInput.addEventListener("keydown", function (event) {
    if (this.value.length === 16 && event.key !== 'Backspace') {
        event.preventDefault();
    }
});

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

document.getElementById("card_form").addEventListener("submit", function(ev) {
    ev.preventDefault();

    if (numberInput.value.length === 16) {
        cardForm.style.display = "none"; 
        thanksMsg.style.display = "flex";
        errorInput.style.display = "none";
    } else {
        errorInput.style.display = "block";
    }
});

continueBtn.addEventListener("click", function() {

    thanksMsg.style.display = "none";
    cardForm.style.display = "flex";

    nameInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
    cvcInput.value = "";
    numberInput.value = "";
    numberCard.innerHTML = "0000 0000 0000 0000";
    nameCard.innerHTML = "Gilvany Ana Pinheiro";
    yearCard.innerHTML = "YY";
    monthCard.innerHTML = "MM";
    backCard.innerHTML = "000";
})