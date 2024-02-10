// writing out the types
let carName: string = "Benz ";
let quoteName: string = "is my favourite Car";
let stateMent: string = carName + quoteName;
console.log(stateMent);

// TypeScript Array
const names: string[] = ["Christian", "Johnson", "Mainoo", "Rico", "Angelo"];
console.log(names)

const schools: string[] = ['UofA', 'Fulafia', 'UNN', 'UI']
console.log(schools)

// Typed Array
// A tuple is a typed array with a pre-defined length and types for each other
// define our tuple
let ourTuple: [number, boolean, string, number];
ourTuple: [5, false, 'Coding is Good', 10];

// TypeScript Object Types
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corrolla",
  year: 2019
};

// TypeScript Enums
// An enum is a special 'class' that represents a group of constants
enum CardinalDirection {
  North, East, South, West
}
let currentDirection = CardinalDirection.East;
console.log(currentDirection)

// Union type is used when the value can be more than a single type
function printStatusCode(code: string | number) {
  console.log(`My Status code is ${code}.`)
}
printStatusCode('404');
printStatusCode(404)

// TypeScript Function
// Void Return type can be used to indicate a function that doesn't return any value
function printHello(): void {
  console.log("Hello World!")
}

// function parameter
function multiply(a: number, b: number) {
  return a * b;
}

// TypeScript Classes
// TypeScript adds types and visibility modifiers to JavaScript Classes
class Person {
  private name: string;
  
  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name
  }
}

const person = new Person("Johnny");
console.log(person.getName());