// LSP: Liskov Substitution Principle
// Nos dice que los objetos de una clase base puede ser remplazados por los objetos de sus clases derivadas y seguir funcionando correctamente.
// Ejemplo: tenemos la clase Bird que es extendida por FlyingBird y Eagle(águila) que extiende FlyingBird y también posee el método dive(bucear) por lo cual eagle puede volar y bucear pero si creamos penguin, este podrá bucear pero no volar y es ahi cuando se rompe el principio.
class Bird { }

class FlyingBird extends Bird {
  fly() {
    console.log('Fyling...');
  }
}

class Eagle extends FlyingBird {
  dive() {
    console.log('Diving...');
  }
}

const eagle = new Eagle();
eagle.fly();
eagle.dive();

class Penguin extends Bird {
  // Problem: Can't fly!
}