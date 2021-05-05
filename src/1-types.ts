//! inferred types
const a = '';
const b = 1;
const c = true;

//! explicit types
const d: string = '';
const e: number = 1;
const f: boolean = true;

//! casting
const g = '' as string;
const h = <string>'';

//! functions
function fn(a: string): number {
  return +a;
}

const fn2 = (a: string): number => +a;

const fn3 = (a: string) => +a;

//! arrays

const k = [1, 2, 3];
const l: string[] = ['1', 'a', '2'];
const m: Array<boolean> = [true, false];

//! objects

const n = { a: 1, b: 2 };
const o: { a: string; b: number } = { a: 'hi', b: 1 };

const p: object = { a: 1 };

//! special types: void

function fn4(a: string): void {
  console.log(a);
}

//! special types: any

let anyVar: any = 1;
anyVar = 'str';
anyVar = true;
anyVar = {};
anyVar = [];

//! special types: unknown (type-safe counterpart of any)
//* Anything is assignable to unknown, but unknown isn't assignable to anything

let unknownVar: unknown = 1;
unknownVar = 'str';
unknownVar = true;
unknownVar = {};
unknownVar = [];
// @ts-expect-error
const knownVar: string = unknownVar;

//! DON'T
// Don’t ever use the types Number, String, Boolean, Symbol, or Object These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code.
// @see https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types
const i: String = '';
const j: Number = 1;
const q: Boolean = true;
const r: Object = {};
const s: Symbol = Symbol('hola');
