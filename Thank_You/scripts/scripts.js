
const messElem = document.createElement("div")
document.body.append(messElem)
messElem.classList.add("message")
const word = "СПАСИБО!"
for (let i = 0; i < word.length; i++) {
    let letter = word[i]
    let pElem = document.createElement("p")
    if (i % 2 === 0) {
        pElem.classList.add("odd", "ltr")
    } else {
        pElem.classList.add("even", "ltr")
    }
    pElem.innerText = letter
    messElem.append(pElem)
}

