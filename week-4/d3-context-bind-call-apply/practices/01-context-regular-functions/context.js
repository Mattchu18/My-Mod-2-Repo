function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // ? this will return 'undefined eats fish food' because 'this.name' isn't within a class/object


/********************************* Scenario 2 *********************************/
nemo.eat = eat; //this creates new key value pair. shoves eat inside nemo
nemo.eat(); // ? works because nemo got assigned eat as a value
            // nemo.eat has a function in it so we can call it with nemo.eat()


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // ? the function is being called but with no name attached to it. need to be nemo.eat() since
      //    function eat() is clg '${this.name} eats fish food'


/********************************* Scenario 4 *********************************/
// nemo.swim(); // ? this will return 'Nemo swimming in the water' because nemo is a new fish inside the class
                //  the swim() is inside the class


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;  //TYPE ERROR this isnt even calling the function
// swim(); // ? swim () wont return anything bc swim is being called outside of the class and swim() is inside
            // the class.
            // 'this' is not defined
