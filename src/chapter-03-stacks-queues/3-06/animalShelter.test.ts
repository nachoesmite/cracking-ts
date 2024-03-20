import { AnimalShelter, Cat, Dog } from "./animalShelter"

describe(`Queue - AnimalShelter`, () => {
  it(`add 3 cats and dogs 1 by 1 and get latest one`, () => {
    const animalShelter = new AnimalShelter();
    animalShelter.addAnimal(new Dog("Dog1",));
    animalShelter.addAnimal(new Cat("Cat1"));
    animalShelter.addAnimal(new Dog("Dog2", new Date(Date.now() + 5000)));
    animalShelter.addAnimal(new Cat("Cat2", new Date(Date.now() + 5000)));
    animalShelter.addAnimal(new Dog("Dog3", new Date(Date.now() + 10000)));
    animalShelter.addAnimal(new Cat("Cat3", new Date(Date.now() + 10000)));

    const animalToAdopt = animalShelter.getAnimal();
    const oldDog = animalShelter.getDog();
    const oldCat = animalShelter.getCat();
    const animalToAdopt2 = animalShelter.getAnimal();

    expect(animalToAdopt).toBeInstanceOf(Dog);
    expect(animalToAdopt?.name).toBe("Dog1");
    expect(oldDog).toBeInstanceOf(Dog);
    expect(oldDog?.name).toBe("Dog2");
    expect(oldCat).toBeInstanceOf(Cat);
    expect(oldCat?.name).toBe("Cat1");
    expect(animalToAdopt2).toBeInstanceOf(Cat);
    expect(animalToAdopt2?.name).toBe("Cat2");
  })
})