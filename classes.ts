// Simple class example
class User {
  constructor(name: string, age: number, nickName: string | number, some? : any) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    this.someVal = some;
  };

  public name: string;
  private age: number;
  protected nickName: string | number;
  readonly someVal?: any;
}

const user = new User('name', 22, 'nickName');

// Minimization of Class props...
class newClass {
  constructor(
    public name: string,
    public age: number,
    public nickName? : number | string
  ) {}
}

const newUser = new newClass('name', 32, 25);
