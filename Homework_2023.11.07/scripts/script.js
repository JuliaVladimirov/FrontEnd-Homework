// task 1
let num = +prompt("Задание 1\nВведите число")
console.log(num * 0.1)

// task 2
let firstNum = +prompt("Задание 2\nВведите первое число для сравнения")
let secondNum = +prompt("Задание 2\nВведите второе число для сравнения")
if (firstNum < secondNum) {
    console.log(firstNum)
} else {
    console.log(secondNum)
}

// task 3
let num1 = +prompt("Задание 3\nВведите число")
if (num1 === 100) {
    console.log("Число равно 100")
} else if (num1 < 100) {
    console.log("Число меньше 100")
} else {
    console.log("Число больше 100")
}

// task 4
let firstName = prompt("Задание 4\nКак Вас зовут?")
let age = +prompt("Задание 4\nСколько Вам лет?")
if (age >= 18) {
    console.log(`Hello, ${firstName}`)
} else {
    console.log(`Hi, ${firstName}`)
}






