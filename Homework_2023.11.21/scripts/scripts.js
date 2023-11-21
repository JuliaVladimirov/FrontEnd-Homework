
// 1. Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const squareElem = document.createElement("div")
squareElem.style.width = "200px"
squareElem.style.height = "200px"
squareElem.style.backgroundColor = "red"
squareElem.style.margin = "30px"
document.body.append(squareElem)

const btnElem = document.createElement("button")
btnElem.innerText = "Click Me"
btnElem.style.margin = "30px"
document.body.append(btnElem)

btnElem.addEventListener("click", function () {
    squareElem.style.width = "100px"
    squareElem.style.height = "100px"
    squareElem.style.backgroundColor = "green"
})



// 2. Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const squareElem1 = document.createElement("div")
squareElem1.style.width = "200px"
squareElem1.style.height = "200px"
squareElem1.style.backgroundColor = "pink"
squareElem1.style.margin = "30px"
document.body.append(squareElem1)

const btnElem1 = document.createElement("button")
btnElem1.innerText = "Click Me"
btnElem1.style.margin = "30px"
document.body.append(btnElem1)

btnElem1.addEventListener("click", function () {
    squareElem1.style.backgroundColor = "blue"
    console.log(squareElem1.style.backgroundColor)
})


// 3. Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

const squareElem2 = document.createElement("div")
let side = 150
squareElem2.style.width = `${side}px`
squareElem2.style.height = `${side}px`
squareElem2.style.backgroundColor = "grey"
squareElem2.style.margin = "30px"
document.body.append(squareElem2)

const btnElem2 = document.createElement("button")
btnElem2.innerText = "Click Me"
btnElem2.style.margin = "30px"
document.body.append(btnElem2)

btnElem2.addEventListener("click", function () {
    side += 20
    squareElem2.style.width = `${side}px`
    squareElem2.style.height = `${side}px`
})

// 4. Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

const divElem = document.createElement("div")
divElem.classList.add("root")
divElem.style.width = "200px"
divElem.style.height = "100px"
divElem.style.backgroundColor = "#00ffff"
divElem.style.margin = "30px"
document.body.append(divElem)

const btnElem3 = document.createElement("button")
btnElem3.innerText = "Click Me"
btnElem3.style.margin = "30px"
document.body.append(btnElem3)

btnElem3.addEventListener("click", function () {
    let pElem = document.createElement("p")
    pElem.innerText = "I am a blue Paragraph"
    pElem.style.color = "blue"
    divElem.style.display = "flex"
    divElem.style.justifyContent = "center"
    divElem.style.alignItems = "center"
    divElem.append(pElem)
})



// 5. Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const divElem1 = document.createElement("div")
divElem1.classList.add("root")
divElem1.style.width = "400px"
divElem1.style.height = "400px"
divElem1.style.backgroundColor = "#ffff99"
divElem1.style.margin = "30px"
divElem1.style.display = "flex"
divElem1.style.flexDirection = "column"
divElem1.style.flexWrap = "wrap"
divElem1.style.justifyContent = "center"
divElem1.style.alignItems = "center"
document.body.append(divElem1)

const btnElem4 = document.createElement("button")
btnElem4.innerText = "Click Me"
btnElem4.style.margin = "10px 30px"
document.body.append(btnElem4)

let clr ='green'
btnElem4.addEventListener("click", function () {
    
    if (clr === 'green') {
        clr ='blue'
    } else {
        clr = "green"
    }
    let pElem1 = document.createElement("p")
    pElem1.innerText = `I am a ${clr} Paragraph`
    pElem1.style.color = clr
    divElem1.append(pElem1)
})

