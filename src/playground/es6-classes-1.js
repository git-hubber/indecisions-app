class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi ${this.name} who is ${this.age} years old!`;
  }
}

class Student extends Person {
  constructor(name, age, major = "Janitorial Studies") {
    super(name, age);
    this.major = major;
  }
  getGreeting() {
    let description = super.getGreeting();
    if (this.major) {
      return `${description} They major in ${this.major}!`;
    }
    return description;
  }
}

class Travelor extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let description = super.getGreeting();
    if (this.homeLocation) {
      description = `${description} I am visiting from ${this.homeLocation}!`;
    }
    return description;
  }
}

const me = new Travelor("Martin Speedie", 30, 'Melbourne');
console.log(me.getGreeting());

const other = new Travelor("Sharon Wang", 25);
console.log(other.getGreeting());
