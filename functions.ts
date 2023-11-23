const createString = (name : string = 'Max', age : number | string | Array<number | string> | number[] | string[] = 20) => `${name} ${age}`; // using declared function with params this default values;
createString(); // Max 20
createString('Jack', 31); // Jack 31
createString('Jack', '31'); // Jack 31

const anotherFinc = (val1 : string | number, val2? : number | string) : string => {
  if (!val2) {
    return `${val1} 18`;
  } else {
    return `${val1} ${val2}`;
  }
}

// REST:
const createSkills = (name : string, ...skills : Array<string | number>) : string => `${name}, my skills ${skills.join(', ')}`;
createSkills('Jack', 'Vue2/3', 'Nuxt2/3', 'JS ES6', 'TypeScript'); // 'Jack, my skills Vue2/3, Nuxt2/3, JS ES6, TypeScript';

// func variable type:
let myFunc;

function oldFunc(name : string) : void {
  alert(`Hello ${name}, nice to see you!`);
};

myFunc = oldFunc;

// another case with same meaning that last case:

let myNewFunc : (firstArg : string) => void;

function myOldFunc(name : string) : void {
  alert(`Hello ${name}, nice to see you!`);
}

myNewFunc = myOldFunc; // same as 18 till 25 lines;
