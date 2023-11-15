function task(nr) {
    console.log(`==== TASK ${nr} ====`)
}
// 1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

task(1)

function comparison(a, b) {
    if (a > b) {
        console.log(b)
    } else {
        console.log(a)
    }
}
comparison(5, 9)


// 2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

task(2)

function allEven(c, d) {
    if (c === d) {
        return []
    }
    let arr = []
    let min = c
    let max = d
    if (c > d) {
        min = d
        max = c
    }
    for (let i = max; i >= min; i--) {
        if (i % 2 === 0)
            arr.push(i)
    }
    return arr
}
console.log(allEven(11, 43))


// 3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

task(3)

function power(e, f) {
    if (typeof f === "undefined") {
        f = 2
    }
    let degResult = e ** f
    return degResult

}

console.log(power(2, 3))
console.log(power(9))



// 4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

task(4)

let sum = 0
function sumCount(n) {
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum
}
console.log(sumCount(8))


// 5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

task(5)

let sum_odd = 0
let sum_even = 0
function sumCount1(n, m) {
    if (n === m) {
        return []
    }
    let arr1 = []
    let arr2 = []
    let min1 = n
    let max1 = m
    if (n > m) {
        min1 = m
        max1 = n
    }
    for (let i = min1; i <= max1; i++) {
        if (i % 2 === 0) {
            arr1.push(i)
            sum_even += i
        } else {
            arr2.push(i)
            sum_odd += i
        }
    }
    return {
        sumEven: sum_even,
        sumOdd: sum_odd,
    }
}
console.log(sumCount1(9, 2))

// 6. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
// Пример: [ 'one', 'two', 'three' ] => 'three'

task(6)


function lineSearcher(line) {
    if (line == []) {
        return "null"
    }
    let max = line[0]
    for (let i = 1; i <= line.length - 1; i++) {
        if (max.length < line[i].length) {
            max = line[i]
        }
    }
    return max
}

console.log(lineSearcher(["Apple", "Banana", "Kiwi", "Peach", "Melone", "Grapes"]))

// ==============Additional Tasks from FE_17 Presentation===================
console.log(`==== ADITIONAL TASKS ====`)

// 7. Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.

task(7)

let sumOfNumbers = 0
let arrOfNumbers = []
let div = 5 // если вдруг потом нужно будет поменять кратность
let len = 50 // если нужно увеличить диапазон значений
for (let i = div; i <= len; i += div) {
    sumOfNumbers += i
}
console.log(sumOfNumbers)


// 8. В следующих задачах будет использоваться массив из объектов, каждый 
// из которых описывает определенный товар:

task(8)

const goods = [
    {
        id: 1,
        title: "bicycle",
        price: 45000,
        discount: 10
    },
    {
        id: 2,
        title: "roller-skates",
        price: 15000,
        discount: 5
    },
    {
        id: 3,
        title: "kick scooter",
        price: 10000,
        discount: 30
    },
    {
        id: 4,
        title: "skis",
        price: 25000,
        discount: 10
    },
    {
        id: 5,
        title: "skate",
        price: 10000,
        discount: 0
    }
]

// 8.1. Написать цикл, который выводит только названия товаров

task("8 PART 1")

for (let i = 0; i < goods.length; i++) {
    let { title } = goods[i]
    console.log(`${title}`)
}

// 8.2 Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”

task("8 PART 2")

for (let i = 0; i < goods.length; i++) {
    let { title, price, discount } = goods[i]
    if (discount === 0) {
        console.log(`${title}, Price with Discount (${price})`)
    } else {
        let discountPrice = price - (price / 100 * discount)
        console.log(`${title}, Price with Discount (${discountPrice})`)
    }
}

// 8.3 Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).

task("8 PART 3")

function maxPrice(goods) {
    let maxPrs = goods[0].price
    let maxObjectIndex = 0
    for (let i = 1; i < goods.length; i++) {
        if (maxPrs < goods[i].price) {
            maxPrs = goods[i].price
            maxObjectIndex = i
        }
    }
return goods[maxObjectIndex]
}
console.log(maxPrice(goods))


