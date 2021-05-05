//! optional chaining (now it exists in JS)
function fnOptional(a: any): void {
  const propC = a?.b?.c;
  console.log(propC);
}

//! it will return undefined, watch out
function fnOptional2(a: any, b: any): void {
  console.log(a?.id === b?.id);
}
fnOptional2(null, null); // true

//! non-null operator

function fnNonOptional3(a?: { id: number }): void {
  // nobody will declare optional parameter and then force it to true, just an example
  console.log(a!.id);
}

//! optional guards

function fnOptionalGuard(a?: MyObject) {
  if (a) {
    //* ts knows that a is not optional here
    console.log(a.b);
  }
}
