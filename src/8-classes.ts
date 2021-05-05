class MyClass {
  property: string;

  constructor(prop: string) {
    this.property = prop;
  }

  fn(): void {
    console.log(this.property);
  }
}
// classes can be used as types
const myClassInstance: MyClass = new MyClass('');

//! accessors

class MyClass2 {
  private num = 0; // type number, inferred

  // default is public
  public setNum(n: number) {
    this.num = n;
  }

  protected getNum() {
    return this.num;
  }
}
const myClass2 = new MyClass2();

//! accessors in the constructor

class MyClass3 {
  constructor(public prop: string, private prop2: string) {}

  fn(): string {
    return `${this.prop} ${this.prop2}`;
  }
}
const myClass3 = new MyClass3('hello', 'world');
console.log(myClass3.prop); // hello
// @ts-expect-error - private property
console.log(myClass3.prop2);
console.log(myClass3.fn()); // hello world

//! readonly

class MyClass4 {
  readonly cls2: MyClass2;

  constructor(readonly strParam: MyClass2) {
    this.cls2 = strParam;
  }

  fn() {
    // @ts-expect-error
    this.cls2 = new MyClass2();
  }
}
const myClass4 = new MyClass4(myClass2);

//! abstract

abstract class MyClass5 {
  abstract fn(a: number, b: number): number;
}

class MyClass6 extends MyClass5 {
  fn(a: number, b: number): number {
    return a + b;
  }
}

// @ts-expect-error
const myclass5 = new MyClass5();
const myclass6 = new MyClass6();
myclass6.fn(1, 2); // 3

//! getters and setters

class MyClass7 {
  private _prop = 1;

  get prop(): number {
    return this._prop;
  }

  set prop(num: number) {
    this._prop = num;
  }
}

const myclass7 = new MyClass7();
myclass7.prop = 2;
console.log(myclass7.prop);

//! trully private properties (vanilla js, browser must support it)

class MyClass8 {
  #privateProp = 1;

  getPrivateProp() {
    return this.#privateProp;
  }
}
const myclass8 = new MyClass8();
myclass8.getPrivateProp(); // 12
// @ts-expect-error - property #privateProp cannot be accessed outside the class
myclass8.#privateProp;
