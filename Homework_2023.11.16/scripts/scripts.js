

// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

for (let i = 100; i >= 50; i -= 5) {
    const pElem = document.createElement("p")
    pElem.innerText = i
    const numbersDiv = document.querySelector(".numbers")
    numbersDiv.append(pElem)
}



// 2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

let string_array = ["Banana", "Orange", "Apple", "Mango", "Lemon", "Pear", "Grapes", "Peach", "Melone", "Ananas"]
for (let i = 0; i <= string_array.length - 1; i++) {
    const pElem1 = document.createElement("p")
    pElem1.innerText = string_array[i]
    const stringDiv = document.querySelector(".strings_container")
    stringDiv.append(pElem1)
}



// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const personal_data = [
    {
        first_name: "Anna",
        last_name: "Miller",
        age: 25
    },
    {
        first_name: "Sofia",
        last_name: "Green",
        age: 17
    },
    {
        first_name: "Noah",
        last_name: "Fein",
        age: 32
    },
    {
        first_name: "Felix",
        last_name: "Schwarz",
        age: 13
    },
    {
        first_name: "Paul",
        last_name: "Seegler",
        age: 44
    },
    {
        first_name: "Georg",
        last_name: "Weiss",
        age: 81
    }
]
for (let i = 0; i <= personal_data.length - 1; i++) {
    const artElem = document.createElement("article")
    let { first_name, last_name, age } = personal_data[i]
    if (age >= 18) {
        artElem.innerText = `First Name: ${first_name}, Last Name: ${last_name}, age: ${age}`
        const artDiv = document.querySelector(".users_container")
        artDiv.append(artElem)
    }
}


// Второстепенные задачи:
// 1 - Рассматривать кейс, в котором создается div с картинкой и ссылкой внутри.

const divElem = document.createElement("div")
const imgElem = document.createElement("img")
imgElem.src = "https://www.10wallpaper.com/wallpaper/3840x2160/1801/Nike_Brand_Ads_Poster_Running_Girl_3840x2160.jpg "
imgElem.alt = "Nike"
const linkElem = document.createElement("a")
linkElem.href = "https://www.nike.com/de/?cp=87986268504_search_&Macro=-nike-o-361518894-1188572956759823-e-c-DE-pure--kwd-74285936706862:aud-808065298:loc-72-129827&gclid=abb772ebe3f21d0e382917bd9ece75c2&gclsrc=3p.ds&ds_rl=1252249&msclkid=abb772ebe3f21d0e382917bd9ece75c2"
linkElem.innerText = "Order Now"
linkElem.target = "_blank"
divElem.append(imgElem)
divElem.append(linkElem)
document.body.append(divElem)


// 2 - Создать функцию, которая получает ссылку на картинку и ссылку на сайт и возвращает элемент.

function imgInLink(link, img) {
    const linkElem1 = document.createElement("a")
    const imgElem1 = document.createElement("img")
    imgElem1.src = img
    linkElem1.href = link
    linkElem1.target = "_blank"
    linkElem1.append(imgElem1)
    document.body.append(linkElem1)
}
imgInLink("https://www.netflix.com/de/", "https://th.bing.com/th/id/R.4d30a09d38e6dfe3feaa31920a680108?rik=GnWkgmKvj5nwNg&riu=http%3a%2f%2fwww.cultjer.com%2fimg%2fug_photo%2f2016_09%2f76248820160921034356.jpg&ehk=grD%2fdqb%2b43FMvO3KHmAdPwgUvOikuZkwrJQwMPdCHUM%3d&risl=&pid=ImgRaw&r=0")


// 3 - Создать множество карточек с товарами (на основе массива с объектами. У объекта свойства title, unitprice, count) -> массив с продуктами https://pastebin.com/1PDjyE0J 
// 4 - Написать скрипт, который выводит карточки с товарами в интерфейс (на основе массива с объектами. У объекта свойства title, unitprice, count), а внизу выводится итоговая сумма товаров и их количество.

const products = [
    {
        title: "bicycle",
        unit_price: 45000,
        count: 15
    },
    {
        title: "roller-skates",
        unit_price: 15000,
        count: 4
    },
    {
        title: "kick scooter",
        unit_price: 10000,
        count: 5
    },
    {
        title: "skis",
        unit_price: 25000,
        count: 12
    },
    {
        title: "skate",
        unit_price: 10000,
        count: 1
    }
]

let totalPrice = 0
let totalCount = 0
for (let i = 0; i <= products.length - 1; i++) {
    const artElem1 = document.createElement("article")
    let { title, unit_price, count } = products[i]
    artElem1.innerText = `Title: ${title}, Price: ${unit_price}, Quantity: ${count}`
    const artDiv1 = document.querySelector(".productDiv")
    artDiv1.append(artElem1)
    totalPrice += unit_price
    totalCount += count
}
const paragraph = document.createElement("p")
artDiv1 = document.querySelector(".productDiv")
paragraph.innerText = `Total Price: ${totalPrice}, Total Quantity: ${totalCount}`
artDiv1.append(paragraph)

// after добавить элементы после узла
// before добавить элементы до узла
// paragraph.after(totalPrice, totalCount)