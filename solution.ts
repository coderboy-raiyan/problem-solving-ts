function formatValue(val: string | number | boolean) {
  if (typeof val === "string") {
    return val.toLocaleUpperCase();
  } else if (typeof val === "number") {
    return val * 10;
  } else if (typeof val === "boolean") {
    return !val;
  }
}

function getLength(stringOrArray: string | unknown[]) {
  if (Array.isArray(stringOrArray)) {
    return stringOrArray.length;
  }
  if (typeof stringOrArray === "string") {
    return stringOrArray
      .split("")
      .join("")
      .replace(/[^A-Za-z0-9]/g, "").length;
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

function filterByRating(books: { title: string; rating: number }[]) {
  return books.filter((book) => book.rating >= 4);
}

function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
) {
  return users.filter((user) => user?.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails({ title, author, isAvailable, publishedYear }: Book) {
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable}`
  );
}

function getUniqueValues(
  array1: (string | number)[],
  array2: (string | number)[]
) {
  const singleArray = [...array1, ...array2];
  return [...new Set(singleArray)];
}

function calculateTotalPrice(
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
) {
  return products.reduce((prev, { price, quantity, discount = 0 }) => {
    const finalPrice = price - (price * discount) / 100;
    const total = finalPrice * quantity;
    return prev + total;
  }, 0);
}
