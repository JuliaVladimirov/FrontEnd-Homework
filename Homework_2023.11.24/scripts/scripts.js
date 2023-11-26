
// Решить следующие задачи:
// 1. Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.
// 2. Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
// 3. Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
// 4. Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.

//  Второстепенные задачи:
// 1. Добавить валидацию данных:
//      - запретить добавления пользователя с пустыми значениями
//      - сделать ограничение количества символов для имени и фамилии
//          Пример: мин - 2 символа, макс - 16
// 2. Если данные не проходят валидацию сообщения показать в виде красного текста внутри формы либо под формой добавления пользователя, если всё нормально убрать красный текст.


// 3. Добавить сортировку по имени, фамилии, возрасту и сделать так чтобы можно было выбрать либо по убыванию либо по возрастанию
//      (На эту задачу сил не хватило....:(((()





const userForm = document.querySelector("#user_form")
const firstNameInput = document.querySelector("#first_name_input")
let firstNameLabel = document.querySelector("#first_name")
const lastNameInput = document.querySelector("#last_name_input")
let lastNameLabel = document.querySelector("#last_name")
const ageInput = document.querySelector("#age_input")
let ageLabel = document.querySelector("#age")

const users = []

userForm.addEventListener("submit", function (e) {
    let firstNameGood = false
    let lastNameGood = false
    let ageGood = false
    e.preventDefault()
    firstNameLabel.innerText = ""
    lastNameLabel.innerText = ""
    ageLabel.innerText = ""

    let firstNameValue = firstNameInput.value
    let lastNameValue = lastNameInput.value
    let ageValue = ageInput.value

    if (firstNameValue === "") {
        firstNameLabel.innerText = "First name is mandatory"
    } else if (firstNameValue.length < 2) {
        firstNameLabel.innerText = "Min 2 symbols"
    } else if (firstNameValue.length > 16) {
        firstNameLabel.innerText = "Max 16 symbols"
    } else {
        firstNameGood = true
    }


    if (lastNameValue === "") {
        lastNameLabel.innerText = "Last name is mandatory"
    } else if (lastNameValue.length < 2) {
        lastNameLabel.innerText = "Min 2 symbols"
    } else if (lastNameValue.length > 16) {
        lastNameLabel.innerText = "Max 16 symbols"
    } else {
        lastNameGood = true
    }


    if (ageValue === "") {
        ageLabel.innerText = "Age is mandatory"
    } else {
        ageGood = true
    }

    if (firstNameGood && lastNameGood && ageGood) {

        const userObject = {
            first_name: firstNameValue,
            last_name: lastNameValue,
            age: +ageValue
        }

        console.log(userObject)

        users.push(userObject)

        firstNameInput.value = ""
        lastNameInput.value = ""
        ageInput.value = ""

        rerender()
    }
})

function createUserCard({ first_name, last_name, age }) {

    const pFirstName = document.createElement('p')
    pFirstName.innerText = `Name: ${first_name}`
    const pLastName = document.createElement('p')
    pLastName.innerText = `Last Name: ${last_name}`
    const pAge = document.createElement('p')
    pAge.innerText = `Age: ${age}`
    const userCard = document.createElement('div')
    userCard.classList.add("user_card")

    userCard.append(pFirstName, pLastName, pAge)

    return userCard
}

function rerender() {
    const userListContainer = document.querySelector(".user_list_container")
    userListContainer.innerHTML = ""

    for (let i = 0; i < users.length; i++) {
        const userCardElem = createUserCard(users[i])

        userCardElem.addEventListener("dblclick", function () {
            users.splice(i, 1)
            rerender()
        })

        userListContainer.append(userCardElem)
    }
}



// Дорогая Анна, было очень приятно с Вами учиться. Спасибо большое за Ваше терпение. Внизу маленький проэкт для Вас.



let thanksBtn = document.querySelector("#thanks")
thanksBtn.addEventListener("click", function () {

    const thankYouContainer = document.querySelector("#thank_you")
    
        const word = "СПАСИБО!"
        thanksBtn.remove()
   
    for (let i = 0; i < word.length; i++) {
        let letter = word[i]
        let pElem = document.createElement("p")
        if (i % 2 === 0) {
            pElem.classList.add("odd", "ltr")
        } else {
            pElem.classList.add("even", "ltr")
        }
        pElem.innerText = letter
        thankYouContainer.append(pElem)
    }

})



