// array types: 
let list : number[] = [1, 2, 3];

  // generic:
  let arr : Array<number> = [1, 2, 3];

  // tuple type:
  // one line:
  let x : [string, number] = ['hello', 10];// - but it means:
  // that first item of this array must to be string and second is a number;
  // and this also this array has length = 2; - we can't push there more items;

  // multiple lines:
  let y : [ string, number];
  y = ['first', 2];

  // any type for array:
  let a : [any, any] = [1, 2]; // still has only 2 items;
  let b : Array<any> = [1, 2, 3]; // - may have any length;

// change types:
let notSure : any = false;
// issue cases (not an error):
notSure = 42;
notSure = 'Hello';
notSure = true; // - we can change type of this variable because it was declared with "any" type;

// enum type
enum Season { // we can declare boundle of named constants
  Winter, // const with value = itself index - by default;
  Spring, // const with value = itself index - by default;
  Summer, // const with value = itself index - by default;
  Autumn // const with value = itself index - by default;
};
// indexes:
Season.Winter; // 0
Season.Spring; // 1
Season.Summer; // 2
Season.Autumn; // 3

// for example: 
let current : Season = Season.Summer; // 2
current = Season.Autumn; // changing value;
// so we can create a variable which contains "Season" type;

// but we can change values of this constants on enum's declaring:
enum Directions {
  Up = 2,
  Right = 4,
  Down = 6,
  Left
}

// so:
Directions.Up; // 2
Directions.Right; // 4
Directions.Down; // 6
Directions.Left; // 7 - by counting from last set value;

// never type - two cases of using this type: function must return error / function with infinite loop:

const msg : string = 'hello';
const error = (message : string = msg) : never => {
  throw new Error(message); // throwing an error
};

const infiniteLoop = () : never => {
  while(true) { } // infinite loop
};

// object type:
const create = (o : object) : void => { };
// create(1); - throw type error
// create('42'); - throw type error
create({ value: 42 });

// <type-name> | <type-name> - multiple types, so we can set a type on declaring a variable which may be one of current types, so:
let changed : number | string;
changed = 42;
changed = 'string'; // - no errors on these cases;
// changed = false; - type error;\

// type - creating user types:
type Name = string | number; // custum type

let id : Name;
id = 42;
id = '42';
// no errors because type Name has a two nested types of number and string;