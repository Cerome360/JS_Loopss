// Loops

//let myNumber = 0;
//while (myNumber < 50) {
//console.log(myNumber);
//myNumber = myNumber + 1;
// myNumber++;
//}
// Never create an endless loop
//////////////////////////////////////////////////



// Do-While Loop

//let myNumber = 0;
//do {
// myNumber += 2;
// console.log(myNumber);
//} while (myNumber < 50);
//////////////////////////////////////////////////////

// For Loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//===============================================

let name = "Serome";
for (let i = 0; i <= name.length; i++) {
    console.log(name.charAt(i));
}

let Name = "Cerome";
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = Name[counter];
    console.log(myLetter);
    if (counter === "1") {
        counter += 2;
        continue;
    }
    if (myLetter === "v") break;
    counter++;
}
console.log(counter);

