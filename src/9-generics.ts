//! without generics we have a restriction on how to call some
function identity(arg: number): number {
  return arg;
}
const num = identity(1);

function identity2(arg: any): any {
  return arg;
}
const any = identity2(2);

//! with generics

function identity3<Type>(arg: Type): Type {
  return arg;
}
const sameType1 = identity3('asdf');
const sameType2 = identity3(1);
const sameType3 = identity3(true);

//! working with generics

function identity4<T>(arg: T): T {
  // @ts-expect-error property length does not exist on type T
  console.log(arg.length);
  return arg;
}
function identity5<T>(arg: T): T {
  if (Array.isArray(arg)) {
    console.log(arg.length);
  }
  return arg;
}

function identity6<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
//* it can be inferred from the params or declared
const sameType4 = identity6<number>([1, 2, 3]);
const sameType5 = identity6([1, 2, 3]);

//! a generic we have already seen

const myArr: Array<number> = [];
// const emitter = new EventEmitter<string>();
// const subject = new Subject<number>();

//! real uses of generics

function getFromLocalStorage(key: string): unknown {
  return localStorage.get(key);
}
const local = getFromLocalStorage('key');
const localCasted = getFromLocalStorage('key') as number;

function getFromLocalStorageTyped<T>(key: string): T {
  return localStorage.get(key);
}
const localNotTyped = getFromLocalStorageTyped('key'); // unknown (it cannot know the type)
const localTyped = getFromLocalStorageTyped<number>('key'); // number

//! generic classes

class GenericNumber<NumType> {
  // @ts-expect-error not initalized
  zeroValue: NumType;
  // @ts-expect-error not initalized
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

//! generic constraints

interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property
  return arg;
}
loggingIdentity('asdf');
loggingIdentity([1, 2, 3, 4]);
loggingIdentity({ a: 1, b: 2, length: 7 });
// @ts-expect-error
loggingIdentity(1);

//! getting crazy

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');
// @ts-expect-error -  Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'
getProperty(x, 'm');
