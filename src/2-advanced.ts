//! enum

enum Days {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}
const day = Days.monday; // autocomplete
console.log({ day }); //? what will this print?

//! enum with initialization

enum Days2 {
  monday = 1,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}
const day2 = Days2.tuesday;
console.log({ day2 }); //? what will this print?

//! string enums

enum Days3 {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
  sunday = 'sunday',
}
const day3 = Days3.wednesday;
console.log({ day3 });

//! tuples
const tuple1: [number, string] = [1, 'str'];
const [t1, t2] = tuple1;
console.log({ t1, t2 });

//! tuples are mutable (behind the scenes they are arrays)

tuple1[1] = 'str2';
tuple1.push(3);
console.log(tuple1);

//* but you cannot access a value outside their bounds
// @ts-expect-error
tuple1[2] = 2;

//* or assign a type that doesn't match
// @ts-expect-error
tuple1[0] = '1';

//! named tuples (typescript 4.0+)

const tuple2: [lon: number, lat: number] = [0, 7];
tuple2[0] = 1;
console.log({ tuple2 });

//! union types

let strOrNum: number | string = 1;
strOrNum = 'str';

const arrStrOrNum: (string | number)[] = [1, 'str', 2, 3, 'hi'];
const arrStrOrNum2: Array<string | number> = [1, 'str', 2, 3, 'hi'];
