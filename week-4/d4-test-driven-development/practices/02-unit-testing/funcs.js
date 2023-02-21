function isFive(num) {
  // Your code here
  if ( num === 5) {
    return true
  } else return false
//return num === 5; //this returns boolean
}


function isOdd(number) {
  // Your code here
  if ( typeof number !== "number") {
    throw new Error ('error')
  }
  if ( number % 2 !== 0) {
    return true;
  } else {
    return false;
  }

//if(typeof number !== 'number') throw new Error();
//return (number % 2) !== 0;
}


function myRange(min, max, step = 1) {
  // Your code here
  let array = [];

    for (let i = min; i <= max; i += step) {
      array.push(i)
    }
    return array
  }



module.exports = { isFive, isOdd, myRange };
