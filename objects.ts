// we can declare an obj with "any" type:
let user : any = {
  prop: 'value1',
  anotherProp: 'value2',
};

// but we also can set a fixed properties of object:
let newUser : { name : string, age: number | string, nickName? : string } = {
  name: 'name',
  age: 32,
  nickName: 'nickname',
}
newUser.nickName = 'Nickname'; // so we can dynamicaly set or change this value with "?"

// so we can create our type to dont repeat the code:
type Person = { 
  name : string,
  age : number | string,
  nickName? : string,
  getPass? : () => string };

// so:
let person1 : Person = {
  name: 'str1',
  age: 31,
  nickName: 'str1'
}

//and:
let person2 : Person = {
  name: 'str2',
  age: 32,
  getPass() : string {
    return `${this.name}${this.age}`
  }
}