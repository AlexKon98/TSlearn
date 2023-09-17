// boolean type:
// we can set a type of variable when we creating it, and it maens that we can't set value of another type on it after;
let isCompleted : boolean = false;
// let <var-name> : <type> = <value>;

// isCompleted = 42; 
// isCompleted = '42'; - these cases will throw a type error because type of isCompleted variable is boolean and it might be changed only on another boolean value;

isCompleted = true; // - not an error because true is a boolean type;

// number type:
let decimal : number = 7.10;
let integer : number = 6;
let hex : number = 0xf00d;
let binary : number = 0b1010;
let octal : number = 0o744;

// string type:
let newName : string = 'Alex'; // Cannot redeclare block scoped variable (if name of var will be "name");
let sesntence : string = `Hello, my name is ${newName}!`;

// null and undefined types:

// in JavaScript:
typeof null; // object
typeof undefined; // undefined

// in TypeScript:
const u : undefined = undefined; // undefined
const n : null = null; // undefined

// void type: means that there is no type;

// for function result:
let greetUser : Function = () : void => { // means that function doesn't have to return any value;
  alert('Hello, nice to see you!');
};

// let anotherGreetUser : void = () => {}; - means that anotherGreetUser has a void type and we can't set any value for it; 
// any type is not assignable to void;