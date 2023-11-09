
// task 1

console.log(`Task 1`)
for (let i = 1; i <= 10; i += 2) {
    console.log(`Number is ${i}`)
}

// task 2

console.log(`Task 2`)
for (let i = 55; i >= 20; i -= 1) {
    console.log(i)
}

// task 3

console.log(`Task 3, Part 1`)
const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let i = 0; i <= numbers.length - 1; i++) {
    console.log(numbers[i])
}
console.log(`Task 3, Part 2`)
const numbers_squared = [];
for (let i = 0; i <= numbers.length - 1; i++) {
    numbers_squared.push(numbers[i] ** 2)
    console.log(numbers_squared[i])
}
console.log(`Task 3, Part 3`)
let last_elem = numbers_squared[numbers.length - 1]
console.log(`Last Element is ${last_elem}`)


// task 4

console.log(`Task 4`)
const user = {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
}
console.log(`User's name is ${user[`first_name`]} ${user[`last_name`]}. He is ${user[`age`]} years old. (His salary is $${user[`salary`]}.)`) 