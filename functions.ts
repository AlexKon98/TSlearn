const createString = (name : string = 'Max', age : number | string = 20) => `${name}${age}`; // using declared function with params this default values;
createString(); //Max20
createString('Jack', 31);
createString('Jack', '31');

const anotherFinc = (val1 : string, val2? : number) : string => {
  if (!val2) {
    return `${val1}18`;
  } else {
    return `${val1}${val2}`;
  }
}

// REST:
const createSkills = (name : string, ...skills : Array<string>) : string => `${name}, my skills ${skills.join(', ')}`;
createSkills('Jack', 'Vue2', 'Nuxt2', 'JS ES6'); // 'Jack, my skills Vue2, Nuxt2, JS ES6';

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