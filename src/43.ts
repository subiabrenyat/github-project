// example.ts

class Example {
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

const example = new Example("Alice");
example.greet();
