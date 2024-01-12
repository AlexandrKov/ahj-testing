function validateCard() {
    let input = document.querySelector(".input").value.replace(/\s/g, "");
    if(lunAlg(input)) {
        cardType(input)
        document.querySelector(".result").innerText = ""
    } else {
        document.querySelector(".result").innerText = "Неверный номер карты"
    }

}

function lunAlg(numberCard) {
    let sum = 0;
    let even = 0;
    let odd = 0;
    for(let i = numberCard.length -1; i >= 0 ; i--) {
        if(i % 2 == 0) {
            let digit = parseInt(numberCard.charAt(i), 10) * 2;
            if(digit > 9) {
                digit -= 9;
            }
            even += digit;
        } else {
            let digit = parseInt(numberCard.charAt(i), 10);
            odd += digit;
        }

    }
    sum = even + odd;
    return sum % 10 === 0
}

function cardType(numberCard) {
    let cards = document.querySelectorAll(".card__item");
    if(/^4/.test(numberCard)) {
        cards[0].classList.remove("active")
        cards[1].classList.add("active")
        cards[2].classList.add("active")
    } else if(/^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-2]\d|5[1-5]\d)\d*$/.test(numberCard)) {
        cards[1].classList.remove("active")
        cards[0].classList.add("active")
        cards[2].classList.add("active")
    } else if(/^220[0-4]\d*$/.test(numberCard)) {
        cards[2].classList.remove("active")
        cards[0].classList.add("active")
        cards[1].classList.add("active")
    }
}
