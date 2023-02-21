// Your code here
const Employee = require('./employee')

const john = new Employee('John Wick', 'Dog Lover' )



let johnSays = john.sayName.bind(john)

//setTimeout(john.sayName, 2000) //undefined says hello. //we need to bind

//setTimeout(john.sayName.bind(john), 2000) //this works but ugly
setTimeout(johnSays, 2000)  //John Wick says hello.



let occJohn = john.sayOccupation.bind(john)
setTimeout(occJohn, 3000)   //John Wick is a Dog Lover.
