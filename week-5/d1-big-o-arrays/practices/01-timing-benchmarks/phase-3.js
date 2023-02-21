const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {


    let arr = [];
    for (let i = 1; i <= 10; i++) {
        let start = Date.now()

      arr.push(addNums(i * increment))

      let end = Date.now()
      console.log(end - start)

    }
    return arr
}

n = 1000
console.log(`addNums(${n}): `);

console.time('addNums10Timing');
addNums10Timing(10000000);
console.timeEnd('addNums10Timing');



console.log("\n***********\n");


function addManyNums10Timing(increment) {


    let arr = [];
    for (let i = 1; i <= 10; i++ ) {
        let start = Date.now();

      arr.push(addManyNums(i * increment))

      let end = Date.now();
      console.log(end - start)
    }


   return arr
  }


n = 1000
console.log(`addManyNums(${n}): `);

console.time('addManyNums10Timing');
addManyNums10Timing(1000);
console.timeEnd('addManyNums10Timing');
