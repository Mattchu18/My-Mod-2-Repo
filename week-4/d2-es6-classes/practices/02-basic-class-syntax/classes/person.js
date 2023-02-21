// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(people) {  //we are calling this parameter 'people'

    if (!Array.isArray[people]) { //if not array run the console log
    console.log("introducePeople only takes an array as an argument.")
    }

    for (let person of people) {

      if (!(person instanceOf Person))
        //console.log()
    }

    people.forEach(person => person.introduce[])  //calling upon the static method introduce with all the people we pass in

  }

}





/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
