//! types

//* doesn't make any sense, but possible
type MyType = string;
const myVar: MyType = 'str';

type MyObject = { a: string; b: number; c: string | number };
const myObj1: MyObject = { a: 'str', b: 1, c: 2 };
const myObj2: MyObject = { a: 'str', b: 1, c: 'str2' };

type FnType = (a: string) => string;
const strFn: FnType = (a) => a;

//! optional properties

type OptionalProps = { a: number; b?: number; c?: number };

const basicObject3: OptionalProps = {
  a: 1,
};

//! interfaces

interface MyNewObject {
  a: string;
  b: MyObject;
  c?: number;
}
const myNewObject: MyNewObject = {
  a: 'str',
  b: { a: 'str', b: 1, c: 2 },
  c: 1,
};

//! extending interfaces

interface MyNewObjectExtended extends MyNewObject {
  d: string;
}
const myNewObjectExtended: MyNewObjectExtended = {
  a: 'str',
  b: { a: 'str', b: 1, c: 2 },
  c: 1,
  d: 'str',
};

//! limitations to types

function fnTest(param: MyNewObjectExtended) {
  console.log(param);
}
fnTest(myNewObjectExtended);

const myNewObjectExtended2 = {
  ...myNewObjectExtended,
  e: 1,
  f: 2,
  g: 3,
  h: 4,
};
fnTest(myNewObjectExtended2);
