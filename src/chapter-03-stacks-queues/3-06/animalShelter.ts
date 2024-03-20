import { MyQueue } from "../../dataTypes/queue";


export class Animal {
  
  datetime: Date
  name: string

  constructor(name: string, datetime?: Date) {
    this.datetime = datetime ?? new Date();
    this.name = name;
  }

  speak() {
  }

}

export class Dog extends Animal {
  
  constructor(name: string, datetime?: Date) {
    super(name, datetime);
  }

  speak() {
    return `woff`;
  }
}

export class Cat extends Animal {

  constructor(name: string, datetime?: Date) {
    super(name, datetime);
  }

  speak() {
    return `miaw`;
  }
}

export class AnimalShelter {
  dogs: MyQueue<Dog>
  cats: MyQueue<Cat>

  constructor () {
    this.dogs = new MyQueue();
    this.cats = new MyQueue();
  }

  addAnimal(animal: Animal) {
    if (animal instanceof Dog) {
      this.dogs.add(animal);
    } else if (animal instanceof Cat) {
      this.cats.add(animal);
    }
  }

  getAnimal(): Animal | null {
    const firstDog = this.dogs.peek();
    const firstCat = this.cats.peek();
    if (!firstDog && !firstCat) {
      return null
    }
    if (!firstDog) return firstCat;
    if (!firstCat) return firstDog;

    if (firstCat.datetime.getTime() >= firstDog.datetime.getTime()) {
      return this.dogs.remove();
    } else {
      return this.cats.remove();
    }
  }

  getDog(): Dog | null {
    try {
      return this.dogs.remove();
    } catch (e) {
      return null;
    }
  }

  getCat(): Cat | null {
    try {
      return this.cats.remove();
    } catch (e) {
      return null;
    }
  }
}