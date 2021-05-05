type A = { a: number; b: number };
type B = { a: number; c: number };

//! basic object

const basicObject: A = { a: 1, b: 2 };
// @ts-expect-error c does not exist
basicObject.c = 1;

//! object that at least has X properties, but can have more of a defined type

type C = { a: number; b: number; [key: string]: number };

const basicObject2: C = {
  a: 1,
  b: 2,
};
basicObject2.c = 3;
// @ts-expect-error d must be of type number
basicObject2.d = 'str';

//! union with objects

const union: A | B = { a: 1, c: 2 };

//! intersection types

const intersection: A & B = { a: 1, b: 1, c: 2 };

//! keyof

type KeysA = keyof A;
const key1: KeysA = 'a';
const key2: KeysA = 'b';
// @ts-expect-error
const key3: KeysA = 'c';
