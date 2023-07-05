
//ES2015 object destructuring
const numbers = {
    a : 1,
    b : 2
}
const { a, b} = numbers;
//array swap
let swap = [1, 0];
[0, 1] = swap;
//or
[1, 2] = arr[0]

const raceResults = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];
let [first, second, third, fourth, fifth] = [raceResults]
