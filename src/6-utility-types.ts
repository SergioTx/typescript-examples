//! https://www.typescriptlang.org/docs/handbook/utility-types.html

//! Partial<Type> -> all properties in type optional

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
});

//! Required<Type> -> all properties inside type required

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };
// @ts-expect-error - b is required
const obj2: Required<Props> = { a: 5 };

//! Readonly<Type> -> all properties inside type redonly

interface Todo3 {
  title: string;
}

const todo3: Readonly<Todo3> = {
  title: 'Delete inactive users',
};
// @ts-expect-error - cannot overwrite readonly properties
todo3.title = 'Hello';

//! runtime readonly

const readonlyObj = Object.freeze({ a: 1 });

//! Record<Keys,Type> -> Constructs an object type whose property keys are Keys and whose property values are Type

// basic example

type D = Record<string, number>;
type D1 = {
  [key: string]: number;
};
const objD: D = {
  a: 1,
  b: 2,
};

// advanced example
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

//! Pick<Type, Keys> -> picks the set of properties Keys (string literal or union of string literals) from Type

interface Todo4 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo4, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

//! Omit<Type, Keys> ->

interface Todo5 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview5 = Omit<Todo5, 'description'>;

const todo4: TodoPreview5 = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};

//! NonNullable<Type> -> excludes null and undefined from Type

type T0 = NonNullable<string | number | undefined>; // string | number
