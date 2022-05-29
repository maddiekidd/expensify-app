/*const person = {
name: "Maddie",
age: 23,
location: {
    city: "Orlando",
    temp: 40
    }
};

const { name: firstName = "Anonymous", age } = person; 

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location; 
if (city && temperature) {
console.log(`It's ${temperature} in ${city}`);
} */

/*
const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    publisher: {
        name: "Penguin"
    }
}; 

const { name: publisherName = "Self-Published" } = book.publisher; 

console.log(publisherName); 
*/

//
// Array Destructuring
//

const address = ["2399 S Juniper Street", "Philadelphia", "Pennsylvania", "32751"];
const [ , city, state = "New York" ] = address; 
console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$3.50", "$3.75"]; 
const [order, , medium] = item; 
console.log(`A ${order} costs ${medium}`);

