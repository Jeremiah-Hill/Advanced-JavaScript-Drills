name = 'Jeremiah';
var name;
// console.log(name)

setName();
function setName() {
    var name = 'Jeremiah';
    console.log(name);
}

console.log('first');
let avg = findAvg(2, 2);
console.log('second', avg);
function findAvg(a, b) {
    console.log('third');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ['orange', 'apple', 'strawberry'];
// let favFruit;
function printFruits() {
    let favFruit = fruits[1];
    favFruit = fruits[1]
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
        let leastFav;
        leastFav = fruits[0];
    }
    // console.log(leastFav);
    printFavFruit();
}

// printFruits();

// printFavFruit();

sayHello();
function sayHello() {
    let name = "Jeremiah";
    console.log("Hello " + name);
}

var newFunction = function () {
    alert("Does it work?");
}
newFunction();